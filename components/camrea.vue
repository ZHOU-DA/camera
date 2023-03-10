<template>
  <div ref="videoContainer">
    <video
      ref="video"
      style="width: 100vw"
      muted
      webkit-playsinline="true"
      playsinline="true"
      preload
    ></video>
    <button @click="stop">暂停</button>
    <input type="file" @change="videoChange" />

    <!-- <video controls id="my-video" style="width: 100vw">
      <source src="../assets/123.webm" type="video/webm" />
    </video> -->
    <video :src="blobURL" controls></video>
  </div>
</template>

<script>
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
// import '../assets/ogvjs-1.8.9/ogv'
// import '../assets/ogvjs-1.8.9/ogv-demuxer-webm-wasm'
import * as ogv from 'ogv'
// const ogv = require('ogv')

const ffmpeg = createFFmpeg({
  log: true,
  //   mainName: 'main',
  corePath: '/public/ffmpeg-core.js',
  // wasmPath: 'https://file.yda.cn/open/ffmpeg-core.wasm',
  logger: (msg) => {
    console.log(msg, '------------')
  },
  progress: (p) => {
    console.log('--------------------', p)
  }
})
import { nextTick, onMounted, reactive, toRefs } from 'vue'
// ffmpeg.load()
// await ffmpeg.load()
export default {
  name: 'preview',
  setup() {
    const state = reactive({
      video: null,
      mediaRecorder: null,
      stream: null,
      videoContainer: null,
      videoChunks: [],
      blobURL: ''
    })

    // 访问用户媒体设备的兼容方法
    const getUserMedia = (constrains, success, error) => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // 最新标准 API
        navigator.mediaDevices
          .getUserMedia(constrains)
          .then(success)
          .catch(error)
      } else if (navigator.webkitGetUserMedia) {
        // webkit 内核浏览器
        navigator.webkitGetUserMedia(constrains).then(success).catch(error)
      } else if (navigator.mozGetUserMedia) {
        // Firefox 浏览器
        navigator.mozGetUserMedia(constrains).then(success).catch(error)
      } else if (navigator.getUserMedia) {
        // 旧版 API
        navigator.getUserMedia(constrains).then(success).catch(error)
      } else {
        console.log('你的浏览器不支持访问用户媒体设备')
      }
    }

    const initVideo = () => {
      // const xmlhttp = new XMLHttpRequest()
      // xmlhttp.onreadystatechange = function () {
      //   console.log(xmlhttp.status, 'xmlhttp')
      //   if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      //     // document.write(xmlhttp.responseText)
      //     console.log('xmlhttp', xmlhttp.responseText.slice(0, 200))
      //   }
      // }

      // xmlhttp.open('get', 'https://ydatestapi.libawall.com/storage/1842024')

      // xmlhttp.send()

      console.log(ogv, '------------')
      const player = new ogv.OGVPlayer({ debug: true, debugFilter: /demuxer/ })
      player.width = 375
      player.height = 250
      player.style.background = '#000'
      // player.src = 'https://admin.yda.cn/nh_assets/47801.mp4'
      player.src = 'https://ydatestapi.libawall.com/storage/1842024'

      player.muted = true
      state.videoContainer.appendChild(player)

      player.play()
      console.dir(player)
    }

    // 成功的回调
    const successFn = (mediaStream) => {
      const video = document.querySelector('video')
      try {
        // 兼容webkit内核浏览器
        const CompatibleURL = window.URL || window.webkitURL
        // 将视频流设置为 video 元素的源
        // 此处的代码新 Chrome 会报错，所以用 try...catch 来捕获
        video.src = CompatibleURL.createObjectURL(mediaStream)
      } catch {
        // 新的用法
        video.srcObject = mediaStream
      }
      video.onloadedmetadata = () => {
        video.play()
        state.stream = mediaStream
        record()
      }
    }

    ffmpeg.setLogger(({ type, message }) => {
      console.log('🚀🚀 ~ message', message)
      console.log('🚀🚀 ~ type', type)
    })

    // 失败的回调
    const errorFn = (error) => {
      console.log('访问用户媒体设备失败：', error.name, error.message)
    }

    const record = () => {
      var options = {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000
        // mimeType: 'video/webm;codecs=h264,opus'
      }
      state.mediaRecorder = new MediaRecorder(state.stream, options)
      state.mediaRecorder.start()

      state.mediaRecorder.ondataavailable = function (e) {
        // console.log('# 产生录制数据...', e)
        console.log('-----------', e.srcElement.mimeType)
        console.log(
          '# ondataavailable, size = ' + parseInt(e.size / 1024) + 'KB'
        )
        state.videoChunks.push(e.data)
      }
      state.mediaRecorder.onstop = function (e) {
        console.log('# 录制终止 ...')
        const fullBlob = new Blob(state.videoChunks, {
          type: 'video/webm'
        })
        const blobURL = window.URL.createObjectURL(fullBlob)
        console.log(
          'blob is ?, size=' + parseInt(fullBlob.size / 1024) + 'KB. '
        )
        console.log(fullBlob)
        console.log('blobURL =' + blobURL)
        // console.log(12323)
        //saveFile(blobURL);
        // uploadFile(fullBlob);
        // let reader = new FileReader();
        // reader.onload = function () {
        //     console.log(reader.result)
        //     fileToMp4(reader.result);
        // }
        // reader.readAsArrayBuffer(fullBlob);

        const fileData = new File([fullBlob], 'bg.webm', {
          type: 'video/webm'
        })
        // state.blobURL = blobURL
        fileToMp4(fileData)
        // const a = document.createElement('a')
        // a.href = blobURL
        // a.download = '123.webm'
        // a.click()
      }
    }

    const stop = () => {
      state.mediaRecorder.stop()
    }

    const fileToMp4 = async (dataInputVideo) => {
      console.log(await fetchFile(dataInputVideo))
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load()
      }
      const { name } = dataInputVideo
      console.log(dataInputVideo)
      ffmpeg.FS('writeFile', name, await fetchFile(dataInputVideo))
      // ffmpeg.FS('writeFile', 'bj.mp4', dataInputVideo);
      //   await ffmpeg.run('-i', name, 'output.mp4')
      ffmpeg
        .run('-i', name, '12347.mp4')
        .then(() => {
          const data = ffmpeg.FS('readFile', '12347.mp4')
          console.log(data, '-----------------')
          const blobData = new Blob([data.buffer], { type: 'video/mp4' })
          const a = document.createElement('a')
          a.href = URL.createObjectURL(blobData)
          a.download = '12347.mp4'
          state.blobURL = URL.createObjectURL(blobData)
          a.click()
        })
        .catch((err) => {
          console.log('-----------', err)
        })
    }

    const videoChange = (e) => {
      console.log(e)
      fileToMp4(e.target.files[0])
    }

    onMounted(() => {
      console.log(navigator.userAgent)
      console.log(OGVCompat.supported('OGVPlayer'), '---------')
      nextTick(() => {
        // initVideo()
      })
      // 调用
      getUserMedia(
        {
          video: {
            width: {
              // min: 1280
            },
            height: {
              // min: 768
            },
            facingMode: 'environment',
            frameRate: {
              min: 30
            }
          },
          audio: true
        },
        successFn,
        errorFn
      )
    })

    return {
      ...toRefs(state),
      videoChange,
      stop
    }
  }
}
</script>

<style></style>
