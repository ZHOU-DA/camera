<template>
  <div class="publish">
    <video
      ref="video"
      muted
      webkit-playsinline="true"
      playsinline="true"
      preload
      style="width: 100vw; height: 100vh; object-fit: cover"
    ></video>
    <!-- <div class="black-bg" v-if="loading">相机启动中</div> -->

    <canvas style="display: none" id="canvasCamera"></canvas>
    <div v-if="imgSrc" class="img_bg_camera">
      <img :src="imgSrc" class="tx_img" />
    </div>
    <video ref="pVideo" controls></video>
    <button @click="OpenCamera">打开摄像头</button>
    <button @click="CloseCamera">关闭摄像头</button>
    <button @click="setImage">拍照</button>
    <button @click="recordOrStop">视频录制</button>
    <button @click="reset">重置</button>
    <a id="downLoadLink">下载</a>
    <!-- <video>


    </video> -->
    <!-- <video
      class="videoBox"
      controlslist="nodownload nofullscreen  noplaybackrate"
      :disablePictureInPicture="true"
      muted
      controls
      autoplay
      src="https://ydatestapi.libawall.com/storage/1830442"
      id="my-video"
    ></video> -->
    <!-- <video controls id="my-video">
      <source
        src="https://ydatestapi.libawall.com/storage/1839984"
        type="video/mp4"
      />
    </video> -->
    <!-- <video ></video> -->
    <video id="myVideo" class="video-js vjs-default-skin" playsinline></video>
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted, nextTick } from '@vue/runtime-core'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-record/dist/css/videojs.record.css'
// import Record from 'videojs-record/dist/videojs.record.js'

import 'webrtc-adapter's
import { ConvertEngine } from 'videojs-record/src/js/engine/convert-engine.js'

import RecordRTC from 'recordrtc'

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'

export default {
  setup(props, { emit }) {
    const state = reactive({
      mediaStreamTrack: {},
      video_stream: '', // 视频stream
      imgSrc: '', // 拍照图片
      canvas: null,
      context: null,
      video: null,
      pVideo: null,
      mediaRecorder: null,
      recordedBlobs: [], // 视频音频 blobs
      isRecord: false, // 视频是否正在录制
      videoArr: [],
      mid: 16,
      isRestNum: 0,
      loading: true,
      player: ''
    })

    const options = reactive({
      controls: true,
      autoplay: false,
      fluid: false,
      loop: false,
      width: 320,
      height: 240,
      bigPlayButton: false,
      controlBar: {
        volumePanel: false
      },
      plugins: {
        // configure videojs-record plugin
        record: {
          audio: false,
          video: true,
          debug: true
        }
      }
    })

    const ResolutionsToCheck = [
      { width: 160, height: 120 },
      { width: 320, height: 180 },
      { width: 320, height: 240 },
      { width: 640, height: 360 },
      { width: 640, height: 480 },
      { width: 768, height: 576 },
      { width: 1024, height: 576 },
      { width: 1280, height: 720 },
      { width: 1280, height: 768 },
      { width: 1280, height: 800 },
      { width: 1280, height: 900 },
      { width: 1280, height: 1000 },
      { width: 1920, height: 1080 },
      { width: 1920, height: 1200 },
      { width: 2560, height: 1440 },
      { width: 3840, height: 2160 },
      { width: 4096, height: 2160 }
    ]

    const ffmpeg = createFFmpeg({
      log: true
      // corePath: '../ffmpeg.min.js'
      // corePath: 'https://unpkg.com/@ffmpeg/core@0.8.5/dist/ffmpeg-core.js'
    })

    // 正常支持版本
    const params = reactive({
      video: {
        facingMode: 'environment',
        width: {
          // min: 1024,
          ideal: 1280
          // max: 1920
        },
        height: {
          // min: 768,
          ideal: 768
          // max: 1080
        },
        // frameRate: {
        //   min: 30,
        //   ideal: 30
        //   // max: 1920
        // },
        // advanced: [{ width: 1080, height: 720 }, { aspectRatio: 2 }]
        // advanced: [{ aspectRatio: 1 }]
        aspectRatio: 1,
        echoCancellation: true
        // sampleSize: 20
        // width: 1280,
        // height: 720
      }
    })

    // 调用打开摄像头功能
    const getCamera = async () => {
      // console.log(mp4, '--------')
      // 获取 canvas 画布
      state.canvas = document.getElementById('canvasCamera')
      state.context = state.canvas.getContext('2d')
      // console.dir(state.video.videoHeight, state.video.videoWidth)
      // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
      // if (navigator.mediaDevices === undefined) {
      //   navigator.mediaDevices = {}
      // }
      console.log(navigator.userAgent, navigator.mediaDevices)
      console.log()
      initCarmera().then(() => {
        console.log('---------9999999-------', !state.isRestNum)
        if (!state.isRestNum) {
          console.log('----------888888-------')
          state.isRestNum += 1
          params.video.width.min = 1920
          // params.video.height.min = 192
          // params.video.widt
          // params.video.
          console.log('-------123123-----')
          initCarmera()
        }
      })
    }

    const getUserMedia = (constrains, success, error) => {
      console.log('WebAssembly' in window, '-----------------')
      if (navigator.mediaDevices.getUserMedia) {
        //最新标准API
        return navigator.mediaDevices.getUserMedia(constrains)
      } else if (navigator.webkitGetUserMedia) {
        //webkit内核浏览器
        return navigator.webkitGetUserMedia(constrains)
      } else if (navigator.mozGetUserMedia) {
        //Firefox浏览器
        return navagator.mozGetUserMedia(constrains)
      } else if (navigator.getUserMedia) {
        //旧版API
        return navigator.getUserMedia(constrains)
      }
    }

    const initVideoJs = () => {
      console.log('------------3737737337377')
      state.player = videojs('#myVideo', options, () => {
        // print version information at startup
        // var msg =
        //   'Using video.js ' +
        //   videojs.VERSION +
        //   ' with videojs-record ' +
        //   videojs.getPluginVersion('record') +
        //   ' and recordrtc ' +
        //   RecordRTC.version
        // videojs.log(msg)
        console.log('---------123321')
        console.log(ConvertEngine, '---------3333333')

        // const conver = new ConvertEngine(state.player, options)
        console.log(conver, '----------232423423')
      })
    }

    const initCarmera = () => {
      return new Promise((resolve, reject) => {
        console.log('--------------')
        if (
          navigator.mediaDevices.getUserMedia ||
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia
        ) {
          //调用用户媒体设备，访问摄像头
          getUserMedia(params)
            .then((stream) => {
              console.log(stream, '-------------------')
              console.log('----', stream.getVideoTracks()[0].getSettings())
              // // 摄像头开启成功
              state.mediaStreamTrack =
                typeof stream.stop === 'function'
                  ? stream
                  : stream.getTracks()[0]
              state.video_stream = stream
              // // console.log(stream, '-----------')
              // // console.log('srcObject' in state.video)
              // if ('srcObject' in state.video) {
              if (state.isRestNum > 0) {
                state.video.srcObject = stream
                state.video.play()
                // record()
                setTimeout(() => {
                  state.loading = false
                }, 500)
              }
              console.log('----------88888888--------')
              resolve()
            })
            .catch((err) => {
              if (state.isRestNum > 0) {
                state.video.srcObject = state.video_stream
                state.video.play()
                // record()
                setTimeout(() => {
                  state.loading = false
                }, 500)
              }
            })
        } else {
          alert('你的浏览器不支持访问用户媒体设备')
        }
      })
    }

    function checkSuccess(stream) {
      console.log('Success for --> ', mid, ' ', ResolutionsToCheck[mid])
      selectedWidth = ResolutionsToCheck[mid].width
      selectedHeight = ResolutionsToCheck[mid].height

      state.mid = state.mid + 1

      for (let track of stream.getTracks()) {
        track.stop()
      }

      initCarmera()
    }

    function checkError(error) {
      console.log(
        'Failed for --> ' + state.mid,
        ' ',
        ResolutionsToCheck[state.mid],
        ' ',
        error
      )
      state.mid = state.mid - 1

      initCarmera()
    }

    // 拍照 绘制图片
    const setImage = async () => {
      // const x = document.getElementById('my-video')
      // console.dir('-------123213', x, document.getElementById('my-video').error)

      state.canvas.width = state.video.videoWidth
      state.canvas.height = state.video.videoHeight
      console.log(state.video, state.video.videoHeight, state.video.videoWidth)
      // 点击canvas画图
      state.context.drawImage(state.video, 0, 0)
      console.log()
      // 获取图片base64链接
      state.canvas.toBlob((blob) => {
        //   state.imgSrc = image
        console.log(blob, '-------')
        const file = new File([blob], `${Math.ceil(Math.random() * 999)}.png`, {
          type: blob.type
        })
        state.imgSrc = URL.createObjectURL(blob)
        // console.log(state.imgSrc, '----------')
        // emit('refreshDataList', state.imgSrc)
      })
    }
    // 打开摄像头
    const OpenCamera = () => {
      console.log('打开摄像头', state.mediaRecorder)
      // getCamera()
      state.mediaRecorder.start()
    }
    // 关闭摄像头
    const CloseCamera = () => {
      console.log('关闭摄像头')
      // state.video.srcObject.getTracks()[0].stop()
      state.mediaRecorder.stop()
    }

    // 录制或暂停
    const recordOrStop = () => {
      console.log('---------', state.isRecord)
      if (state.isRecord) {
        stop()
      } else {
        start()
      }
    }

    const start = () => {
      state.isRecord = !state.isRecord
      state.recordedBlobs = []
      if (state.mediaRecorder) {
        state.mediaRecorder.start(60)
      } else {
        record()
      }
    }

    // 视频录制
    const record = async () => {
      // await ffmpeg.load()
      let options
      if (typeof MediaRecorder.isTypeSupported === 'function') {
        // 根据浏览器来设置编码参数
        if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
          options = {
            MimeType: 'video/webm;codecs=h264'
          }
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
          options = {
            MimeType: 'video/webm;codecs=h264'
          }
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
          options = {
            MimeType: 'video/webm;codecs=vp8'
          }
        }
        state.mediaRecorder = new MediaRecorder(state.video_stream, {
          mimeType: 'video/webm;codecs=h264'
        })
      } else {
        // console.log('isTypeSupported is not supported, using default codecs for browser');
        console.log('当前不支持isTypeSupported，使用浏览器的默认编解码器')
        mediaRecorder = new MediaRecorder(state.video_stream, {
          mimeType: 'video/webm;codecs=h264'
        })
      }
      console.log(options, '--------')
      console.log('---------9999-------', state.mediaRecorder.state, options)
      state.mediaRecorder.start(60)

      // 视频录制监听事件
      state.mediaRecorder.ondataavailable = (e) => {
        console.log(e.data, e.data.size)
        // 录制的视频数据有效
        if (e.data && e.data.size > 0) {
          state.recordedBlobs.push(e.data)
        }
      }
      // 停止录像后增加下载视频功能，将视频流转为mp4格式
      state.mediaRecorder.onstop = () => {
        console.log('-------123----', state.recordedBlobs)
        const blob = new Blob(state.recordedBlobs, { type: 'video/mp4' })
        // state.recordedBlobs = []
        // if ('srcObject' in state.pVideo) {
        //   state.pVideo.srcObject = blob.stream()
        // } else {
        // 防止在新的浏览器里使用它，应为它已经不再支持了
        const blobData = new Blob(['1231231'])
        const reader = new FileReader()
        reader.onload = async () => {
          console.log(
            reader.result,
            reader.result.byteLength,
            '--------------',
            blob
          )
          fileToMp4(reader.result)
        }
        reader.onerror = () => reject
        reader.readAsArrayBuffer(blobData)

        // }
        // state.pVideo.srcObject = blob
        // 将视频链接转换完可以用于在浏览器上预览的本地视频
        // const videoUrl = window.URL.createObjectURL(blob)
        // state.pVideo.src = videoUrl

        // console.log(videoUrl)
        // 设置下载链接
        // document.getElementById('downLoadLink').href = videoUrl
        // 设置下载mp4格式视频
        document.getElementById('downLoadLink').download = 'media.mp4'
        document.getElementById('downLoadLink').innerHTML =
          'DownLoad video file'
        // 生成随机数字
        const rand = Math.floor(Math.random() * 1000000)
        // 生成视频名
        const name = `video${rand}.mp4`

        // setAttribute() 方法添加指定的属性，并为其赋指定的值
        document.getElementById('downLoadLink').setAttribute('download', name)
        document.getElementById('downLoadLink').setAttribute('name', name)

        // 0.5s后自动下载视频
        // document.getElementById('downLoadLink').click()
      }
    }

    //转码
    const fileToMp4 = async (fileData) => {
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load()
      }
      ffmpeg.FS('writeFile', 'name', await fetchFile(fileData))
      await ffmpeg.run('-i', 'name', 'output.mp4')
      const data = ffmpeg.FS('readFile', 'output.mp4')
      console.log(data)
      // state.pVideo.src
      state.pVideo.src = URL.createObjectURL(
        new Blob([data.buffer], { type: 'video/mp4' })
      )
    }

    const ajax = (url, cb) => {
      const xhr = new XMLHttpRequest()
      xhr.open('get', url)
      xhr.responseType = 'blob' // ""|"text"-字符串 "blob"-Blob对象 "arraybuffer"-ArrayBuffer对象
      xhr.onload = function () {
        cb(xhr.response)
      }
      xhr.send()
    }

    // 停止录制
    const stop = () => {
      state.isRecord = !state.isRecord
      if (!state.video.srcObject) return
      const stream = state.video.srcObject
      const tracks = stream.getTracks()
      // 关闭摄像头和音频
      console.log('-------', tracks)
      // tracks.forEach((track) => {
      //   track.stop()
      // })
      state.mediaRecorder.stop()
    }

    const reset = () => {
      // getCamera()
      params.video.height = 720
      initCarmera().then(() => {
        console.log('---------', 90900)
        params.video.height = 900
        initCarmera()
      })
    }

    onMounted(async () => {
      // 进入页面 自动调用摄像头

      // navigator.mediaDevices.enumerateDevices().then((devices) => {
      //   console.log(devices)
      //   const videoArr = devices
      //     .filter((device) => device.kind == 'videoinput')
      //     .map((device) => {
      //       console.log(device.kind, device)
      //       if (device.kind == 'videoinput') {
      //         return {
      //           label: device.label,
      //           id: device.deviceId
      //         }
      //       }
      //     })

      //   console.log(videoArr)
      // params.video.deviceId = videoArr[1].deviceId

      const types = [
        'video/webm',
        'audio/webm',
        'video/webm\;codecs=vp8',
        'video/webm\;codecs=daala',
        'video/webm\;codecs=h264',
        'audio/webm\;codecs=opus',
        'video/mpeg'
      ]

      for (var i in types) {
        console.log(
          'Is ' +
            types[i] +
            ' supported? ' +
            (MediaRecorder.isTypeSupported(types[i]) ? 'Maybe!' : 'Nope :(')
        )
      }
      getCamera()

      nextTick(() => {
        initVideoJs()
      })
      // })
    })

    return {
      ...toRefs(state),
      OpenCamera,
      CloseCamera,
      reset,
      setImage,
      recordOrStop
    }
  }
}
</script>

<style scoped>
.publish {
  position: relative;
}
.black-bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  width: 100%;
  height: 300px;
}
canvas {
  width: 100%;
  height: 300px;
}
button {
  width: 100px;
  height: 40px;
  position: relative;
  bottom: 0;
  left: 0;
  background-color: rgb(22, 204, 195);
}

.tx_img {
  width: 100%;
}
</style>
