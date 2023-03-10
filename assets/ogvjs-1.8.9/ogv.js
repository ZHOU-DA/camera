/*! For license information please see ogv.js.LICENSE.txt */
!(function webpackUniversalModuleDefinition(t, i) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = i())
    : 'function' == typeof define && define.amd
    ? define([], i)
    : 'object' == typeof exports
    ? (exports.ogvjs = i())
    : (t.ogvjs = i())
})(globalThis, function () {
  return (() => {
    var t = {
        506: (t) => {
          ;(t.exports = function _assertThisInitialized(t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return t
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        575: (t) => {
          ;(t.exports = function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        913: (t) => {
          function _defineProperties(t, i) {
            for (var u = 0; u < i.length; u++) {
              var d = i[u]
              ;(d.enumerable = d.enumerable || !1),
                (d.configurable = !0),
                'value' in d && (d.writable = !0),
                Object.defineProperty(t, d.key, d)
            }
          }
          ;(t.exports = function _createClass(t, i, u) {
            return (
              i && _defineProperties(t.prototype, i),
              u && _defineProperties(t, u),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            )
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        525: (t, i, u) => {
          var d = u(331)
          function _get() {
            return (
              'undefined' != typeof Reflect && Reflect.get
                ? ((t.exports = _get = Reflect.get),
                  (t.exports.__esModule = !0),
                  (t.exports.default = t.exports))
                : ((t.exports = _get =
                    function _get(t, i, u) {
                      var c = d(t, i)
                      if (c) {
                        var l = Object.getOwnPropertyDescriptor(c, i)
                        return l.get
                          ? l.get.call(arguments.length < 3 ? t : u)
                          : l.value
                      }
                    }),
                  (t.exports.__esModule = !0),
                  (t.exports.default = t.exports)),
              _get.apply(this, arguments)
            )
          }
          ;(t.exports = _get),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        754: (t) => {
          function _getPrototypeOf(i) {
            return (
              (t.exports = _getPrototypeOf =
                Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function _getPrototypeOf(t) {
                      return t.__proto__ || Object.getPrototypeOf(t)
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              _getPrototypeOf(i)
            )
          }
          ;(t.exports = _getPrototypeOf),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        205: (t, i, u) => {
          var d = u(489)
          ;(t.exports = function _inherits(t, i) {
            if ('function' != typeof i && null !== i)
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            ;(t.prototype = Object.create(i && i.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 }
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              i && d(t, i)
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        318: (t) => {
          ;(t.exports = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t }
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        585: (t, i, u) => {
          var d = u(8).default,
            c = u(506)
          ;(t.exports = function _possibleConstructorReturn(t, i) {
            if (i && ('object' === d(i) || 'function' == typeof i)) return i
            if (void 0 !== i)
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              )
            return c(t)
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        489: (t) => {
          function _setPrototypeOf(i, u) {
            return (
              (t.exports = _setPrototypeOf =
                Object.setPrototypeOf ||
                function _setPrototypeOf(t, i) {
                  return (t.__proto__ = i), t
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              _setPrototypeOf(i, u)
            )
          }
          ;(t.exports = _setPrototypeOf),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        331: (t, i, u) => {
          var d = u(754)
          ;(t.exports = function _superPropBase(t, i) {
            for (
              ;
              !Object.prototype.hasOwnProperty.call(t, i) &&
              null !== (t = d(t));

            );
            return t
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        8: (t) => {
          function _typeof(i) {
            return (
              (t.exports = _typeof =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              _typeof(i)
            )
          }
          ;(t.exports = _typeof),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports)
        },
        848: (t) => {
          window,
            (t.exports = (function (t) {
              var i = {}
              function r(u) {
                if (i[u]) return i[u].exports
                var d = (i[u] = { i: u, l: !1, exports: {} })
                return (
                  t[u].call(d.exports, d, d.exports, r), (d.l = !0), d.exports
                )
              }
              return (
                (r.m = t),
                (r.c = i),
                (r.d = function (t, i, u) {
                  r.o(t, i) ||
                    Object.defineProperty(t, i, { enumerable: !0, get: u })
                }),
                (r.r = function (t) {
                  'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                      value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 })
                }),
                (r.t = function (t, i) {
                  if ((1 & i && (t = r(t)), 8 & i)) return t
                  if (4 & i && 'object' == typeof t && t && t.__esModule)
                    return t
                  var u = Object.create(null)
                  if (
                    (r.r(u),
                    Object.defineProperty(u, 'default', {
                      enumerable: !0,
                      value: t
                    }),
                    2 & i && 'string' != typeof t)
                  )
                    for (var d in t)
                      r.d(
                        u,
                        d,
                        function (i) {
                          return t[i]
                        }.bind(null, d)
                      )
                  return u
                }),
                (r.n = function (t) {
                  var i =
                    t && t.__esModule
                      ? function () {
                          return t.default
                        }
                      : function () {
                          return t
                        }
                  return r.d(i, 'a', i), i
                }),
                (r.o = function (t, i) {
                  return Object.prototype.hasOwnProperty.call(t, i)
                }),
                (r.p = ''),
                r((r.s = 1))
              )
            })([
              function (t, i) {
                function r(t, i) {
                  if (t < 1 || t !== Math.round(t))
                    throw 'Invalid channel count for BufferQueue'
                  ;(this.channels = t), (this.bufferSize = i), this.flush()
                }
                ;(r.prototype.flush = function () {
                  ;(this._buffers = []),
                    (this._pendingBuffer = this.createBuffer(this.bufferSize)),
                    (this._pendingPos = 0)
                }),
                  (r.prototype.sampleCount = function () {
                    var t = 0
                    return (
                      this._buffers.forEach(function (i) {
                        t += i[0].length
                      }),
                      t
                    )
                  }),
                  (r.prototype.createBuffer = function (t) {
                    for (var i = [], u = 0; u < this.channels; u++)
                      i[u] = new Float32Array(t)
                    return i
                  }),
                  (r.prototype.validate = function (t) {
                    if (t.length !== this.channels) return !1
                    for (var i, u = 0; u < t.length; u++) {
                      var d = t[u]
                      if (!(d instanceof Float32Array)) return !1
                      if (0 == u) i = d.length
                      else if (d.length !== i) return !1
                    }
                    return !0
                  }),
                  (r.prototype.appendBuffer = function (t) {
                    if (!this.validate(t))
                      throw 'Invalid audio buffer passed to BufferQueue.appendBuffer'
                    for (
                      var i = t[0].length,
                        u = this.channels,
                        d = this._pendingPos,
                        c = this._pendingBuffer,
                        l = this.bufferSize,
                        h = 0;
                      h < i;
                      h++
                    ) {
                      for (var _ = 0; _ < u; _++) c[_][d] = t[_][h]
                      ++d == l &&
                        (this._buffers.push(c),
                        (d = this._pendingPos = 0),
                        (c = this._pendingBuffer = this.createBuffer(l)))
                    }
                    this._pendingPos = d
                  }),
                  (r.prototype.prependBuffer = function (t) {
                    if (!this.validate(t))
                      throw 'Invalid audio buffer passed to BufferQueue.prependBuffer'
                    var i = this._buffers.slice(0)
                    i.push(
                      this.trimBuffer(this._pendingBuffer, 0, this._pendingPos)
                    ),
                      this.flush(),
                      this.appendBuffer(t)
                    for (var u = 0; u < i.length; u++) this.appendBuffer(i[u])
                  }),
                  (r.prototype.nextBuffer = function () {
                    if (this._buffers.length) return this._buffers.shift()
                    var t = this.trimBuffer(
                      this._pendingBuffer,
                      0,
                      this._pendingPos
                    )
                    return (
                      (this._pendingBuffer = this.createBuffer(
                        this.bufferSize
                      )),
                      (this._pendingPos = 0),
                      t
                    )
                  }),
                  (r.prototype.trimBuffer = function (t, i, u) {
                    var d = t[0].length,
                      c = i + Math.min(u, d)
                    if (0 == i && c >= d) return t
                    for (var l = [], h = 0; h < this.channels; h++)
                      l[h] = t[h].subarray(i, c)
                    return l
                  }),
                  (t.exports = r)
              },
              function (t, i, u) {
                !(function () {
                  u(0)
                  var i = u(2),
                    d = u(4)
                  function n(t) {
                    ;(this._options = t || {}),
                      (this._backend = null),
                      (this._resampleFractional = 0),
                      (this._resampleLastSampleData = void 0),
                      (this._tempoChanger = null)
                  }
                  ;(n.prototype.rate = 0),
                    (n.prototype.targetRate = 0),
                    (n.prototype.channels = 0),
                    (n.prototype.bufferSize = 0),
                    Object.defineProperty(n.prototype, 'bufferDuration', {
                      get: function () {
                        return this.targetRate
                          ? this.bufferSize / this.targetRate
                          : 0
                      }
                    }),
                    Object.defineProperty(n.prototype, 'bufferThreshold', {
                      get: function () {
                        return this._backend
                          ? this._backend.bufferThreshold / this.targetRate
                          : 0
                      },
                      set: function (t) {
                        if (!this._backend)
                          throw 'Invalid state: AudioFeeder cannot set bufferThreshold before init'
                        this._backend.bufferThreshold = Math.round(
                          t * this.targetRate
                        )
                      }
                    }),
                    Object.defineProperty(n.prototype, 'playbackPosition', {
                      get: function () {
                        return this._backend
                          ? this.getPlaybackState().playbackPosition
                          : 0
                      }
                    }),
                    Object.defineProperty(
                      n.prototype,
                      'outputPlaybackPosition',
                      {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().outputPlaybackPosition
                            : 0
                        }
                      }
                    ),
                    Object.defineProperty(n.prototype, 'durationBuffered', {
                      get: function () {
                        return this._backend
                          ? this.getPlaybackState().samplesQueued /
                              this.targetRate
                          : 0
                      }
                    }),
                    Object.defineProperty(n.prototype, 'muted', {
                      get: function () {
                        if (this._backend) return this._backend.muted
                        throw 'Invalid state: cannot get mute before init'
                      },
                      set: function (t) {
                        if (!this._backend)
                          throw 'Invalid state: cannot set mute before init'
                        this._backend.muted = t
                      }
                    }),
                    (n.prototype.mute = function () {
                      this.muted = !0
                    }),
                    (n.prototype.unmute = function () {
                      this.muted = !1
                    }),
                    Object.defineProperty(n.prototype, 'volume', {
                      get: function () {
                        if (this._backend) return this._backend.volume
                        throw 'Invalid state: cannot get volume before init'
                      },
                      set: function (t) {
                        if (!this._backend)
                          throw 'Invalid state: cannot set volume before init'
                        this._backend.volume = t
                      }
                    }),
                    Object.defineProperty(n.prototype, 'tempo', {
                      get: function () {
                        if (this._tempoChanger)
                          return this._tempoChanger.getTempo()
                        throw 'Invalid state: cannot get tempo before init'
                      },
                      set: function (t) {
                        if (!this._tempoChanger)
                          throw 'Invalid state: cannot set tempo before init'
                        this._tempoChanger.setTempo(t)
                      }
                    }),
                    (n.prototype.init = function (t, u) {
                      if (
                        ((this.channels = t),
                        (this.rate = u),
                        this._options.backendFactory)
                      )
                        this._backend = this._options.backendFactory(
                          t,
                          u,
                          this._options
                        )
                      else {
                        if (!i.isSupported()) throw 'No supported backend'
                        this._backend = new i(t, u, this._options)
                      }
                      ;(this.targetRate = this._backend.rate),
                        (this.bufferSize = this._backend.bufferSize),
                        (this._tempoChanger = d({
                          sampleRate: this.targetRate,
                          numChannels: t,
                          tempo: 1
                        })),
                        (this._backend.onstarved = function () {
                          this.onstarved && this.onstarved()
                        }.bind(this)),
                        (this._backend.onbufferlow = function () {
                          this.onbufferlow && this.onbufferlow()
                        }.bind(this))
                    }),
                    (n.prototype._resample = function (t) {
                      var i = this.rate,
                        u = this.channels,
                        d = this._backend.rate,
                        c = this._backend.channels
                      if (i == d && u == c) return t
                      var l,
                        h = [],
                        _ = t[0].length,
                        p = this._resampleFractional,
                        m = (_ * d) / i + p,
                        V = Math.floor(m),
                        g = m - V
                      l =
                        i < d
                          ? function (t, u, c, l) {
                              for (
                                var a = function (i) {
                                    return i < 0
                                      ? c && c.length + i > 0
                                        ? c[c.length + i]
                                        : t[0]
                                      : t[i]
                                  },
                                  h = 0;
                                h < u.length;
                                h++
                              ) {
                                var _,
                                  m = ((h + 1 - p) * i) / d - 1,
                                  V = Math.floor(m),
                                  g = Math.ceil(m)
                                ;(_ =
                                  V == g
                                    ? a(V)
                                    : a(V) * (g - m) + a(g) * (m - V)),
                                  (u[h] = l * _)
                              }
                            }
                          : function (t, i, u, d) {
                              for (var c = 0; c < i.length; c++)
                                i[c] = d * t[((c * t.length) / i.length) | 0]
                            }
                      var v = 1
                      c > u && (v = Math.SQRT1_2)
                      for (var y = 0; y < c; y++) {
                        var b = y
                        y >= u && (b = 0)
                        var T = t[b],
                          k = new Float32Array(V)
                        l(
                          T,
                          k,
                          this._resampleLastSampleData
                            ? this._resampleLastSampleData[b]
                            : void 0,
                          v
                        ),
                          h.push(k)
                      }
                      return (
                        (this._resampleFractional = g),
                        (this._resampleLastSampleData = t),
                        h
                      )
                    }),
                    (n.prototype.bufferData = function (t) {
                      if (!this._backend)
                        throw 'Invalid state: AudioFeeder cannot bufferData before init'
                      var i = this._resample(t)
                      ;(i = this._tempoChanger.process(i)),
                        this._backend.appendBuffer(i)
                    }),
                    (n.prototype.getPlaybackState = function () {
                      if (this._backend) {
                        var t = this._backend.getPlaybackState()
                        return (
                          (t.outputPlaybackPosition = t.playbackPosition),
                          (t.playbackPosition =
                            this._tempoChanger.mapOutputToInputTime(
                              t.outputPlaybackPosition
                            )),
                          t
                        )
                      }
                      throw 'Invalid state: AudioFeeder cannot getPlaybackState before init'
                    }),
                    (n.prototype.waitUntilReady = function (t) {
                      if (!this._backend)
                        throw 'Invalid state: AudioFeeder cannot waitUntilReady before init'
                      this._backend.waitUntilReady(t)
                    }),
                    (n.prototype.start = function () {
                      if (!this._backend)
                        throw 'Invalid state: AudioFeeder cannot start before init'
                      this._backend.start()
                    }),
                    (n.prototype.stop = function () {
                      if (!this._backend)
                        throw 'Invalid state: AudioFeeder cannot stop before init'
                      this._backend.stop()
                    }),
                    (n.prototype.flush = function () {
                      if (
                        ((this._resampleFractional = 0),
                        (this._resampleLastSampleData = void 0),
                        !this._backend)
                      )
                        throw 'Invalid state: AudioFeeder cannot flush before init'
                      this._tempoChanger.flush(this.durationBuffered),
                        this._backend.flush()
                    }),
                    (n.prototype.close = function () {
                      this._backend &&
                        (this._backend.close(), (this._backend = null))
                    }),
                    (n.prototype.onstarved = null),
                    (n.prototype.onbufferlow = null),
                    (n.isSupported = function () {
                      return !!Float32Array && i.isSupported()
                    }),
                    (n.initSharedAudioContext = function () {
                      return i.isSupported() ? i.initSharedAudioContext() : null
                    }),
                    (t.exports = n)
                })()
              },
              function (t, i, u) {
                !(function () {
                  var i = window.AudioContext || window.webkitAudioContext,
                    d = u(0),
                    c = u(3)
                  function o(t, i, u) {
                    var c = u.audioContext || o.initSharedAudioContext()
                    if (
                      ((this._context = c),
                      (this.output = u.output || c.destination),
                      (this.rate = c.sampleRate),
                      (this.channels = 2),
                      u.bufferSize && (this.bufferSize = 0 | u.bufferSize),
                      (this.bufferThreshold = 2 * this.bufferSize),
                      (this._bufferQueue = new d(
                        this.channels,
                        this.bufferSize
                      )),
                      (this._playbackTimeAtBufferTail = c.currentTime),
                      (this._queuedTime = 0),
                      (this._delayedTime = 0),
                      (this._dropped = 0),
                      (this._liveBuffer = this._bufferQueue.createBuffer(
                        this.bufferSize
                      )),
                      c.createScriptProcessor)
                    )
                      this._node = c.createScriptProcessor(
                        this.bufferSize,
                        0,
                        this.channels
                      )
                    else {
                      if (!c.createJavaScriptNode)
                        throw new Error('Bad version of web audio API?')
                      this._node = c.createJavaScriptNode(
                        this.bufferSize,
                        0,
                        this.channels
                      )
                    }
                  }
                  ;(o.prototype.bufferSize = 4096),
                    (o.prototype.bufferThreshold = 8192),
                    (o.prototype._volume = 1),
                    Object.defineProperty(o.prototype, 'volume', {
                      get: function () {
                        return this._volume
                      },
                      set: function (t) {
                        this._volume = +t
                      }
                    }),
                    (o.prototype._muted = !1),
                    Object.defineProperty(o.prototype, 'muted', {
                      get: function () {
                        return this._muted
                      },
                      set: function (t) {
                        this._muted = !!t
                      }
                    }),
                    (o.prototype._audioProcess = function (t) {
                      var i, u, d, l, h
                      h =
                        'number' == typeof t.playbackTime
                          ? t.playbackTime
                          : this._context.currentTime +
                            this.bufferSize / this.rate
                      var _ = this._playbackTimeAtBufferTail
                      if (
                        (_ < h && (this._delayedTime += h - _),
                        this._bufferQueue.sampleCount() < this.bufferSize &&
                          this.onstarved &&
                          this.onstarved(),
                        this._bufferQueue.sampleCount() < this.bufferSize)
                      ) {
                        for (i = 0; i < this.channels; i++)
                          for (
                            d = t.outputBuffer.getChannelData(i), l = 0;
                            l < this.bufferSize;
                            l++
                          )
                            d[l] = 0
                        this._dropped++
                      } else {
                        var p = this.muted ? 0 : this.volume,
                          m = this._bufferQueue.nextBuffer()
                        if (m[0].length < this.bufferSize)
                          throw 'Audio buffer not expected length.'
                        for (i = 0; i < this.channels; i++)
                          for (
                            u = m[i],
                              this._liveBuffer[i].set(m[i]),
                              d = t.outputBuffer.getChannelData(i),
                              l = 0;
                            l < u.length;
                            l++
                          )
                            d[l] = u[l] * p
                        ;(this._queuedTime += this.bufferSize / this.rate),
                          (this._playbackTimeAtBufferTail =
                            h + this.bufferSize / this.rate),
                          this._bufferQueue.sampleCount() <
                            Math.max(this.bufferSize, this.bufferThreshold) &&
                            this.onbufferlow &&
                            c(this.onbufferlow.bind(this))
                      }
                    }),
                    (o.prototype._samplesQueued = function () {
                      return (
                        this._bufferQueue.sampleCount() +
                        Math.floor(this._timeAwaitingPlayback() * this.rate)
                      )
                    }),
                    (o.prototype._timeAwaitingPlayback = function () {
                      return Math.max(
                        0,
                        this._playbackTimeAtBufferTail -
                          this._context.currentTime
                      )
                    }),
                    (o.prototype.getPlaybackState = function () {
                      return {
                        playbackPosition:
                          this._queuedTime - this._timeAwaitingPlayback(),
                        samplesQueued: this._samplesQueued(),
                        dropped: this._dropped,
                        delayed: this._delayedTime
                      }
                    }),
                    (o.prototype.waitUntilReady = function (t) {
                      t()
                    }),
                    (o.prototype.appendBuffer = function (t) {
                      this._bufferQueue.appendBuffer(t)
                    }),
                    (o.prototype.start = function () {
                      ;(this._node.onaudioprocess =
                        this._audioProcess.bind(this)),
                        this._node.connect(this.output),
                        (this._playbackTimeAtBufferTail =
                          this._context.currentTime)
                    }),
                    (o.prototype.stop = function () {
                      if (this._node) {
                        var t = this._timeAwaitingPlayback()
                        if (t > 0) {
                          var i = Math.round(t * this.rate),
                            u = this._liveBuffer
                              ? this._liveBuffer[0].length
                              : 0
                          i > u
                            ? (this._bufferQueue.prependBuffer(
                                this._liveBuffer
                              ),
                              this._bufferQueue.prependBuffer(
                                this._bufferQueue.createBuffer(i - u)
                              ))
                            : this._bufferQueue.prependBuffer(
                                this._bufferQueue.trimBuffer(
                                  this._liveBuffer,
                                  u - i,
                                  i
                                )
                              ),
                            (this._playbackTimeAtBufferTail -= t)
                        }
                        ;(this._node.onaudioprocess = null),
                          this._node.disconnect()
                      }
                    }),
                    (o.prototype.flush = function () {
                      this._bufferQueue.flush()
                    }),
                    (o.prototype.close = function () {
                      this.stop(), (this._context = null)
                    }),
                    (o.prototype.onstarved = null),
                    (o.prototype.onbufferlow = null),
                    (o.isSupported = function () {
                      return !!i
                    }),
                    (o.sharedAudioContext = null),
                    (o.initSharedAudioContext = function () {
                      if (!o.sharedAudioContext && o.isSupported()) {
                        var t,
                          u = new i()
                        if (u.createScriptProcessor)
                          t = u.createScriptProcessor(1024, 0, 2)
                        else {
                          if (!u.createJavaScriptNode)
                            throw new Error('Bad version of web audio API?')
                          t = u.createJavaScriptNode(1024, 0, 2)
                        }
                        t.connect(u.destination),
                          t.disconnect(),
                          (o.sharedAudioContext = u)
                      }
                      return o.sharedAudioContext
                    }),
                    (t.exports = o)
                })()
              },
              function (t, i) {
                t.exports = (function () {
                  if (void 0 !== window.setImmediate) return window.setImmediate
                  if (window && window.postMessage) {
                    var t = []
                    return (
                      window.addEventListener('message', function (i) {
                        if (i.source === window) {
                          var u = i.data
                          if (
                            'object' == typeof u &&
                            u.nextTickBrowserPingMessage
                          ) {
                            var d = t.pop()
                            d && d()
                          }
                        }
                      }),
                      function (i) {
                        t.push(i),
                          window.postMessage(
                            { nextTickBrowserPingMessage: !0 },
                            document.location.toString()
                          )
                      }
                    )
                  }
                  return function (t) {
                    setTimeout(t, 0)
                  }
                })()
              },
              function (t, i, u) {
                var d
                window,
                  (d = function () {
                    return (function (t) {
                      var i = {}
                      function r(u) {
                        if (i[u]) return i[u].exports
                        var d = (i[u] = { i: u, l: !1, exports: {} })
                        return (
                          t[u].call(d.exports, d, d.exports, r),
                          (d.l = !0),
                          d.exports
                        )
                      }
                      return (
                        (r.m = t),
                        (r.c = i),
                        (r.d = function (t, i, u) {
                          r.o(t, i) ||
                            Object.defineProperty(t, i, {
                              enumerable: !0,
                              get: u
                            })
                        }),
                        (r.r = function (t) {
                          'undefined' != typeof Symbol &&
                            Symbol.toStringTag &&
                            Object.defineProperty(t, Symbol.toStringTag, {
                              value: 'Module'
                            }),
                            Object.defineProperty(t, '__esModule', {
                              value: !0
                            })
                        }),
                        (r.t = function (t, i) {
                          if ((1 & i && (t = r(t)), 8 & i)) return t
                          if (
                            4 & i &&
                            'object' == typeof t &&
                            t &&
                            t.__esModule
                          )
                            return t
                          var u = Object.create(null)
                          if (
                            (r.r(u),
                            Object.defineProperty(u, 'default', {
                              enumerable: !0,
                              value: t
                            }),
                            2 & i && 'string' != typeof t)
                          )
                            for (var d in t)
                              r.d(
                                u,
                                d,
                                function (i) {
                                  return t[i]
                                }.bind(null, d)
                              )
                          return u
                        }),
                        (r.n = function (t) {
                          var i =
                            t && t.__esModule
                              ? function () {
                                  return t.default
                                }
                              : function () {
                                  return t
                                }
                          return r.d(i, 'a', i), i
                        }),
                        (r.o = function (t, i) {
                          return Object.prototype.hasOwnProperty.call(t, i)
                        }),
                        (r.p = ''),
                        r((r.s = 1))
                      )
                    })([
                      function (t, i) {
                        var u = {
                          float_array: function (t) {
                            return new Float32Array(t)
                          },
                          blit: function (t, i, u, d, c) {
                            u.set(t.subarray(i, i + c), d)
                          }
                        }
                        t.exports = u
                      },
                      function (t, i, u) {
                        var d, c
                        ;(d = u(0)),
                          (c = u(2)),
                          (t.exports = function (t) {
                            var i = (t = t || {}).sampleRate || 44100,
                              u = t.wsizeLog || 11,
                              l = t.tempo || 1,
                              h = (t.numChannels, Math.pow(2, 50 / 1200) - 1),
                              _ = 1 << u,
                              p = c(u),
                              m = 1 << (u - 2)
                            m -= m % 100
                            for (
                              var V = d.float_array(_ + m + 5),
                                g = d.float_array(_ + m + 5),
                                v = m,
                                y = m,
                                b = d.float_array(_),
                                T = 0;
                              T < _;
                              T++
                            )
                              b[T] = 0.5 * (1 - Math.cos((2 * Math.PI * T) / _))
                            var k = 1 + (_ >> 1),
                              A = d.float_array(k),
                              P = d.float_array(k),
                              w = d.float_array(k),
                              E = d.float_array(k),
                              x = d.float_array(k),
                              R = d.float_array(k),
                              O = 1 + (k >> 1),
                              S = [0, 0],
                              C = [],
                              B = [],
                              D = [],
                              M = []
                            for (T = 0; T < 2; T++)
                              C.push(d.float_array(O)),
                                B.push(d.float_array(O)),
                                D.push(d.float_array(O)),
                                M.push(d.float_array(k))
                            var I = d.float_array(O),
                              L = d.float_array(O),
                              j = 0,
                              W = 0,
                              X = [{ in_time: 0, out_time: 0, tempo: l }],
                              H = 0,
                              N = 0,
                              z = 1,
                              Q = 0,
                              Y = 0,
                              Z = 0,
                              K = 0,
                              $ = {
                                mapOutputToInputTime: function (t) {
                                  for (
                                    var i = X.length - 1;
                                    t < X[i].out_time && i > 0;

                                  )
                                    i--
                                  var u = X[i]
                                  return u.in_time + u.tempo * (t - u.out_time)
                                },
                                flush: function (t) {
                                  ;(Q = 0),
                                    (S = [0, 0]),
                                    (N = 0),
                                    (K = 0),
                                    (Z = 0)
                                  for (var i = 0; i < 2; i++)
                                    for (var u = 0; u < k; u++) M[i][u] = 0
                                  for (i = 0; i < V.length; i++) V[i] = 0
                                  for (i = 0; i < g.length; i++) g[i] = 0
                                  if (t) {
                                    ;(W = Math.max(0, W - t)),
                                      (j = $.mapOutputToInputTime(W))
                                    for (
                                      var d = X.length - 1;
                                      W <= X[d].out_time && d >= 0;

                                    )
                                      X.pop(), d--
                                    X.push({
                                      in_time: j,
                                      out_time: W,
                                      tempo: l
                                    })
                                  }
                                },
                                getTempo: function () {
                                  return l
                                },
                                setTempo: function (t) {
                                  ;(v = y = m),
                                    t >= 1
                                      ? (y = Math.round(v / t))
                                      : (v = Math.round(y * t)),
                                    (Y = (1 / t - (1 * y) / v) * v),
                                    (z = (function (t, i) {
                                      for (
                                        var u = (t.length / i) | 0,
                                          d = 0,
                                          c = 0;
                                        c < u;
                                        c++
                                      )
                                        d += t[c * i]
                                      return 0.9 / d
                                    })(b, y)),
                                    (l = t)
                                  var i = X[X.length - 1]
                                  i.out_time == W
                                    ? (i.tempo = t)
                                    : X.push({
                                        in_time: j,
                                        out_time: W,
                                        tempo: t
                                      })
                                }
                              }
                            $.flush(0), $.setTempo(l)
                            var J = function (t, i, u) {
                                var d = Math.floor(u),
                                  c = d % 2 == 1 ? -1 : 1
                                return Math.atan2(
                                  c * (i[d] - i[d + 1]),
                                  c * (t[d] - t[d + 1])
                                )
                              },
                              U = function (t, i, u, d, c) {
                                var l = ((2 * Math.PI) / _) * 0.5 * (d + i) * v
                                return (
                                  ((function (t) {
                                    return (
                                      t -
                                      2 *
                                        Math.PI *
                                        Math.round(t / (2 * Math.PI))
                                    )
                                  })(t - u - l) +
                                    l) *
                                  c
                                )
                              },
                              q = function (t, i, u, d, c, l) {
                                for (
                                  var p = t % 2,
                                    m = 1 - p,
                                    V = M[m],
                                    g = S[m],
                                    v = C[m],
                                    y = B[m],
                                    b = D[m],
                                    T = M[p],
                                    k = 1;
                                  k < T.length;
                                  k++
                                )
                                  T[k] = i[k] * i[k] + u[k] * u[k]
                                var A = C[p],
                                  P = (S[p] = (function (t, i) {
                                    for (var u = 0, d = 0; d < t.length; d++)
                                      t[d] > u && (u = t[d])
                                    var c = 1e-8 * u,
                                      l = 1,
                                      _ = 1
                                    for (i[0] = 1, d = 2; d < t.length; d++) {
                                      var p = d * h
                                      if (
                                        t[d] > c &&
                                        t[d] > t[d - 1] &&
                                        t[d] >= t[d + 1]
                                      ) {
                                        var m =
                                          d +
                                          (t[d - 1] - t[d + 1]) /
                                            (2 *
                                              (t[d - 1] - 2 * t[d] + t[d + 1]))
                                        m - i[l - 1] > p
                                          ? ((i[l++] = m), (_ = d))
                                          : t[d] > t[_] &&
                                            ((i[l - 1] = m), (_ = d))
                                      }
                                    }
                                    return l
                                  })(T, A)),
                                  w = B[p],
                                  E = D[p]
                                if (0 != t && 0 != P) {
                                  var x = 0
                                  for (Z = 0; Z < P; Z++) {
                                    for (K = A[Z]; A[Z] > v[x] && x != g; ) ++x
                                    var R = x
                                    x > 0 &&
                                      K - v[x - 1] < v[x] - K &&
                                      (R = x - 1)
                                    var O = K * h
                                    if (
                                      Math.abs(v[R] - K) < O &&
                                      V[Math.round(v[R])] >
                                        0.1 * T[Math.round(K)]
                                    ) {
                                      var j = J(i, u, K),
                                        W =
                                          y[R] +
                                          b[R] +
                                          U(j, K, y[R], v[R], l) -
                                          j
                                      ;(w[Z] = j),
                                        (E[Z] = W),
                                        (I[Z] = Math.cos(W)),
                                        (L[Z] = Math.sin(W))
                                    } else
                                      (w[Z] = J(i, u, K)),
                                        (E[Z] = 0),
                                        (I[Z] = 1),
                                        (L[Z] = 0)
                                  }
                                  A[P] = 2 * _
                                  var X = A[(R = 0)],
                                    H = A[R + 1],
                                    N = I[R],
                                    z = L[R]
                                  for (k = 1; k < i.length - 1; k++) {
                                    k >= X &&
                                      k - X > H - k &&
                                      ((X = A[++R]),
                                      (H = A[R + 1]),
                                      (N = I[R]),
                                      (z = L[R]))
                                    var Q = i[k] * N - u[k] * z,
                                      Y = i[k] * z + u[k] * N
                                    ;(i[k] = Q), (u[k] = Y)
                                  }
                                } else
                                  for (var Z = 0; Z < P; Z++) {
                                    var K = A[Z]
                                    y[Z] = b[Z] = J(i, u, K)
                                  }
                              },
                              G = function () {
                                var t = 0 | (Q += 2 * Y)
                                Q -= t
                                for (var i = 0; i < _; i++)
                                  (p.m_re[i] = b[i] * V[i]),
                                    (p.m_im[i] = b[i] * V[v + i])
                                d.blit(V, 2 * v, V, 0, _ - v),
                                  p.inplace(!1),
                                  p.unpack(A, P, w, E),
                                  q(H, A, P, 0, 0, (1 * y) / v),
                                  q(H + 1, w, E, 0, 0, (1 * (y + t)) / v),
                                  d.blit(w, 0, x, 0, k),
                                  d.blit(E, 0, R, 0, k),
                                  p.repack(A, P, w, E),
                                  p.inplace(!0)
                                var u = g.length
                                for (
                                  d.blit(g, N, g, 0, u - N), i = u - N;
                                  i < u;
                                  i++
                                )
                                  g[i] = 0
                                var c = 0,
                                  l = z
                                for (i = 0; i < y; i++)
                                  Math.abs(2 * p.m_re[i]) > c &&
                                    (c = Math.abs(2 * p.m_re[i]))
                                for (i = 0; i < _ - y; i++)
                                  Math.abs(p.m_re[i + y + t] + p.m_im[i]) > c &&
                                    (c = Math.abs(
                                      p.m_re[i + y + t] + p.m_im[i]
                                    ))
                                for (i = _ - y; i < _; i++)
                                  Math.abs(2 * p.m_im[i]) > c &&
                                    (c = Math.abs(2 * p.m_im[i]))
                                var h = 1 / Math.floor((1 * _) / (2 * y))
                                for (
                                  l * c > h && (l = h / c), i = 0;
                                  i < _;
                                  i++
                                )
                                  (g[i] += l * p.m_re[i]),
                                    (g[i + y + t] += l * p.m_im[i])
                                return (H += 2), (N = 2 * y + t)
                              }
                            return (
                              ($.process = function (t) {
                                var u = t[0].length,
                                  c = t[0]
                                if (t.length > 1) {
                                  c = d.float_array(t[0].length)
                                  for (
                                    var h = 1 / t.length, p = 0;
                                    p < t.length;
                                    p++
                                  )
                                    for (var m = 0; m < u; m++)
                                      c[m] += h * t[p][m]
                                }
                                if (1 == l) {
                                  if (K + Z > 0) {
                                    var b = K + Z + u,
                                      T = []
                                    for (p = 0; p < t.length; p++) {
                                      var k = d.float_array(b)
                                      d.blit(g, 0, k, 0, K),
                                        d.blit(V, 0, k, K, Z),
                                        d.blit(t[p], 0, k, K + Z, u),
                                        T.push(k)
                                    }
                                    $.flush(0), (u = b), (t = T)
                                  }
                                  return (j += u / i), (W += u / i), t
                                }
                                var A = Z + u - (_ - v),
                                  P = 2 * Math.floor(Math.max(0, A) / (2 * v)),
                                  w = K + y * P + Math.floor(Q + Y * P)
                                K > w && (w = K)
                                var E = d.float_array(w)
                                d.blit(g, 0, E, 0, K)
                                for (var x = 0, R = K, O = 0, S = 0; ; ) {
                                  var C = _ + v - Z
                                  if (x + C > u) {
                                    d.blit(c, x, V, Z, u - x),
                                      (Z += u - x),
                                      (x = u)
                                    break
                                  }
                                  C <= 0
                                    ? (Z -= 2 * v)
                                    : (d.blit(c, x, V, Z, C),
                                      (x += C),
                                      (Z = _ - v)),
                                    (S = G()),
                                    (j += (2 * v) / i),
                                    (W += S / i),
                                    (O = R + S - w) < 0 && (O = 0),
                                    d.blit(g, 0, E, R, S - O),
                                    (R += S)
                                }
                                d.blit(g, S - O, g, 0, O), (K = O)
                                var B = []
                                for (p = 0; p < t.length; p++) B.push(E)
                                return B
                              }),
                              $
                            )
                          })
                      },
                      function (t, i, u) {
                        'use strict'
                        var d = u(0)
                        t.exports = function (t) {
                          for (
                            var i = 1 << t,
                              u = {
                                m_logN: t,
                                m_N: i,
                                m_invN: 1 / i,
                                m_re: d.float_array(i),
                                m_im: d.float_array(i),
                                m_revTgt: new Array(i)
                              },
                              c = 0;
                            c < i;
                            c++
                          ) {
                            for (var l = c, h = 0, _ = 0; _ < t; _++)
                              (h <<= 1), (h |= 1 & l), (l >>= 1)
                            u.m_revTgt[c] = h
                          }
                          ;(u.twiddleRe = d.float_array(u.m_logN)),
                            (u.twiddleIm = d.float_array(u.m_logN))
                          for (var p = 1, m = 0; m < u.m_logN; m++) {
                            var V = 2 * p * Math.PI * u.m_invN
                            ;(u.twiddleRe[m] = Math.cos(V)),
                              (u.twiddleIm[m] = Math.sin(V)),
                              (p <<= 1)
                          }
                          u.inplace = function (t) {
                            var i = u.m_re,
                              d = u.m_im,
                              c = u.m_N,
                              l = u.m_logN,
                              h = c >> 1,
                              _ = c >> 1,
                              p = c
                            if (t)
                              for (var m = 1 / c, V = 0; V < c; V++)
                                (i[V] *= m), (d[V] *= m)
                            for (var g = 0; g < l; g++) {
                              var v = u.twiddleRe[g],
                                y = u.twiddleIm[g]
                              t || (y *= -1)
                              for (var b = 0; b < c; ) {
                                for (
                                  var T = b, k = b + _, A = 1, P = 0, w = 0;
                                  w < h;
                                  w++
                                ) {
                                  var E = i[T],
                                    x = d[T],
                                    R = i[k],
                                    O = d[k]
                                  ;(i[T] = E + R),
                                    (d[T] = x + O),
                                    (R = E - R),
                                    (O = x - O),
                                    (i[k] = R * A - O * P),
                                    (d[k] = R * P + O * A),
                                    T++,
                                    k++
                                  var S = A
                                  ;(A = A * v - P * y), (P = S * y + P * v)
                                }
                                b += p
                              }
                              ;(h >>= 1), (_ >>= 1), (p >>= 1)
                            }
                            for (var C, B, D = u.m_revTgt, M = 0; M < c; M++)
                              D[M] > M &&
                                ((B = i[(C = D[M])]),
                                (i[C] = i[M]),
                                (i[M] = B),
                                (B = d[C]),
                                (d[C] = d[M]),
                                (d[M] = B))
                          }
                          var g = i >> 1
                          return (
                            (u.unpack = function (t, d, c, l) {
                              ;(t[0] = u.m_re[0]),
                                (c[0] = u.m_im[0]),
                                (d[0] = l[0] = 0),
                                (t[g] = u.m_re[g]),
                                (c[g] = u.m_im[g]),
                                (d[g] = l[g] = 0)
                              for (var h = 1; h < g; h++)
                                (t[h] = (u.m_re[h] + u.m_re[i - h]) / 2),
                                  (d[h] = (u.m_im[h] - u.m_im[i - h]) / 2),
                                  (c[h] = (u.m_im[h] + u.m_im[i - h]) / 2),
                                  (l[h] = (-u.m_re[h] + u.m_re[i - h]) / 2)
                            }),
                            (u.repack = function (t, d, c, l) {
                              ;(u.m_re[0] = t[0]),
                                (u.m_im[0] = c[0]),
                                (u.m_re[g] = t[g]),
                                (u.m_im[g] = c[g])
                              for (var h = 1; h < g; h++)
                                (u.m_re[h] = t[h] - l[h]),
                                  (u.m_im[h] = d[h] + c[h]),
                                  (u.m_re[i - h] = t[h] + l[h]),
                                  (u.m_im[i - h] = -d[h] + c[h])
                            }),
                            u
                          )
                        }
                      }
                    ])
                  }),
                  (t.exports = d())
              }
            ]))
        },
        893: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = (function () {
              function Bisector(t) {
                ;(0, c.default)(this, Bisector),
                  (this.lower = t.start),
                  (this.upper = t.end),
                  (this.onprocess = t.process),
                  (this.position = 0),
                  (this.n = 0)
              }
              return (
                (0, l.default)(Bisector, [
                  {
                    key: 'iterate',
                    value: function iterate() {
                      return (
                        this.n++,
                        (this.position = Math.floor(
                          (this.lower + this.upper) / 2
                        )),
                        this.onprocess(this.lower, this.upper, this.position)
                      )
                    }
                  },
                  {
                    key: 'start',
                    value: function start() {
                      return this.iterate(), this
                    }
                  },
                  {
                    key: 'left',
                    value: function left() {
                      return (this.upper = this.position), this.iterate()
                    }
                  },
                  {
                    key: 'right',
                    value: function right() {
                      return (this.lower = this.position), this.iterate()
                    }
                  }
                ]),
                Bisector
              )
            })()
          i.default = h
        },
        523: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = new ((function () {
              function _class() {
                ;(0, c.default)(this, _class)
              }
              return (
                (0, l.default)(_class, [
                  {
                    key: 'hasTypedArrays',
                    value: function hasTypedArrays() {
                      return !!window.Uint32Array
                    }
                  },
                  {
                    key: 'hasWebAssembly',
                    value: function hasWebAssembly() {
                      return !!window.WebAssembly
                    }
                  },
                  {
                    key: 'hasWebAudio',
                    value: function hasWebAudio() {
                      return !(
                        !window.AudioContext && !window.webkitAudioContext
                      )
                    }
                  },
                  {
                    key: 'hasFlash',
                    value: function hasFlash() {
                      return !1
                    }
                  },
                  {
                    key: 'hasAudio',
                    value: function hasAudio() {
                      return this.hasWebAudio()
                    }
                  },
                  {
                    key: 'isBlacklisted',
                    value: function isBlacklisted(t) {
                      return !1
                    }
                  },
                  {
                    key: 'isSlow',
                    value: function isSlow() {
                      return !1
                    }
                  },
                  {
                    key: 'isTooSlow',
                    value: function isTooSlow() {
                      return !1
                    }
                  },
                  {
                    key: 'supported',
                    value: function supported(t) {
                      return 'OGVDecoder' === t
                        ? this.hasWebAssembly()
                        : 'OGVPlayer' === t &&
                            this.supported('OGVDecoder') &&
                            this.hasAudio()
                    }
                  }
                ]),
                _class
              )
            })())()
          i.default = h
        },
        408: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = d(u(205)),
            _ = d(u(585)),
            p = d(u(754))
          function _createSuper(t) {
            var i = (function _isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                )
              } catch (t) {
                return !1
              }
            })()
            return function _createSuperInternal() {
              var u,
                d = (0, p.default)(t)
              if (i) {
                var c = (0, p.default)(this).constructor
                u = Reflect.construct(d, arguments, c)
              } else u = d.apply(this, arguments)
              return (0, _.default)(this, u)
            }
          }
          var m = (function (t) {
              ;(0, h.default)(OGVDecoderAudioProxy, t)
              var i = _createSuper(OGVDecoderAudioProxy)
              function OGVDecoderAudioProxy() {
                return (
                  (0, c.default)(this, OGVDecoderAudioProxy),
                  i.apply(this, arguments)
                )
              }
              return (
                (0, l.default)(OGVDecoderAudioProxy, [
                  {
                    key: 'init',
                    value: function init(t) {
                      this.proxy('init', [], t)
                    }
                  },
                  {
                    key: 'processHeader',
                    value: function processHeader(t, i) {
                      this.proxy('processHeader', [t], i, [t])
                    }
                  },
                  {
                    key: 'processAudio',
                    value: function processAudio(t, i) {
                      this.proxy('processAudio', [t], i, [t])
                    }
                  },
                  {
                    key: 'close',
                    value: function close() {
                      this.terminate()
                    }
                  }
                ]),
                OGVDecoderAudioProxy
              )
            })(
              (0, d(u(580)).default)({
                loadedMetadata: !1,
                audioFormat: null,
                audioBuffer: null,
                cpuTime: 0
              })
            ),
            V = m
          i.default = V
        },
        319: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = d(u(205)),
            _ = d(u(585)),
            p = d(u(754))
          function _createSuper(t) {
            var i = (function _isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                )
              } catch (t) {
                return !1
              }
            })()
            return function _createSuperInternal() {
              var u,
                d = (0, p.default)(t)
              if (i) {
                var c = (0, p.default)(this).constructor
                u = Reflect.construct(d, arguments, c)
              } else u = d.apply(this, arguments)
              return (0, _.default)(this, u)
            }
          }
          var m = (function (t) {
              ;(0, h.default)(OGVDecoderVideoProxy, t)
              var i = _createSuper(OGVDecoderVideoProxy)
              function OGVDecoderVideoProxy() {
                return (
                  (0, c.default)(this, OGVDecoderVideoProxy),
                  i.apply(this, arguments)
                )
              }
              return (
                (0, l.default)(OGVDecoderVideoProxy, [
                  {
                    key: 'init',
                    value: function init(t) {
                      this.proxy('init', [], t)
                    }
                  },
                  {
                    key: 'processHeader',
                    value: function processHeader(t, i) {
                      this.proxy('processHeader', [t], i, [t])
                    }
                  },
                  {
                    key: 'processFrame',
                    value: function processFrame(t, i) {
                      this.proxy('processFrame', [t], i, [t])
                    }
                  },
                  {
                    key: 'close',
                    value: function close() {
                      this.terminate()
                    }
                  },
                  {
                    key: 'sync',
                    value: function sync() {
                      this.proxy('sync', [], function () {})
                    }
                  },
                  {
                    key: 'recycleFrame',
                    value: function recycleFrame(t) {
                      this.proxy('recycleFrame', [t], function () {}, [
                        t.y.bytes.buffer,
                        t.u.bytes.buffer,
                        t.v.bytes.buffer
                      ])
                    }
                  }
                ]),
                OGVDecoderVideoProxy
              )
            })(
              (0, d(u(580)).default)({
                loadedMetadata: !1,
                videoFormat: null,
                frameBuffer: null,
                cpuTime: 0
              })
            ),
            V = m
          i.default = V
        },
        445: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = d(u(539)),
            _ = '1.8.9-20220406232920-cb5f7ff',
            p = {
              OGVDemuxerOggW: 'ogv-demuxer-ogg-wasm.js',
              OGVDemuxerWebMW: 'ogv-demuxer-webm-wasm.js',
              OGVDecoderAudioOpusW: 'ogv-decoder-audio-opus-wasm.js',
              OGVDecoderAudioVorbisW: 'ogv-decoder-audio-vorbis-wasm.js',
              OGVDecoderVideoTheoraW: 'ogv-decoder-video-theora-wasm.js',
              OGVDecoderVideoVP8W: 'ogv-decoder-video-vp8-wasm.js',
              OGVDecoderVideoVP8MTW: 'ogv-decoder-video-vp8-mt-wasm.js',
              OGVDecoderVideoVP9W: 'ogv-decoder-video-vp9-wasm.js',
              OGVDecoderVideoVP9SIMDW: 'ogv-decoder-video-vp9-simd-wasm.js',
              OGVDecoderVideoVP9MTW: 'ogv-decoder-video-vp9-mt-wasm.js',
              OGVDecoderVideoVP9SIMDMTW:
                'ogv-decoder-video-vp9-simd-mt-wasm.js',
              OGVDecoderVideoAV1W: 'ogv-decoder-video-av1-wasm.js',
              OGVDecoderVideoAV1SIMDW: 'ogv-decoder-video-av1-simd-wasm.js',
              OGVDecoderVideoAV1MTW: 'ogv-decoder-video-av1-mt-wasm.js',
              OGVDecoderVideoAV1SIMDMTW: 'ogv-decoder-video-av1-simd-mt-wasm.js'
            },
            m = (function () {
              function OGVLoaderBase() {
                ;(0, c.default)(this, OGVLoaderBase),
                  (this.base = this.defaultBase())
              }
              return (
                (0, l.default)(OGVLoaderBase, [
                  { key: 'defaultBase', value: function defaultBase() {} },
                  {
                    key: 'wasmSupported',
                    value: function wasmSupported() {
                      return h.default.wasmSupported()
                    }
                  },
                  {
                    key: 'scriptForClass',
                    value: function scriptForClass(t) {
                      return p[t]
                    }
                  },
                  {
                    key: 'urlForClass',
                    value: function urlForClass(t) {
                      var i = this.scriptForClass(t)
                      if (i) return this.urlForScript(i)
                      throw new Error('asked for URL for unknown class ' + t)
                    }
                  },
                  {
                    key: 'urlForScript',
                    value: function urlForScript(t) {
                      if (t) {
                        var i = this.base
                        return (
                          void 0 === i ? (i = '') : (i += '/'),
                          i + t + '?version=' + encodeURIComponent(_)
                        )
                      }
                      throw new Error('asked for URL for unknown script ' + t)
                    }
                  },
                  {
                    key: 'loadClass',
                    value: function loadClass(t, i, u) {
                      var d = this
                      u = u || {}
                      var c = this.getGlobal(),
                        l = this.urlForClass(t),
                        h = function classWrapper(i) {
                          return (
                            ((i = i || {}).locateFile = function (t) {
                              return 'data:' === t.slice(0, 5)
                                ? t
                                : d.urlForScript(t)
                            }),
                            (i.mainScriptUrlOrBlob =
                              d.scriptForClass(t) +
                              '?version=' +
                              encodeURIComponent(_)),
                            c[t](i)
                          )
                        }
                      'function' == typeof c[t]
                        ? i(h)
                        : this.loadScript(l, function () {
                            i(h)
                          })
                    }
                  }
                ]),
                OGVLoaderBase
              )
            })()
          i.default = m
        },
        964: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = d(u(525)),
            _ = d(u(205)),
            p = d(u(585)),
            m = d(u(754)),
            V = d(u(408)),
            g = d(u(319)),
            v = d(u(445))
          function _createSuper(t) {
            var i = (function _isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                )
              } catch (t) {
                return !1
              }
            })()
            return function _createSuperInternal() {
              var u,
                d = (0, m.default)(t)
              if (i) {
                var c = (0, m.default)(this).constructor
                u = Reflect.construct(d, arguments, c)
              } else u = d.apply(this, arguments)
              return (0, p.default)(this, u)
            }
          }
          var y = {
              audio: { proxy: V.default, worker: 'ogv-worker-audio.js' },
              video: { proxy: g.default, worker: 'ogv-worker-video.js' }
            },
            b = {
              OGVDecoderAudioOpusW: 'audio',
              OGVDecoderAudioVorbisW: 'audio',
              OGVDecoderVideoTheoraW: 'video',
              OGVDecoderVideoVP8W: 'video',
              OGVDecoderVideoVP9W: 'video',
              OGVDecoderVideoVP9SIMDW: 'video',
              OGVDecoderVideoAV1W: 'video',
              OGVDecoderVideoAV1SIMDW: 'video'
            },
            T = new ((function (t) {
              ;(0, _.default)(OGVLoaderWeb, t)
              var i = _createSuper(OGVLoaderWeb)
              function OGVLoaderWeb() {
                var t
                return (
                  (0, c.default)(this, OGVLoaderWeb),
                  ((t = i.call(this)).scriptStatus = {}),
                  (t.scriptCallbacks = {}),
                  t
                )
              }
              return (
                (0, l.default)(OGVLoaderWeb, [
                  {
                    key: 'getGlobal',
                    value: function getGlobal() {
                      return window
                    }
                  },
                  {
                    key: 'defaultBase',
                    value: function defaultBase() {
                      for (
                        var t,
                          i,
                          u = document.querySelectorAll('script'),
                          d =
                            /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,
                          c = 0;
                        c < u.length;
                        c++
                      )
                        if ((t = u[c].getAttribute('src')) && (i = t.match(d)))
                          return i[1]
                    }
                  },
                  {
                    key: 'loadClass',
                    value: function loadClass(t, i, u) {
                      ;(u = u || {}).worker
                        ? this.workerProxy(t, i)
                        : (0, h.default)(
                            (0, m.default)(OGVLoaderWeb.prototype),
                            'loadClass',
                            this
                          ).call(this, t, i, u)
                    }
                  },
                  {
                    key: 'loadScript',
                    value: function loadScript(t, i) {
                      var u = this
                      if ('done' == this.scriptStatus[t]) i()
                      else if ('loading' == this.scriptStatus[t])
                        this.scriptCallbacks[t].push(i)
                      else {
                        ;(this.scriptStatus[t] = 'loading'),
                          (this.scriptCallbacks[t] = [i])
                        var d = document.createElement('script'),
                          c = function done(i) {
                            var d = u.scriptCallbacks[t]
                            delete u.scriptCallbacks[t],
                              (u.scriptStatus[t] = 'done'),
                              d.forEach(function (t) {
                                t()
                              })
                          }
                        d.addEventListener('load', c),
                          d.addEventListener('error', c),
                          (d.src = t),
                          document.querySelector('head').appendChild(d)
                      }
                    }
                  },
                  {
                    key: 'workerProxy',
                    value: function workerProxy(t, i) {
                      var u = y[b[t]]
                      if (!u)
                        throw new Error(
                          'Requested worker for class with no proxy: ' + t
                        )
                      var d,
                        c = u.proxy,
                        l = u.worker,
                        h = this.urlForScript(this.scriptForClass(t)),
                        _ = this.urlForScript(l),
                        p = function construct(i) {
                          return new c(d, t, i)
                        }
                      if (_.match(/^https?:|\/\//i)) {
                        var m,
                          V,
                          g,
                          v,
                          k,
                          A = function completionCheck() {
                            if (1 == P && 1 == w) {
                              var t =
                                g +
                                ' ' +
                                v +
                                '\nOGVLoader.base = ' +
                                JSON.stringify(T.base)
                              try {
                                k = new Blob([t], {
                                  type: 'application/javascript'
                                })
                              } catch (i) {
                                ;(window.BlobBuilder =
                                  window.BlobBuilder ||
                                  window.WebKitBlobBuilder ||
                                  window.MozBlobBuilder),
                                  (k = new BlobBuilder()).append(t),
                                  (k = k.getBlob())
                              }
                              ;(d = new Worker(URL.createObjectURL(k))),
                                i(function (t) {
                                  return Promise.resolve(new p(t))
                                })
                            }
                          },
                          P = !1,
                          w = !1
                        ;(m = new XMLHttpRequest()).open('GET', h, !0),
                          (m.onreadystatechange = function () {
                            4 == m.readyState &&
                              200 == m.status &&
                              ((g = m.responseText), (P = !0), A())
                          }),
                          m.send(),
                          (V = new XMLHttpRequest()).open('GET', _, !0),
                          (V.onreadystatechange = function () {
                            4 == V.readyState &&
                              200 == V.status &&
                              ((v = V.responseText), (w = !0), A())
                          }),
                          V.send()
                      } else
                        (d = new Worker(_)),
                          i(function (t) {
                            return Promise.resolve(new p(t))
                          })
                    }
                  }
                ]),
                OGVLoaderWeb
              )
            })(v.default))(),
            k = T
          i.default = k
        },
        759: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(913)),
            l = d(u(575)),
            h = d(u(309)),
            _ = {
              MEDIA_ERR_ABORTED: 1,
              MEDIA_ERR_NETWORK: 2,
              MEDIA_ERR_DECODE: 3,
              MEDIA_ERR_SRC_NOT_SUPPORTED: 4
            },
            p = (0, c.default)(function OGVMediaError(t, i) {
              ;(0, l.default)(this, OGVMediaError),
                (this.code = t),
                (this.message = i)
            })
          ;(0, h.default)(p, _), (0, h.default)(p.prototype, _)
          var m = p
          i.default = m
        },
        278: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(913)),
            l = d(u(575))
          function split(t, i, u) {
            var d = t.split(i, u).map(function (t) {
              return (function trim(t) {
                return t.replace(/^\s+/, '').replace(/\s+$/, '')
              })(t)
            })
            if ('number' == typeof u) for (; d.length < u; ) d.push(null)
            return d
          }
          var h = (0, c.default)(function OGVMediaType(t) {
            ;(0, l.default)(this, OGVMediaType),
              (t = String(t)),
              (this.major = null),
              (this.minor = null),
              (this.codecs = null)
            var i = split(t, ';')
            if (i.length) {
              var u = i.shift()
              if (u) {
                var d = split(u, '/', 2)
                ;(this.major = d[0]), (this.minor = d[1])
              }
              for (var c in i) {
                var h = i[c].match(/^codecs\s*=\s*"(.*?)"$/)
                if (h) {
                  this.codecs = split(h[1], ',')
                  break
                }
              }
            }
          })
          i.default = h
        },
        869: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = d(u(506)),
            _ = d(u(205)),
            p = d(u(585)),
            m = d(u(754)),
            V = d(u(8)),
            g = d(u(731)),
            v = d(u(936)),
            y = d(u(848)),
            b = d(u(964)),
            T = d(u(893)),
            k = d(u(309)),
            A = d(u(759)),
            P = d(u(278)),
            w = d(u(168)),
            E = d(u(625)),
            x = d(u(302))
          function _createSuper(t) {
            var i = (function _isNativeReflectConstruct() {
              if ('undefined' == typeof Reflect || !Reflect.construct) return !1
              if (Reflect.construct.sham) return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                )
              } catch (t) {
                return !1
              }
            })()
            return function _createSuperInternal() {
              var u,
                d = (0, m.default)(t)
              if (i) {
                var c = (0, m.default)(this).constructor
                u = Reflect.construct(d, arguments, c)
              } else u = d.apply(this, arguments)
              return (0, p.default)(this, u)
            }
          }
          var R,
            O = (function () {
              if ('function' == typeof setImmediate) return setImmediate
              var t = new MessageChannel(),
                i = []
              return (
                (t.port1.onmessage = function (t) {
                  i.shift()()
                }),
                function nextTick(u) {
                  i.push(u), t.port2.postMessage({})
                }
              )
            })(),
            S = {
              NETWORK_EMPTY: 0,
              NETWORK_IDLE: 1,
              NETWORK_LOADING: 2,
              NETWORK_NO_SOURCE: 3,
              HAVE_NOTHING: 0,
              HAVE_METADATA: 1,
              HAVE_CURRENT_DATA: 2,
              HAVE_FUTURE_DATA: 3,
              HAVE_ENOUGH_DATA: 4
            },
            C = 'INITIAL',
            B = 'SEEKING_END',
            D = 'LOADED',
            M = 'PRELOAD',
            I = 'READY',
            L = 'PLAYING',
            j = 'SEEKING',
            W = 'ERROR',
            X = 'NOT_SEEKING',
            H = 'BISECT_TO_TARGET',
            N = 'BISECT_TO_KEYPOINT',
            z = 'LINEAR_TO_TARGET',
            Q = 'exact',
            Y = 'fast'
          function OGVJSElement() {
            var t = document.createElement('ogvjs')
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, Object.getPrototypeOf(this))
                : (t.__proto__ = this.__proto__),
              t
            )
          }
          ;(R =
            'undefined' == typeof performance ||
            void 0 === (0, V.default)(performance.now)
              ? Date.now
              : performance.now.bind(performance)),
            (OGVJSElement.prototype = Object.create(HTMLElement.prototype, {}))
          var Z = (function (t) {
            ;(0, _.default)(OGVPlayer, t)
            var i = _createSuper(OGVPlayer)
            function OGVPlayer(t) {
              var u
              if (
                ((0, c.default)(this, OGVPlayer),
                (u = i.call(this)),
                ((t = t || {}).base = t.base || b.default.base),
                (u._options = t),
                (u._instanceId = 'ogvjs' + ++OGVPlayer.instanceCount),
                void 0 !== t.worker
                  ? (u._enableWorker = !!t.worker)
                  : (u._enableWorker = !!window.Worker),
                !b.default.wasmSupported())
              )
                throw new Error('WebAssembly not supported')
              return (
                (u._enableThreading = !!t.threading),
                (u._enableSIMD = !!t.simd),
                (u._state = C),
                (u._seekState = X),
                (u._detectedType = null),
                (u._canvas = document.createElement('canvas')),
                (u._frameSink = null),
                (u.className = u._instanceId),
                (0, k.default)((0, h.default)(u), S),
                (u._view = u._canvas),
                (u._view.style.position = 'absolute'),
                (u._view.style.top = '0'),
                (u._view.style.left = '0'),
                (u._view.style.width = '100%'),
                (u._view.style.height = '100%'),
                (u._view.style.objectFit = 'contain'),
                u.appendChild(u._view),
                (u._startTime = R()),
                (u._codec = null),
                (u._audioInfo = null),
                (u._videoInfo = null),
                (u._actionQueue = []),
                (u._audioFeeder = null),
                (u._muted = !1),
                (u._initialPlaybackPosition = 0),
                (u._initialPlaybackOffset = 0),
                (u._prebufferingAudio = !1),
                (u._initialSeekTime = 0),
                (u._currentSrc = ''),
                (u._crossOrigin = null),
                (u._streamEnded = !1),
                (u._mediaError = null),
                (u._dataEnded = !1),
                (u._byteLength = 0),
                (u._duration = null),
                (u._lastSeenTimestamp = null),
                u._nextProcessingTimer,
                (u._nextFrameTimer = null),
                (u._loading = !1),
                (u._started = !1),
                (u._paused = !0),
                (u._ended = !1),
                (u._startedPlaybackInDocument = !1),
                (u._stream = void 0),
                (u._framesProcessed = 0),
                (u._targetPerFrameTime = 1e3 / 60),
                (u._actualPerFrameTime = 0),
                (u._totalFrameTime = 0),
                (u._totalFrameCount = 0),
                (u._playTime = 0),
                (u._bufferTime = 0),
                (u._drawingTime = 0),
                (u._proxyTime = 0),
                (u._totalJitter = 0),
                (u._droppedAudio = 0),
                (u._delayedAudio = 0),
                (u._lateFrames = 0),
                (u._poster = ''),
                (u._thumbnail = null),
                (u._frameEndTimestamp = 0),
                (u._audioEndTimestamp = 0),
                (u._decodedFrames = []),
                (u._pendingFrames = []),
                (u._lastFrameDecodeTime = 0),
                (u._lastFrameVideoCpuTime = 0),
                (u._lastFrameAudioCpuTime = 0),
                (u._lastFrameDemuxerCpuTime = 0),
                (u._lastFrameDrawingTime = 0),
                (u._lastFrameBufferTime = 0),
                (u._lastFrameProxyTime = 0),
                (u._lastVideoCpuTime = 0),
                (u._lastAudioCpuTime = 0),
                (u._lastDemuxerCpuTime = 0),
                (u._lastBufferTime = 0),
                (u._lastProxyTime = 0),
                (u._lastDrawingTime = 0),
                (u._lastFrameTimestamp = 0),
                (u._currentVideoCpuTime = 0),
                (u._lastTimeUpdate = 0),
                (u._timeUpdateInterval = 250),
                (u._seekTargetTime = 0),
                (u._bisectTargetTime = 0),
                (u._seekMode = null),
                (u._lastSeekPosition = null),
                (u._seekBisector = null),
                (u._didSeek = null),
                (u._depth = 0),
                (u._needProcessing = !1),
                (u._pendingFrame = 0),
                (u._pendingAudio = 0),
                (u._framePipelineDepth = 8),
                (u._frameParallelism = u._enableThreading
                  ? Math.min(16, navigator.hardwareConcurrency) || 1
                  : 0),
                (u._audioPipelineDepth = 12),
                (u._videoInfo = null),
                (u._audioInfo = null),
                (u._width = 0),
                (u._height = 0),
                (u._volume = 1),
                (u._playbackRate = 1),
                Object.defineProperties((0, h.default)(u), {
                  src: {
                    get: function getSrc() {
                      return this.getAttribute('src') || ''
                    },
                    set: function setSrc(t) {
                      this.setAttribute('src', t),
                        (this._loading = !1),
                        this._prepForLoad('interactive')
                    }
                  },
                  buffered: {
                    get: function getBuffered() {
                      var t,
                        i = this
                      return (
                        (t =
                          this._stream && this._byteLength && this._duration
                            ? this._stream
                                .getBufferedRanges()
                                .map(function (t) {
                                  return t.map(function (t) {
                                    return (t / i._stream.length) * i._duration
                                  })
                                })
                            : [[0, 0]]),
                        new w.default(t)
                      )
                    }
                  },
                  seekable: {
                    get: function getSeekable() {
                      return this.duration < 1 / 0 &&
                        this._stream &&
                        this._stream.seekable &&
                        this._codec &&
                        this._codec.seekable
                        ? new w.default([[0, this._duration]])
                        : new w.default([])
                    }
                  },
                  currentTime: {
                    get: function getCurrentTime() {
                      return this._state == j
                        ? this._seekTargetTime
                        : this._codec
                        ? this._state != L || this._paused
                          ? this._initialPlaybackOffset
                          : this._getPlaybackTime()
                        : this._initialSeekTime
                    },
                    set: function setCurrentTime(t) {
                      this._seek(t, Q)
                    }
                  },
                  duration: {
                    get: function getDuration() {
                      return this._codec && this._codec.loadedMetadata
                        ? null !== this._duration
                          ? this._duration
                          : 1 / 0
                        : NaN
                    }
                  },
                  paused: {
                    get: function getPaused() {
                      return this._paused
                    }
                  },
                  ended: {
                    get: function getEnded() {
                      return this._ended
                    }
                  },
                  seeking: {
                    get: function getSeeking() {
                      return this._state == j
                    }
                  },
                  muted: {
                    get: function getMuted() {
                      return this._muted
                    },
                    set: function setMuted(t) {
                      ;(this._muted = t),
                        this._audioFeeder
                          ? (this._audioFeeder.muted = this._muted)
                          : this._started &&
                            !this._muted &&
                            this._codec &&
                            this._codec.hasAudio &&
                            (this._log(
                              'unmuting: switching from timer to audio clock'
                            ),
                            this._initAudioFeeder(),
                            this._startPlayback(this._audioEndTimestamp)),
                        this._fireEventAsync('volumechange')
                    }
                  },
                  poster: {
                    get: function getPoster() {
                      return this._poster
                    },
                    set: function setPoster(t) {
                      var i = this
                      if (((this._poster = t), !this._started)) {
                        this._thumbnail && this.removeChild(this._thumbnail)
                        var u = new Image()
                        ;(u.crossOrigin = this.crossOrigin),
                          (u.src = this._poster),
                          (u.className = 'ogvjs-poster'),
                          (u.style.position = 'absolute'),
                          (u.style.top = '0'),
                          (u.style.left = '0'),
                          (u.style.width = '100%'),
                          (u.style.height = '100%'),
                          (u.style.objectFit = 'contain'),
                          (u.style.visibility = 'hidden'),
                          u.addEventListener('load', function () {
                            i._thumbnail === u &&
                              (OGVPlayer.styleManager.appendRule(
                                '.' + i._instanceId,
                                {
                                  width: u.naturalWidth + 'px',
                                  height: u.naturalHeight + 'px'
                                }
                              ),
                              (u.style.visibility = 'visible'))
                          }),
                          (this._thumbnail = u),
                          this.appendChild(u)
                      }
                    }
                  },
                  videoWidth: {
                    get: function getVideoWidth() {
                      return this._videoInfo ? this._videoInfo.displayWidth : 0
                    }
                  },
                  videoHeight: {
                    get: function getVideoHeight() {
                      return this._videoInfo ? this._videoInfo.displayHeight : 0
                    }
                  },
                  ogvjsVideoFrameRate: {
                    get: function getOgvJsVideoFrameRate() {
                      return this._videoInfo
                        ? 0 == this._videoInfo.fps
                          ? this._totalFrameCount / (this._totalFrameTime / 1e3)
                          : this._videoInfo.fps
                        : 0
                    }
                  },
                  ogvjsAudioChannels: {
                    get: function getOgvJsAudioChannels() {
                      return this._audioInfo ? this._audioInfo.channels : 0
                    }
                  },
                  ogvjsAudioSampleRate: {
                    get: function getOgvJsAudioChannels() {
                      return this._audioInfo ? this._audioInfo.rate : 0
                    }
                  },
                  width: {
                    get: function getWidth() {
                      return this._width
                    },
                    set: function setWidth(t) {
                      ;(this._width = parseInt(t, 10)),
                        (this.style.width = this._width + 'px')
                    }
                  },
                  height: {
                    get: function getHeight() {
                      return this._height
                    },
                    set: function setHeight(t) {
                      ;(this._height = parseInt(t, 10)),
                        (this.style.height = this._height + 'px')
                    }
                  },
                  autoplay: {
                    get: function getAutoplay() {
                      return !1
                    },
                    set: function setAutoplay(t) {}
                  },
                  controls: {
                    get: function getControls() {
                      return !1
                    },
                    set: function setControls(t) {}
                  },
                  loop: {
                    get: function getLoop() {
                      return !1
                    },
                    set: function setLoop(t) {}
                  },
                  crossOrigin: {
                    get: function getCrossOrigin() {
                      return this._crossOrigin
                    },
                    set: function setCrossOrigin(t) {
                      switch (t) {
                        case null:
                          ;(this._crossOrigin = t),
                            this.removeAttribute('crossorigin')
                          break
                        default:
                          t = 'anonymous'
                        case '':
                        case 'anonymous':
                        case 'use-credentials':
                          ;(this._crossOrigin = t),
                            this.setAttribute('crossorigin', t)
                      }
                      this._thumbnail && (this._thumbnail.crossOrigin = t)
                    }
                  },
                  currentSrc: {
                    get: function getCurrentSrc() {
                      return this._currentSrc
                    }
                  },
                  defaultMuted: {
                    get: function getDefaultMuted() {
                      return !1
                    }
                  },
                  defaultPlaybackRate: {
                    get: function getDefaultPlaybackRate() {
                      return 1
                    }
                  },
                  error: {
                    get: function getError() {
                      return this._state === W
                        ? this._mediaError
                          ? this._mediaError
                          : new A.default(
                              'unknown error occurred in media procesing'
                            )
                        : null
                    }
                  },
                  preload: {
                    get: function getPreload() {
                      return this.getAttribute('preload') || ''
                    },
                    set: function setPreload(t) {
                      this.setAttribute('preload', t)
                    }
                  },
                  readyState: {
                    get: function getReadyState() {
                      return this._stream &&
                        this._codec &&
                        this._codec.loadedMetadata
                        ? OGVPlayer.HAVE_ENOUGH_DATA
                        : OGVPlayer.HAVE_NOTHING
                    }
                  },
                  networkState: {
                    get: function getNetworkState() {
                      return this._stream
                        ? this._stream.waiting
                          ? OGVPlayer.NETWORK_LOADING
                          : OGVPlayer.NETWORK_IDLE
                        : this.readyState == OGVPlayer.HAVE_NOTHING
                        ? OGVPlayer.NETWORK_EMPTY
                        : OGVPlayer.NETWORK_NO_SOURCE
                    }
                  },
                  playbackRate: {
                    get: function getPlaybackRate() {
                      return this._playbackRate
                    },
                    set: function setPlaybackRate(t) {
                      var i = Number(t) || 1
                      this._audioFeeder
                        ? (this._audioFeeder.tempo = i)
                        : this._paused ||
                          ((this._initialPlaybackOffset =
                            this._getPlaybackTime()),
                          (this._initialPlaybackPosition = (i * R()) / 1e3)),
                        (this._playbackRate = i),
                        this._fireEventAsync('ratechange')
                    }
                  },
                  played: {
                    get: function getPlayed() {
                      return new w.default([[0, this.currentTime]])
                    }
                  },
                  volume: {
                    get: function getVolume() {
                      return this._volume
                    },
                    set: function setVolume(t) {
                      ;(this._volume = +t),
                        this._audioFeeder &&
                          (this._audioFeeder.volume = this._volume),
                        this._fireEventAsync('volumechange')
                    }
                  }
                }),
                (u.onframecallback = null),
                (u.onloadstate = null),
                (u.onprogress = null),
                (u.onsuspend = null),
                (u.onabort = null),
                (u.onemptied = null),
                (u.onstalled = null),
                (u.onloadedmetadata = null),
                (u.onloadeddata = null),
                (u.oncanplay = null),
                (u.oncanplaythrough = null),
                (u.onplaying = null),
                (u.onwaiting = null),
                (u.onseeking = null),
                (u.onseeked = null),
                (u.onended = null),
                (u.ondurationchange = null),
                (u.ontimeupdate = null),
                (u.onplay = null),
                (u.onpause = null),
                (u.onratechange = null),
                (u.onresize = null),
                (u.onvolumechange = null),
                (u.onaudiofeedercreated = null),
                u
              )
            }
            return (
              (0, l.default)(
                OGVPlayer,
                [
                  {
                    key: '_time',
                    value: function _time(t) {
                      var i = R()
                      t()
                      var u = R() - i
                      return (this._lastFrameDecodeTime += u), u
                    }
                  },
                  {
                    key: '_log',
                    value: function _log(t) {
                      var i = this._options
                      if (i.debug) {
                        var u = R() - this._startTime
                        ;(i.debugFilter && !t.match(i.debugFilter)) ||
                          console.log(
                            '[' + Math.round(10 * u) / 10 + 'ms] ' + t
                          )
                      }
                    }
                  },
                  {
                    key: '_fireEvent',
                    value: function _fireEvent(t) {
                      var i =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {}
                      this._log('fireEvent ' + t)
                      var u,
                        d = 'function' == typeof Event
                      for (var c in (d
                        ? (u = new CustomEvent(t))
                        : (u = document.createEvent('Event')).initEvent(
                            t,
                            !1,
                            !1
                          ),
                      i))
                        i.hasOwnProperty(c) && (u[c] = i[c])
                      var l = this.dispatchEvent(u)
                      !d &&
                        'resize' === t &&
                        this.onresize &&
                        l &&
                        this.onresize.call(this, u)
                    }
                  },
                  {
                    key: '_fireEventAsync',
                    value: function _fireEventAsync(t) {
                      var i = this,
                        u =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                      this._log('fireEventAsync ' + t),
                        O(function () {
                          i._fireEvent(t, u)
                        })
                    }
                  },
                  {
                    key: '_initAudioFeeder',
                    value: function _initAudioFeeder() {
                      var t = this,
                        i = this._options,
                        u = { bufferSize: 8192 }
                      i.audioContext && (u.audioContext = i.audioContext),
                        i.audioDestination && (u.output = i.audioDestination),
                        i.audioBackendFactory &&
                          (u.backendFactory = i.audioBackendFactory)
                      var d = (this._audioFeeder = new y.default(u))
                      d.init(this._audioInfo.channels, this._audioInfo.rate),
                        this.onaudiofeedercreated &&
                          this.onaudiofeedercreated(this._audioFeeder),
                        (d.bufferThreshold = 1),
                        (d.volume = this.volume),
                        (d.muted = this.muted),
                        (d.tempo = this.playbackRate),
                        (d.onbufferlow = function () {
                          t._log('onbufferlow'),
                            (t._stream &&
                              (t._stream.buffering || t._stream.seeking)) ||
                              t._pendingAudio ||
                              t._pingProcessing()
                        }),
                        (d.onstarved = function () {
                          t._dataEnded
                            ? t._log(
                                'onstarved: appear to have reached end of audio'
                              )
                            : (t._log(
                                'onstarved: halting audio due to starvation'
                              ),
                              t._stopPlayback(),
                              (t._prebufferingAudio = !0)),
                            t._isProcessing() || t._pingProcessing(0)
                        })
                    }
                  },
                  {
                    key: '_startPlayback',
                    value: function _startPlayback(t) {
                      if (this._audioFeeder) {
                        this._audioFeeder.start()
                        var i = this._audioFeeder.getPlaybackState()
                        this._initialPlaybackPosition = i.playbackPosition
                      } else
                        this._initialPlaybackPosition =
                          (this._playbackRate * R()) / 1e3
                      void 0 !== t && (this._initialPlaybackOffset = t),
                        (this._prebufferingAudio = !1),
                        this._log(
                          'continuing at ' +
                            this._initialPlaybackPosition +
                            ', ' +
                            this._initialPlaybackOffset
                        )
                    }
                  },
                  {
                    key: '_stopPlayback',
                    value: function _stopPlayback() {
                      ;(this._initialPlaybackOffset = this._getPlaybackTime()),
                        this._log('pausing at ' + this._initialPlaybackOffset),
                        this._audioFeeder && this._audioFeeder.stop()
                    }
                  },
                  {
                    key: '_getPlaybackTime',
                    value: function _getPlaybackTime(t) {
                      return this._prebufferingAudio || this._paused
                        ? this._initialPlaybackOffset
                        : (this._audioFeeder
                            ? (t = t || this._audioFeeder.getPlaybackState())
                                .playbackPosition
                            : (this._playbackRate * R()) / 1e3) -
                            this._initialPlaybackPosition +
                            this._initialPlaybackOffset
                    }
                  },
                  {
                    key: '_stopVideo',
                    value: function _stopVideo() {
                      this._log('STOPPING'),
                        (this._state = C),
                        (this._seekState = X),
                        (this._started = !1),
                        (this._ended = !1),
                        (this._frameEndTimestamp = 0),
                        (this._audioEndTimestamp = 0),
                        (this._lastFrameDecodeTime = 0),
                        (this._prebufferingAudio = !1),
                        this._actionQueue.splice(0, this._actionQueue.length),
                        this._stream &&
                          (this._stream.abort(),
                          (this._stream = null),
                          (this._streamEnded = !1)),
                        this._codec &&
                          (this._codec.close(),
                          (this._codec = null),
                          (this._pendingFrame = 0),
                          (this._pendingAudio = 0),
                          (this._dataEnded = !1)),
                        (this._videoInfo = null),
                        (this._audioInfo = null),
                        this._audioFeeder &&
                          (this._audioFeeder.close(),
                          (this._audioFeeder = null)),
                        this._nextProcessingTimer &&
                          (clearTimeout(this._nextProcessingTimer),
                          (this._nextProcessingTimer = null)),
                        this._nextFrameTimer &&
                          (clearTimeout(this._nextFrameTimer),
                          (this._nextFrameTimer = null)),
                        this._frameSink &&
                          (this._frameSink.clear(), (this._frameSink = null)),
                        this._decodedFrames && (this._decodedFrames = []),
                        this._pendingFrames && (this._pendingFrames = []),
                        (this._initialSeekTime = 0),
                        (this._initialPlaybackPosition = 0),
                        (this._initialPlaybackOffset = 0),
                        (this._duration = null)
                    }
                  },
                  {
                    key: '_doFrameComplete',
                    value: function _doFrameComplete() {
                      var t = this,
                        i =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                      this._startedPlaybackInDocument &&
                        !document.body.contains(this) &&
                        O(function () {
                          t.stop()
                        })
                      var u = R(),
                        d = u - this._lastFrameTimestamp,
                        c = this._actualPerFrameTime - this._targetPerFrameTime
                      ;(this._totalJitter += Math.abs(c)), (this._playTime += d)
                      var l = {
                        cpuTime: this._lastFrameDecodeTime,
                        drawingTime:
                          this._drawingTime - this._lastFrameDrawingTime,
                        bufferTime:
                          this._bufferTime - this._lastFrameBufferTime,
                        proxyTime: this._proxyTime - this._lastFrameProxyTime,
                        demuxerTime: 0,
                        videoTime: 0,
                        audioTime: 0,
                        clockTime: this._actualPerFrameTime,
                        late: i.dropped,
                        dropped: i.dropped
                      }
                      function n(t) {
                        return Math.round(10 * t) / 10
                      }
                      this._codec &&
                        ((l.demuxerTime =
                          this._codec.demuxerCpuTime -
                          this._lastFrameDemuxerCpuTime),
                        (l.videoTime +=
                          this._currentVideoCpuTime -
                          this._lastFrameVideoCpuTime),
                        (l.audioTime +=
                          this._codec.audioCpuTime -
                          this._lastFrameAudioCpuTime)),
                        (l.cpuTime += l.demuxerTime),
                        (this._lastFrameDecodeTime = 0),
                        (this._lastFrameTimestamp = u),
                        this._codec
                          ? ((this._lastFrameVideoCpuTime =
                              this._currentVideoCpuTime),
                            (this._lastFrameAudioCpuTime =
                              this._codec.audioCpuTime),
                            (this._lastFrameDemuxerCpuTime =
                              this._codec.demuxerCpuTime))
                          : ((this._lastFrameVideoCpuTime = 0),
                            (this._lastFrameAudioCpuTime = 0),
                            (this._lastFrameDemuxerCpuTime = 0)),
                        (this._lastFrameDrawingTime = this._drawingTime),
                        (this._lastFrameBufferTime = this._bufferTime),
                        (this._lastFrameProxyTime = this._proxyTime),
                        this._log(
                          'drew frame ' +
                            i.frameEndTimestamp +
                            ': clock time ' +
                            n(d) +
                            ' (jitter ' +
                            n(c) +
                            ') cpu: ' +
                            n(l.cpuTime) +
                            ' (mux: ' +
                            n(l.demuxerTime) +
                            ' buf: ' +
                            n(l.bufferTime) +
                            ' draw: ' +
                            n(l.drawingTime) +
                            ' proxy: ' +
                            n(l.proxyTime) +
                            ') vid: ' +
                            n(l.videoTime) +
                            ' aud: ' +
                            n(l.audioTime)
                        ),
                        this._fireEventAsync('framecallback', l),
                        (!this._lastTimeUpdate ||
                          u - this._lastTimeUpdate >=
                            this._timeUpdateInterval) &&
                          ((this._lastTimeUpdate = u),
                          this._fireEventAsync('timeupdate')),
                        this._codec &&
                          i.yCbCrBuffer &&
                          this._codec.recycleFrame(i.yCbCrBuffer)
                    }
                  },
                  {
                    key: '_seekStream',
                    value: function _seekStream(t) {
                      var i = this
                      this._stream.seeking && this._stream.abort(),
                        this._stream.buffering && this._stream.abort(),
                        (this._streamEnded = !1),
                        (this._dataEnded = !1),
                        (this._ended = !1),
                        this._stream
                          .seek(t)
                          .then(function () {
                            i._readBytesAndWait()
                          })
                          .catch(function (t) {
                            i._onStreamError(t)
                          })
                    }
                  },
                  {
                    key: '_onStreamError',
                    value: function _onStreamError(t) {
                      'AbortError' === t.name
                        ? this._log('i/o promise canceled; ignoring')
                        : (this._log('i/o error: ' + t),
                          (this._mediaError = new A.default(
                            A.default.MEDIA_ERR_NETWORK,
                            String(t)
                          )),
                          (this._state = W),
                          this._stopPlayback())
                    }
                  },
                  {
                    key: '_seek',
                    value: function _seek(t, i) {
                      var u = this
                      if (
                        (this._log('requested seek to ' + t + ', mode ' + i),
                        this.readyState == this.HAVE_NOTHING)
                      )
                        return (
                          this._log(
                            'not yet loaded; saving seek position for later'
                          ),
                          void (this._initialSeekTime = t)
                        )
                      if (this._stream && !this._stream.seekable)
                        throw new Error('Cannot seek a non-seekable stream')
                      if (this._codec && !this._codec.seekable)
                        throw new Error('Cannot seek in a non-seekable file')
                      var d = function prepForSeek(d) {
                        u._stream && u._stream.buffering && u._stream.abort(),
                          u._stream && u._stream.seeking && u._stream.abort(),
                          u._actionQueue.splice(0, u._actionQueue.length),
                          u._stopPlayback(),
                          (u._prebufferingAudio = !1),
                          u._audioFeeder && u._audioFeeder.flush(),
                          (u._state = j),
                          (u._seekTargetTime = t),
                          (u._seekMode = i),
                          u._codec ? u._codec.flush(d) : d()
                      }
                      d(function () {
                        u._isProcessing() || u._pingProcessing(0)
                      }),
                        this._actionQueue.push(function () {
                          d(function () {
                            u._doSeek(t)
                          })
                        })
                    }
                  },
                  {
                    key: '_doSeek',
                    value: function _doSeek(t) {
                      var i = this
                      ;(this._streamEnded = !1),
                        (this._dataEnded = !1),
                        (this._ended = !1),
                        (this._state = j),
                        (this._seekTargetTime = t),
                        (this._lastSeekPosition = -1),
                        (this._decodedFrames = []),
                        (this._pendingFrames = []),
                        (this._pendingFrame = 0),
                        (this._pendingAudio = 0),
                        (this._didSeek = !1),
                        this._codec.seekToKeypoint(t, function (u) {
                          if (u)
                            return (
                              (i._seekState = z),
                              i._fireEventAsync('seeking'),
                              i._didSeek ? void 0 : void i._pingProcessing()
                            )
                          i._codec.getKeypointOffset(t, function (t) {
                            t > 0
                              ? ((i._seekState = z), i._seekStream(t))
                              : ((i._seekState = H),
                                i._startBisection(i._seekTargetTime)),
                              i._fireEventAsync('seeking')
                          })
                        })
                    }
                  },
                  {
                    key: '_startBisection',
                    value: function _startBisection(t) {
                      var i = this,
                        u = Math.max(0, this._stream.length - 65536)
                      ;(this._bisectTargetTime = t),
                        (this._seekBisector = new T.default({
                          start: 0,
                          end: u,
                          process: function process(t, u, d) {
                            return (
                              d != i._lastSeekPosition &&
                              ((i._lastSeekPosition = d),
                              i._codec.flush(function () {
                                i._seekStream(d)
                              }),
                              !0)
                            )
                          }
                        })),
                        this._seekBisector.start()
                    }
                  },
                  {
                    key: '_continueSeekedPlayback',
                    value: function _continueSeekedPlayback() {
                      var t = this
                      ;(this._seekState = X),
                        (this._state = I),
                        (this._frameEndTimestamp = this._codec.frameTimestamp),
                        (this._audioEndTimestamp = this._codec.audioTimestamp),
                        this._codec.hasAudio
                          ? (this._seekTargetTime = this._codec.audioTimestamp)
                          : (this._seekTargetTime = this._codec.frameTimestamp),
                        (this._initialPlaybackOffset = this._seekTargetTime)
                      var i = function finishedSeeking() {
                        ;(t._lastTimeUpdate = t._seekTargetTime),
                          t._fireEventAsync('timeupdate'),
                          t._fireEventAsync('seeked'),
                          t._isProcessing() || t._pingProcessing()
                      }
                      if (this._codec.hasVideo && this._decodedFrames.length) {
                        var u = this._decodedFrames.shift()
                        this._drawFrame(u.yCbCrBuffer), i()
                      } else {
                        if (this._codec.hasVideo && this._codec.frameReady)
                          return (
                            this._codec.decodeFrame(function (u) {
                              u && t._drawFrame(t._codec.frameBuffer), i()
                            }),
                            void this._codec.sync()
                          )
                        i()
                      }
                    }
                  },
                  {
                    key: '_drawFrame',
                    value: function _drawFrame(t) {
                      this._thumbnail &&
                        (this.removeChild(this._thumbnail),
                        (this._thumbnail = null)),
                        this._frameSink.drawFrame(t)
                    }
                  },
                  {
                    key: '_doProcessLinearSeeking',
                    value: function _doProcessLinearSeeking() {
                      var t,
                        i = this
                      if (
                        ((t = this._codec.hasVideo
                          ? this._targetPerFrameTime / 1e3
                          : 1 / 256),
                        this._codec.hasVideo)
                      ) {
                        if (this._pendingFrame) return
                        if (!this._codec.frameReady)
                          return void this._codec.process(function (t) {
                            t
                              ? i._pingProcessing()
                              : i._streamEnded
                              ? (i._log(
                                  'stream ended during linear seeking on video'
                                ),
                                (i._dataEnded = !0),
                                i._continueSeekedPlayback())
                              : i._readBytesAndWait()
                          })
                        if (
                          this._seekMode === Y &&
                          this._codec.keyframeTimestamp ==
                            this._codec.frameTimestamp
                        )
                          return void this._continueSeekedPlayback()
                        if (
                          this._codec.frameTimestamp <= this._seekTargetTime
                        ) {
                          var u = this._codec.frameTimestamp
                          return (
                            this._pendingFrame++,
                            this._pendingFrames.push({ frameEndTimestamp: u }),
                            this._decodedFrames.splice(
                              0,
                              this._decodedFrames.length
                            ),
                            this._codec.decodeFrame(function (t) {
                              i._pendingFrame--,
                                i._pendingFrames.shift(),
                                i._decodedFrames.push({
                                  yCbCrBuffer: i._codec.frameBuffer,
                                  videoCpuTime: i._codec.videoCpuTime,
                                  frameEndTimestamp: u
                                }),
                                i._pingProcessing()
                            }),
                            void this._codec.sync()
                          )
                        }
                        if (!this._codec.hasAudio)
                          return void this._continueSeekedPlayback()
                      }
                      if (this._codec.hasAudio) {
                        if (this._pendingAudio) return
                        return this._codec.audioReady
                          ? this._codec.audioTimestamp + t <
                            this._seekTargetTime
                            ? void this._codec.decodeAudio(function () {
                                i._pingProcessing()
                              })
                            : void this._continueSeekedPlayback()
                          : void this._codec.process(function (t) {
                              t
                                ? i._pingProcessing()
                                : i._streamEnded
                                ? (i._log(
                                    'stream ended during linear seeking on audio'
                                  ),
                                  (i._dataEnded = !0),
                                  i._continueSeekedPlayback())
                                : i._readBytesAndWait()
                            })
                      }
                    }
                  },
                  {
                    key: '_doProcessBisectionSeek',
                    value: function _doProcessBisectionSeek() {
                      var t,
                        i,
                        u = this
                      if (this._codec.hasVideo)
                        (i = this._codec.frameTimestamp),
                          (t = this._targetPerFrameTime / 1e3)
                      else {
                        if (!this._codec.hasAudio)
                          throw new Error(
                            'Invalid seek state; no audio or video track available'
                          )
                        ;(i = this._codec.audioTimestamp), (t = 1 / 256)
                      }
                      i < 0
                        ? this._codec.process(function (t) {
                            if (t) u._pingProcessing()
                            else if (u._streamEnded) {
                              if (
                                (u._log('stream ended during bisection seek'),
                                !u._seekBisector.right())
                              )
                                throw (
                                  (u._log('failed going back'),
                                  new Error('not sure what to do'))
                                )
                            } else u._readBytesAndWait()
                          })
                        : i - t / 2 > this._bisectTargetTime
                        ? this._seekBisector.left() ||
                          (this._log('close enough (left)'),
                          (this._seekTargetTime = i),
                          this._continueSeekedPlayback())
                        : i + t / 2 < this._bisectTargetTime
                        ? this._seekBisector.right() ||
                          (this._log('close enough (right)'),
                          (this._seekState = z),
                          this._pingProcessing())
                        : this._seekState == H &&
                          this._codec.hasVideo &&
                          this._codec.keyframeTimestamp <
                            this._codec.frameTimestamp
                        ? (this._log('finding the keypoint now'),
                          (this._seekState = N),
                          this._startBisection(this._codec.keyframeTimestamp))
                        : (this._log('straight seeking now'),
                          (this._seekState = z),
                          this._pingProcessing())
                    }
                  },
                  {
                    key: '_setupVideo',
                    value: function _setupVideo() {
                      this._videoInfo.fps > 0
                        ? (this._targetPerFrameTime = 1e3 / this._videoInfo.fps)
                        : (this._targetPerFrameTime = 16.667),
                        (this._canvas.width = this._videoInfo.displayWidth),
                        (this._canvas.height = this._videoInfo.displayHeight),
                        OGVPlayer.styleManager.appendRule(
                          '.' + this._instanceId,
                          {
                            width: this._videoInfo.displayWidth + 'px',
                            height: this._videoInfo.displayHeight + 'px'
                          }
                        )
                      var t = {}
                      void 0 !== this._options.webGL &&
                        (t.webGL = this._options.webGL),
                        this._options.forceWebGL && (t.webGL = 'required'),
                        (this._frameSink = g.default.attach(this._canvas, t))
                    }
                  },
                  {
                    key: '_doProcessing',
                    value: function _doProcessing() {
                      if (
                        (this._didSeek && (this._didSeek = !1),
                        (this._nextProcessingTimer = null),
                        this._isProcessing(),
                        this._depth > 0)
                      )
                        throw new Error(
                          'REENTRANCY FAIL: doProcessing recursing unexpectedly'
                        )
                      var t = 0
                      do {
                        if (
                          ((this._needProcessing = !1),
                          this._depth++,
                          this._doProcessingLoop(),
                          this._depth--,
                          this._needProcessing && this._isProcessing())
                        )
                          throw new Error(
                            'REENTRANCY FAIL: waiting on input or codec but asked to keep processing'
                          )
                        ++t > 500 &&
                          (this._log(
                            'stuck in processing loop; breaking with timer'
                          ),
                          (this._needProcessing = 0),
                          this._pingProcessing(0))
                      } while (this._needProcessing)
                    }
                  },
                  {
                    key: '_doProcessingLoop',
                    value: function _doProcessingLoop() {
                      if (this._actionQueue.length) this._actionQueue.shift()()
                      else if (this._state == C) this._doProcessInitial()
                      else if (this._state == B) this._doProcessSeekingEnd()
                      else if (this._state == D) this._doProcessLoaded()
                      else if (this._state == M) this._doProcessPreload()
                      else if (this._state == I) this._doProcessReady()
                      else if (this._state == j) this._doProcessSeeking()
                      else if (this._state == L) this._doProcessPlay()
                      else {
                        if (this._state != W)
                          throw new Error(
                            'Unexpected OGVPlayer state ' + this._state
                          )
                        this._doProcessError()
                      }
                    }
                  },
                  {
                    key: '_doProcessInitial',
                    value: function _doProcessInitial() {
                      var t = this
                      if (this._codec.loadedMetadata) {
                        if (!this._codec.hasVideo && !this._codec.hasAudio)
                          throw new Error(
                            'No audio or video found, something is wrong'
                          )
                        this._codec.hasAudio &&
                          (this._audioInfo = this._codec.audioFormat),
                          this._codec.hasVideo &&
                            ((this._videoInfo = this._codec.videoFormat),
                            this._setupVideo()),
                          isNaN(this._codec.duration) ||
                            (this._duration = this._codec.duration),
                          null === this._duration &&
                          this._stream.seekable &&
                          'video/ogg' == this._detectedType
                            ? ((this._state = B),
                              (this._lastSeenTimestamp = -1),
                              this._codec.flush(function () {
                                t._seekStream(
                                  Math.max(0, t._stream.length - 131072)
                                )
                              }))
                            : ((this._state = D), this._pingProcessing())
                      } else
                        this._codec.process(function (i) {
                          if (i) t._pingProcessing()
                          else {
                            if (t._streamEnded)
                              throw new Error(
                                'end of file before headers found'
                              )
                            t._log('reading more cause we are out of data'),
                              t._readBytesAndWait()
                          }
                        })
                    }
                  },
                  {
                    key: '_doProcessSeekingEnd',
                    value: function _doProcessSeekingEnd() {
                      var t = this
                      this._codec.frameReady
                        ? (this._log(
                            'saw frame with ' + this._codec.frameTimestamp
                          ),
                          (this._lastSeenTimestamp = Math.max(
                            this._lastSeenTimestamp,
                            this._codec.frameTimestamp
                          )),
                          this._codec.discardFrame(function () {
                            t._pingProcessing()
                          }))
                        : this._codec.audioReady
                        ? (this._log(
                            'saw audio with ' + this._codec.audioTimestamp
                          ),
                          (this._lastSeenTimestamp = Math.max(
                            this._lastSeenTimestamp,
                            this._codec.audioTimestamp
                          )),
                          this._codec.discardAudio(function () {
                            t._pingProcessing()
                          }))
                        : this._codec.process(function (i) {
                            i
                              ? t._pingProcessing()
                              : t._stream.eof
                              ? (t._log(
                                  'seek-duration: we are at the end: ' +
                                    t._lastSeenTimestamp
                                ),
                                t._lastSeenTimestamp > 0 &&
                                  (t._duration = t._lastSeenTimestamp),
                                (t._state = D),
                                t._codec.flush(function () {
                                  ;(t._streamEnded = !1),
                                    (t._dataEnded = !1),
                                    t._seekStream(0)
                                }))
                              : t._readBytesAndWait()
                          })
                    }
                  },
                  {
                    key: '_doProcessLoaded',
                    value: function _doProcessLoaded() {
                      ;(this._state = M),
                        this._fireEventAsync('loadedmetadata'),
                        this._fireEventAsync('durationchange'),
                        this._codec.hasVideo && this._fireEventAsync('resize'),
                        this._pingProcessing(0)
                    }
                  },
                  {
                    key: '_doProcessPreload',
                    value: function _doProcessPreload() {
                      var t = this
                      ;(!this._codec.frameReady && this._codec.hasVideo) ||
                      (!this._codec.audioReady && this._codec.hasAudio)
                        ? this._codec.process(function (i) {
                            i
                              ? t._pingProcessing()
                              : t._streamEnded
                              ? (t._ended = !0)
                              : t._readBytesAndWait()
                          })
                        : ((this._state = I),
                          this._fireEventAsync('loadeddata'),
                          this._pingProcessing())
                    }
                  },
                  {
                    key: '_doProcessReady',
                    value: function _doProcessReady() {
                      var t = this
                      if (
                        (this._log('initial seek to ' + this._initialSeekTime),
                        this._initialSeekTime > 0)
                      ) {
                        var i = this._initialSeekTime
                        ;(this._initialSeekTime = 0),
                          this._log('initial seek to ' + i),
                          this._doSeek(i)
                      } else if (this._paused)
                        this._log('paused while in ready')
                      else {
                        var u = function finishStartPlaying() {
                          t._log('finishStartPlaying'),
                            (t._state = L),
                            (t._lastFrameTimestamp = R()),
                            t._codec.hasAudio && t._audioFeeder
                              ? (t._prebufferingAudio = !0)
                              : t._startPlayback(),
                            t._pingProcessing(0),
                            t._fireEventAsync('play'),
                            t._fireEventAsync('playing')
                        }
                        !this._codec.hasAudio ||
                        this._audioFeeder ||
                        this._muted
                          ? u()
                          : (this._initAudioFeeder(),
                            this._audioFeeder.waitUntilReady(u))
                      }
                    }
                  },
                  {
                    key: '_doProcessSeeking',
                    value: function _doProcessSeeking() {
                      if (this._seekState == X)
                        throw new Error(
                          'seeking in invalid state (not seeking?)'
                        )
                      if (this._seekState == H) this._doProcessBisectionSeek()
                      else if (this._seekState == N)
                        this._doProcessBisectionSeek()
                      else {
                        if (this._seekState != z)
                          throw new Error(
                            'Invalid seek state ' + this._seekState
                          )
                        this._doProcessLinearSeeking()
                      }
                    }
                  },
                  {
                    key: '_doProcessPlay',
                    value: function _doProcessPlay() {
                      var t = this,
                        i = this._codec
                      if (this._paused)
                        this._log('paused during playback; stopping loop')
                      else if (
                        (!i.hasAudio ||
                          i.audioReady ||
                          this._pendingAudio ||
                          this._dataEnded) &&
                        (!i.hasVideo ||
                          i.frameReady ||
                          this._pendingFrame ||
                          this._decodedFrames.length ||
                          this._dataEnded)
                      ) {
                        var u,
                          d,
                          c,
                          l = null,
                          h = 0,
                          _ = !1,
                          p = 0
                        if (
                          (i.hasAudio && this._audioFeeder
                            ? ((l = this._audioFeeder.getPlaybackState()),
                              (h = this._getPlaybackTime(l)),
                              (_ =
                                this._dataEnded &&
                                0 == this._audioFeeder.durationBuffered),
                              this._prebufferingAudio &&
                                ((this._audioFeeder.durationBuffered >=
                                  2 * this._audioFeeder.bufferThreshold &&
                                  (!i.hasVideo ||
                                    this._decodedFrames.length >=
                                      this._framePipelineDepth)) ||
                                  this._dataEnded) &&
                                (this._log(
                                  'prebuffering audio done; buffered to ' +
                                    this._audioFeeder.durationBuffered
                                ),
                                this._startPlayback(h),
                                (this._prebufferingAudio = !1)),
                              l.dropped != this._droppedAudio &&
                                this._log(
                                  'dropped ' + (l.dropped - this._droppedAudio)
                                ),
                              l.delayed != this._delayedAudio &&
                                this._log(
                                  'delayed ' + (l.delayed - this._delayedAudio)
                                ),
                              (this._droppedAudio = l.dropped),
                              (this._delayedAudio = l.delayed),
                              (u =
                                this._audioFeeder.durationBuffered <=
                                2 * this._audioFeeder.bufferThreshold) &&
                                (this._codec.audioReady
                                  ? this._pendingAudio >=
                                      this._audioPipelineDepth &&
                                    (this._log(
                                      'audio decode disabled: ' +
                                        this._pendingAudio +
                                        ' packets in flight'
                                    ),
                                    (u = !1))
                                  : (u = !1)))
                            : ((h = this._getPlaybackTime()),
                              (u =
                                this._codec.audioReady &&
                                this._audioEndTimestamp < h)),
                          this._codec.hasVideo)
                        ) {
                          ;(d = this._decodedFrames.length > 0),
                            (c =
                              this._pendingFrame + this._decodedFrames.length <
                                this._framePipelineDepth +
                                  this._frameParallelism &&
                              this._codec.frameReady),
                            d &&
                              ((p =
                                1e3 *
                                (this._decodedFrames[0].frameEndTimestamp - h)),
                              (this._actualPerFrameTime =
                                this._targetPerFrameTime - p))
                          var m = this._targetPerFrameTime
                          if (this._prebufferingAudio)
                            c &&
                              this._log('decoding a frame during prebuffering'),
                              (d = !1)
                          else if (d && this._dataEnded && _)
                            this._log(
                              'audio timeline ended? ready to draw frame'
                            )
                          else if (d && -p >= m) {
                            for (
                              var V = -1, g = 0;
                              g < this._decodedFrames.length - 1;
                              g++
                            )
                              this._decodedFrames[g].frameEndTimestamp < h &&
                                (V = g - 1)
                            if (V >= 0)
                              for (; V-- >= 0; ) {
                                this._lateFrames++
                                var v = this._decodedFrames.shift()
                                this._log(
                                  'skipping already-decoded late frame at ' +
                                    v.frameEndTimestamp
                                ),
                                  (p = 1e3 * (v.frameEndTimestamp - h)),
                                  (this._frameEndTimestamp =
                                    v.frameEndTimestamp),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - p),
                                  this._framesProcessed++,
                                  (v.dropped = !0),
                                  this._doFrameComplete(v)
                              }
                            var y = this._codec.nextKeyframeTimestamp,
                              b =
                                y -
                                (this._targetPerFrameTime / 1e3) *
                                  (this._framePipelineDepth +
                                    this._pendingFrame)
                            if (
                              y >= 0 &&
                              y != this._codec.frameTimestamp &&
                              h >= b
                            ) {
                              this._log(
                                'skipping late frame at ' +
                                  this._decodedFrames[0].frameEndTimestamp +
                                  ' vs ' +
                                  h +
                                  ', expect to see keyframe at ' +
                                  y
                              )
                              for (
                                var T = 0;
                                T < this._decodedFrames.length;
                                T++
                              ) {
                                var k = this._decodedFrames[T]
                                this._lateFrames++,
                                  this._framesProcessed++,
                                  (this._frameEndTimestamp =
                                    k.frameEndTimestamp),
                                  (p = 1e3 * (k.frameEndTimestamp - h)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - p),
                                  (k.dropped = !0),
                                  this._doFrameComplete(k)
                              }
                              this._decodedFrames = []
                              for (
                                var A = 0;
                                A < this._pendingFrames.length;
                                A++
                              ) {
                                var P = this._pendingFrames[A]
                                this._lateFrames++,
                                  this._framesProcessed++,
                                  (this._frameEndTimestamp =
                                    P.frameEndTimestamp),
                                  (p = 1e3 * (P.frameEndTimestamp - h)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - p),
                                  (P.dropped = !0),
                                  this._doFrameComplete(P)
                              }
                              for (
                                this._pendingFrames = [],
                                  this._pendingFrame = 0;
                                this._codec.frameReady &&
                                this._codec.frameTimestamp < y;

                              ) {
                                var w = {
                                  frameEndTimestamp: this._codec.frameTimestamp,
                                  dropped: !0
                                }
                                ;(p = 1e3 * (w.frameEndTimestamp - h)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - p),
                                  this._lateFrames++,
                                  this._codec.discardFrame(function () {}),
                                  this._framesProcessed++,
                                  this._doFrameComplete(w)
                              }
                              return void (
                                this._isProcessing() || this._pingProcessing()
                              )
                            }
                          } else (d && p <= 4) || (d = !1)
                        }
                        if (c) {
                          this._log(
                            'play loop: ready to decode frame; thread depth: ' +
                              this._pendingFrame +
                              ', have buffered: ' +
                              this._decodedFrames.length
                          ),
                            0 == this._videoInfo.fps &&
                              this._codec.frameTimestamp -
                                this._frameEndTimestamp >
                                0 &&
                              (this._targetPerFrameTime =
                                1e3 *
                                (this._codec.frameTimestamp -
                                  this._frameEndTimestamp)),
                            (this._totalFrameTime += this._targetPerFrameTime),
                            this._totalFrameCount++
                          var E = (this._frameEndTimestamp =
                            this._codec.frameTimestamp)
                          this._pendingFrame++,
                            this._pendingFrames.push({ frameEndTimestamp: E })
                          var x = this._pendingFrames,
                            R = !1,
                            O = this._time(function () {
                              t._codec.decodeFrame(function (i) {
                                x === t._pendingFrames
                                  ? (t._log(
                                      'play loop callback: decoded frame'
                                    ),
                                    t._pendingFrame--,
                                    t._pendingFrames.shift(),
                                    i
                                      ? t._decodedFrames.push({
                                          yCbCrBuffer: t._codec.frameBuffer,
                                          videoCpuTime: t._codec.videoCpuTime,
                                          frameEndTimestamp: E
                                        })
                                      : t._log('Bad video packet or something'),
                                    t._codec.process(function () {
                                      t._isProcessing() ||
                                        t._pingProcessing(R ? void 0 : 0)
                                    }))
                                  : t._log(
                                      'play loop callback after flush, discarding'
                                    )
                              })
                            })
                          this._pendingFrame &&
                            ((R = !0),
                            (this._proxyTime += O),
                            this._pingProcessing(),
                            this._dataEnded && this._codec.sync())
                        } else if (u) {
                          this._log(
                            'play loop: ready for audio; depth: ' +
                              this._pendingAudio
                          ),
                            this._pendingAudio++
                          var S = this._codec.audioTimestamp,
                            C = this._time(function () {
                              t._codec.decodeAudio(function (i) {
                                if (
                                  (t._pendingAudio--,
                                  t._log('play loop callback: decoded audio'),
                                  (t._audioEndTimestamp = S),
                                  i)
                                ) {
                                  var u = t._codec.audioBuffer
                                  if (
                                    u &&
                                    ((t._bufferTime += t._time(function () {
                                      t._audioFeeder &&
                                        t._audioFeeder.bufferData(u)
                                    })),
                                    !t._codec.hasVideo)
                                  ) {
                                    t._framesProcessed++
                                    var d = {
                                      frameEndTimestamp: t._audioEndTimestamp
                                    }
                                    t._doFrameComplete(d)
                                  }
                                }
                                t._isProcessing() || t._pingProcessing()
                              })
                            })
                          this._pendingAudio &&
                            ((this._proxyTime += C),
                            this._codec.audioReady
                              ? this._pingProcessing()
                              : this._doProcessPlayDemux())
                        } else if (d) {
                          this._log('play loop: ready to draw frame'),
                            this._nextFrameTimer &&
                              (clearTimeout(this._nextFrameTimer),
                              (this._nextFrameTimer = null)),
                            this._thumbnail &&
                              (this.removeChild(this._thumbnail),
                              (this._thumbnail = null))
                          var B = this._decodedFrames.shift()
                          ;(this._currentVideoCpuTime = B.videoCpuTime),
                            (this._drawingTime += this._time(function () {
                              t._drawFrame(B.yCbCrBuffer)
                            })),
                            this._framesProcessed++,
                            this._doFrameComplete(B),
                            this._pingProcessing()
                        } else if (
                          !this._decodedFrames.length ||
                          this._nextFrameTimer ||
                          this._prebufferingAudio
                        )
                          if (
                            this._dataEnded &&
                            !(
                              this._pendingAudio ||
                              this._pendingFrame ||
                              this._decodedFrames.length
                            )
                          ) {
                            this._log(
                              'play loop: playback reached end of data ' +
                                [
                                  this._pendingAudio,
                                  this._pendingFrame,
                                  this._decodedFrames.length
                                ]
                            )
                            var D = 0
                            this._codec.hasAudio &&
                              this._audioFeeder &&
                              (D = 1e3 * this._audioFeeder.durationBuffered),
                              D > 0
                                ? (this._log(
                                    'play loop: ending pending ' + D + ' ms'
                                  ),
                                  this._pingProcessing(Math.max(0, D)))
                                : (this._log(
                                    'play loop: ENDING NOW: playback time ' +
                                      this._getPlaybackTime() +
                                      '; frameEndTimestamp: ' +
                                      this._frameEndTimestamp
                                  ),
                                  this._stopPlayback(),
                                  (this._prebufferingAudio = !1),
                                  (this._initialPlaybackOffset = Math.max(
                                    this._audioEndTimestamp,
                                    this._frameEndTimestamp
                                  )),
                                  (this._ended = !0),
                                  (this._paused = !0),
                                  this._fireEventAsync('pause'),
                                  this._fireEventAsync('ended'))
                          } else
                            this._prebufferingAudio &&
                            ((i.hasVideo && !i.frameReady) ||
                              (i.hasAudio && !i.audioReady))
                              ? (this._log('play loop: prebuffering demuxing'),
                                this._doProcessPlayDemux())
                              : this._log('play loop: waiting on async/timers')
                        else {
                          var M = p
                          this._log(
                            'play loop: setting a timer for drawing ' + M
                          ),
                            (this._nextFrameTimer = setTimeout(function () {
                              ;(t._nextFrameTimer = null), t._pingProcessing()
                            }, M))
                        }
                      } else
                        this._log('play loop: demuxing'),
                          this._doProcessPlayDemux()
                    }
                  },
                  {
                    key: '_doProcessPlayDemux',
                    value: function _doProcessPlayDemux() {
                      var t = this,
                        i = this._codec.frameReady,
                        u = this._codec.audioReady
                      this._codec.process(function (d) {
                        ;(t._codec.frameReady && !i) ||
                        (t._codec.audioReady && !u)
                          ? (t._log('demuxer has packets'), t._pingProcessing())
                          : d
                          ? (t._log('demuxer processing to find more packets'),
                            t._pingProcessing())
                          : (t._log('demuxer ran out of data'),
                            t._streamEnded
                              ? (t._log('demuxer reached end of data stream'),
                                (t._dataEnded = !0),
                                t._pingProcessing())
                              : (t._log('demuxer loading more data'),
                                t._readBytesAndWait()))
                      })
                    }
                  },
                  {
                    key: '_doProcessError',
                    value: function _doProcessError() {}
                  },
                  {
                    key: '_isProcessing',
                    value: function _isProcessing() {
                      return (
                        (this._stream &&
                          (this._stream.buffering || this._stream.seeking)) ||
                        (this._codec && this._codec.processing)
                      )
                    }
                  },
                  {
                    key: '_readBytesAndWait',
                    value: function _readBytesAndWait() {
                      var t = this
                      if (this._stream.buffering || this._stream.seeking)
                        this._log('readBytesAndWait during i/o')
                      else {
                        this._stream
                          .read(32768)
                          .then(function (i) {
                            t._log('got input ' + [i.byteLength]),
                              i.byteLength &&
                                t._actionQueue.push(function () {
                                  t._codec.receiveInput(i, function () {
                                    t._pingProcessing()
                                  })
                                }),
                              t._stream.eof &&
                                (t._log('stream is at end!'),
                                (t._streamEnded = !0)),
                              t._isProcessing() || t._pingProcessing()
                          })
                          .catch(function (i) {
                            t._onStreamError(i)
                          })
                      }
                    }
                  },
                  {
                    key: '_pingProcessing',
                    value: function _pingProcessing() {
                      var t = this,
                        i =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : -1
                      if (this._stream && this._stream.waiting)
                        this._log('waiting on input')
                      else {
                        this._nextProcessingTimer &&
                          (this._log('canceling old processing timer'),
                          clearTimeout(this._nextProcessingTimer),
                          (this._nextProcessingTimer = null))
                        var u = -1 / 256
                        i > u
                          ? (this._nextProcessingTimer = setTimeout(
                              function () {
                                t._pingProcessing()
                              },
                              i
                            ))
                          : this._depth
                          ? (this._needProcessing = !0)
                          : this._doProcessing()
                      }
                    }
                  },
                  {
                    key: '_startProcessingVideo',
                    value: function _startProcessingVideo(t) {
                      var i = this
                      if (!this._started && !this._codec) {
                        ;(this._framesProcessed = 0),
                          (this._bufferTime = 0),
                          (this._drawingTime = 0),
                          (this._proxyTime = 0),
                          (this._started = !0),
                          (this._ended = !1)
                        var u = {
                          base: this._options.base,
                          worker: this._enableWorker,
                          threading: this._enableThreading,
                          simd: this._enableSIMD
                        }
                        this._detectedType && (u.type = this._detectedType),
                          (this._codec = new E.default(u)),
                          (this._lastVideoCpuTime = 0),
                          (this._lastAudioCpuTime = 0),
                          (this._lastDemuxerCpuTime = 0),
                          (this._lastBufferTime = 0),
                          (this._lastDrawingTime = 0),
                          (this._lastProxyTime = 0),
                          (this._lastFrameVideoCpuTime = 0),
                          (this._lastFrameAudioCpuTime = 0),
                          (this._lastFrameDemuxerCpuTime = 0),
                          (this._lastFrameBufferTime = 0),
                          (this._lastFrameProxyTime = 0),
                          (this._lastFrameDrawingTime = 0),
                          (this._currentVideoCpuTime = 0),
                          (this._codec.onseek = function (t) {
                            ;(i._didSeek = !0), i._stream && i._seekStream(t)
                          }),
                          this._codec.init(function () {
                            i._codec.receiveInput(t, function () {
                              i._readBytesAndWait()
                            })
                          })
                      }
                    }
                  },
                  {
                    key: '_loadCodec',
                    value: function _loadCodec(t) {
                      var i = this
                      this._stream.read(1024).then(function (u) {
                        var d = new Uint8Array(u)
                        d.length > 4 &&
                        d[0] == 'O'.charCodeAt(0) &&
                        d[1] == 'g'.charCodeAt(0) &&
                        d[2] == 'g'.charCodeAt(0) &&
                        d[3] == 'S'.charCodeAt(0)
                          ? (i._detectedType = 'video/ogg')
                          : d.length > 4 &&
                            26 == d[0] &&
                            69 == d[1] &&
                            223 == d[2] &&
                            163 == d[3]
                          ? (i._detectedType = 'video/webm')
                          : (i._detectedType = 'video/ogg'),
                          t(u)
                      })
                    }
                  },
                  {
                    key: '_prepForLoad',
                    value: function _prepForLoad(t) {
                      var i = this
                      this._stopVideo()
                      ;(this._currentSrc = ''),
                        (this._loading = !0),
                        this._actionQueue.push(function () {
                          t && 'none' === i.preload
                            ? (i._loading = !1)
                            : (function doLoad() {
                                i._options.stream
                                  ? (i._stream = i._options.stream)
                                  : (i._stream = new v.default({
                                      url: i.src,
                                      cacheSize: 16777216,
                                      progressive: !1
                                    })),
                                  i._stream
                                    .load()
                                    .then(function () {
                                      ;(i._loading = !1),
                                        (i._currentSrc = i.src),
                                        (i._byteLength = i._stream.seekable
                                          ? i._stream.length
                                          : 0)
                                      var t =
                                        i._stream.headers['x-content-duration']
                                      'string' == typeof t &&
                                        (i._duration = parseFloat(t)),
                                        i._loadCodec(function (t) {
                                          i._startProcessingVideo(t)
                                        })
                                    })
                                    .catch(function (t) {
                                      i._onStreamError(t)
                                    })
                              })()
                        }),
                        this._pingProcessing(0)
                    }
                  },
                  {
                    key: 'load',
                    value: function load() {
                      this._prepForLoad()
                    }
                  },
                  {
                    key: 'canPlayType',
                    value: function canPlayType(t) {
                      var i = new P.default(t)
                      function checkTypes(t) {
                        if (i.codecs) {
                          var u = 0,
                            d = 0
                          return (
                            i.codecs.forEach(function (i) {
                              t.indexOf(i) >= 0 ? u++ : d++
                            }),
                            0 === u || d > 0 ? '' : 'probably'
                          )
                        }
                        return 'maybe'
                      }
                      return 'ogg' !== i.minor ||
                        ('audio' !== i.major &&
                          'video' !== i.major &&
                          'application' !== i.major)
                        ? 'webm' !== i.minor ||
                          ('audio' !== i.major && 'video' !== i.major)
                          ? ''
                          : checkTypes(['vorbis', 'opus', 'vp8', 'vp9'])
                        : checkTypes(['vorbis', 'opus', 'theora'])
                    }
                  },
                  {
                    key: 'play',
                    value: function play() {
                      this._muted ||
                        this._options.audioContext ||
                        OGVPlayer.initSharedAudioContext(),
                        this._paused &&
                          ((this._startedPlaybackInDocument =
                            document.body.contains(this)),
                          (this._paused = !1),
                          this._state == j ||
                            (this._started &&
                            this._codec &&
                            this._codec.loadedMetadata
                              ? (this._ended && this._stream && this._byteLength
                                  ? (this._log(
                                      '.play() starting over after end'
                                    ),
                                    this._seek(0))
                                  : this._log('.play() while already started'),
                                (this._state = I),
                                this._isProcessing() || this._pingProcessing())
                              : this._loading
                              ? this._log('.play() while loading')
                              : (this._log('.play() before started'),
                                this._stream || this.load())))
                    }
                  },
                  {
                    key: 'getPlaybackStats',
                    value: function getPlaybackStats() {
                      return {
                        targetPerFrameTime: this._targetPerFrameTime,
                        framesProcessed: this._framesProcessed,
                        videoBytes: this._codec ? this._codec.videoBytes : 0,
                        audioBytes: this._codec ? this._codec.audioBytes : 0,
                        playTime: this._playTime,
                        demuxingTime: this._codec
                          ? this._codec.demuxerCpuTime -
                            this._lastDemuxerCpuTime
                          : 0,
                        videoDecodingTime: this._codec
                          ? this._codec.videoCpuTime - this._lastVideoCpuTime
                          : 0,
                        audioDecodingTime: this._codec
                          ? this._codec.audioCpuTime - this._lastAudioCpuTime
                          : 0,
                        bufferTime: this._bufferTime - this._lastBufferTime,
                        drawingTime: this._drawingTime - this._lastDrawingTime,
                        proxyTime: this._proxyTime - this._lastProxyTime,
                        droppedAudio: this._droppedAudio,
                        delayedAudio: this._delayedAudio,
                        jitter: this._totalJitter / this._framesProcessed,
                        lateFrames: this._lateFrames
                      }
                    }
                  },
                  {
                    key: 'resetPlaybackStats',
                    value: function resetPlaybackStats() {
                      ;(this._framesProcessed = 0),
                        (this._playTime = 0),
                        this._codec &&
                          ((this._lastDemuxerCpuTime =
                            this._codec.demuxerCpuTime),
                          (this._lastVideoCpuTime = this._codec.videoCpuTime),
                          (this._lastAudioCpuTime = this._codec.audioCpuTime),
                          (this._codec.videoBytes = 0),
                          (this._codec.audioBytes = 0)),
                        (this._lastBufferTime = this._bufferTime),
                        (this._lastDrawingTime = this._drawingTime),
                        (this._lastProxyTime = this._proxyTime),
                        (this._totalJitter = 0),
                        (this._totalFrameTime = 0),
                        (this._totalFrameCount = 0)
                    }
                  },
                  {
                    key: 'getVideoFrameSink',
                    value: function getVideoFrameSink() {
                      return this._frameSink
                    }
                  },
                  {
                    key: 'getCanvas',
                    value: function getCanvas() {
                      return this._canvas
                    }
                  },
                  {
                    key: 'getVideo',
                    value: function getVideo() {
                      return null
                    }
                  },
                  {
                    key: 'pause',
                    value: function pause() {
                      this._paused ||
                        (this._nextProcessingTimer &&
                          (clearTimeout(this._nextProcessingTimer),
                          (this._nextProcessingTimer = null)),
                        this._stopPlayback(),
                        (this._prebufferingAudio = !1),
                        (this._paused = !0),
                        this._fireEvent('pause'))
                    }
                  },
                  {
                    key: 'stop',
                    value: function stop() {
                      this._stopVideo(), (this._paused = !0)
                    }
                  },
                  {
                    key: 'fastSeek',
                    value: function fastSeek(t) {
                      this._seek(+t, Y)
                    }
                  }
                ],
                [
                  {
                    key: 'initSharedAudioContext',
                    value: function initSharedAudioContext() {
                      var t = document.createElement('audio')
                      ;(t.src = x.default),
                        t.play(),
                        y.default.initSharedAudioContext()
                    }
                  }
                ]
              ),
              OGVPlayer
            )
          })(OGVJSElement)
          ;(0, k.default)(Z, S),
            (Z.instanceCount = 0),
            (Z.styleManager = new (function StyleManager() {
              var t = document.createElement('style')
              ;(t.type = 'text/css'),
                (t.textContent =
                  'ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); '),
                document.head.appendChild(t)
              var i = t.sheet
              this.appendRule = function (t, u) {
                var d = []
                for (var c in u) u.hasOwnProperty(c) && d.push(c + ':' + u[c])
                var l = t + '{' + d.join(';') + '}'
                i.insertRule(l, i.cssRules.length - 1)
              }
            })())
          var K = Z
          i.default = K
        },
        580: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913))
          var h = function OGVProxyClass(t) {
            return (function () {
              function _class(i, u, d) {
                var l = this
                for (var h in ((0, c.default)(this, _class),
                (d = d || {}),
                (this.worker = i),
                (this.transferables = (function () {
                  var t = new ArrayBuffer(1024),
                    u = new Uint8Array(t)
                  try {
                    return (
                      i.postMessage({ action: 'transferTest', bytes: u }, [t]),
                      !t.byteLength
                    )
                  } catch (t) {
                    return !1
                  }
                })()),
                t))
                  t.hasOwnProperty(h) && (this[h] = t[h])
                ;(this.processingQueue = 0),
                  Object.defineProperty(this, 'processing', {
                    get: function get() {
                      return this.processingQueue > 0
                    }
                  }),
                  (this.messageCount = 0),
                  (this.pendingCallbacks = {}),
                  this.worker.addEventListener('message', function (t) {
                    l.handleMessage(t)
                  }),
                  this.proxy('construct', [u, d], function () {})
              }
              return (
                (0, l.default)(_class, [
                  {
                    key: 'proxy',
                    value: function proxy(t, i, u) {
                      var d =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : []
                      if (!this.worker)
                        throw (
                          'Tried to call "' +
                          t +
                          '" method on closed proxy object'
                        )
                      var c = 'callback-' + ++this.messageCount + '-' + t
                      u && (this.pendingCallbacks[c] = u)
                      var l = { action: t, callbackId: c, args: i || [] }
                      this.processingQueue++,
                        this.transferables
                          ? this.worker.postMessage(l, d)
                          : this.worker.postMessage(l)
                    }
                  },
                  {
                    key: 'terminate',
                    value: function terminate() {
                      this.worker &&
                        (this.worker.terminate(),
                        (this.worker = null),
                        (this.processingQueue = 0),
                        (this.pendingCallbacks = {}))
                    }
                  },
                  {
                    key: 'handleMessage',
                    value: function handleMessage(t) {
                      if (
                        (this.processingQueue--, 'callback' === t.data.action)
                      ) {
                        var i = t.data,
                          u = i.callbackId,
                          d = i.args,
                          c = this.pendingCallbacks[u]
                        if (i.props)
                          for (var l in i.props)
                            i.props.hasOwnProperty(l) && (this[l] = i.props[l])
                        c && (delete this.pendingCallbacks[u], c.apply(this, d))
                      }
                    }
                  }
                ]),
                _class
              )
            })()
          }
          i.default = h
        },
        168: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = (function () {
              function OGVTimeRanges(t) {
                ;(0, c.default)(this, OGVTimeRanges),
                  (this._ranges = t),
                  (this.length = t.length)
              }
              return (
                (0, l.default)(OGVTimeRanges, [
                  {
                    key: 'start',
                    value: function start(t) {
                      if (t < 0 || t > this.length || t !== (0 | t))
                        throw new RangeError('Invalid index')
                      return this._ranges[t][0]
                    }
                  },
                  {
                    key: 'end',
                    value: function end(t) {
                      if (t < 0 || t > this.length || t !== (0 | t))
                        throw new RangeError('Invalid index')
                      return this._ranges[t][1]
                    }
                  }
                ]),
                OGVTimeRanges
              )
            })()
          i.default = h
        },
        625: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(575)),
            l = d(u(913)),
            h = d(u(964))
          function _createForOfIteratorHelper(t, i) {
            var u =
              ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
              t['@@iterator']
            if (!u) {
              if (
                Array.isArray(t) ||
                (u = (function _unsupportedIterableToArray(t, i) {
                  if (!t) return
                  if ('string' == typeof t) return _arrayLikeToArray(t, i)
                  var u = Object.prototype.toString.call(t).slice(8, -1)
                  'Object' === u && t.constructor && (u = t.constructor.name)
                  if ('Map' === u || 'Set' === u) return Array.from(t)
                  if (
                    'Arguments' === u ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
                  )
                    return _arrayLikeToArray(t, i)
                })(t)) ||
                (i && t && 'number' == typeof t.length)
              ) {
                u && (t = u)
                var d = 0,
                  c = function F() {}
                return {
                  s: c,
                  n: function n() {
                    return d >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[d++] }
                  },
                  e: function e(t) {
                    throw t
                  },
                  f: c
                }
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            }
            var l,
              h = !0,
              _ = !1
            return {
              s: function s() {
                u = u.call(t)
              },
              n: function n() {
                var t = u.next()
                return (h = t.done), t
              },
              e: function e(t) {
                ;(_ = !0), (l = t)
              },
              f: function f() {
                try {
                  h || null == u.return || u.return()
                } finally {
                  if (_) throw l
                }
              }
            }
          }
          function _arrayLikeToArray(t, i) {
            ;(null == i || i > t.length) && (i = t.length)
            for (var u = 0, d = new Array(i); u < i; u++) d[u] = t[u]
            return d
          }
          var _ = (function () {
            function OGVWrapperCodec(t) {
              return (
                (0, c.default)(this, OGVWrapperCodec),
                (this.options = t || {}),
                (this.demuxer = null),
                (this.videoDecoder = null),
                (this.audioDecoder = null),
                (this.flushIter = 0),
                (this.loadedMetadata = !1),
                (this.processing = !1),
                Object.defineProperties(this, {
                  duration: {
                    get: function get() {
                      return this.loadedMetadata ? this.demuxer.duration : NaN
                    }
                  },
                  hasAudio: {
                    get: function get() {
                      return this.loadedMetadata && !!this.audioDecoder
                    }
                  },
                  audioReady: {
                    get: function get() {
                      return this.hasAudio && this.demuxer.audioReady
                    }
                  },
                  audioTimestamp: {
                    get: function get() {
                      return this.demuxer.audioTimestamp
                    }
                  },
                  audioFormat: {
                    get: function get() {
                      return this.hasAudio
                        ? this.audioDecoder.audioFormat
                        : null
                    }
                  },
                  audioBuffer: {
                    get: function get() {
                      return this.hasAudio
                        ? this.audioDecoder.audioBuffer
                        : null
                    }
                  },
                  hasVideo: {
                    get: function get() {
                      return this.loadedMetadata && !!this.videoDecoder
                    }
                  },
                  frameReady: {
                    get: function get() {
                      return this.hasVideo && this.demuxer.frameReady
                    }
                  },
                  frameTimestamp: {
                    get: function get() {
                      return this.demuxer.frameTimestamp
                    }
                  },
                  keyframeTimestamp: {
                    get: function get() {
                      return this.demuxer.keyframeTimestamp
                    }
                  },
                  nextKeyframeTimestamp: {
                    get: function get() {
                      return this.demuxer.nextKeyframeTimestamp
                    }
                  },
                  videoFormat: {
                    get: function get() {
                      return this.hasVideo
                        ? this.videoDecoder.videoFormat
                        : null
                    }
                  },
                  frameBuffer: {
                    get: function get() {
                      return this.hasVideo
                        ? this.videoDecoder.frameBuffer
                        : null
                    }
                  },
                  seekable: {
                    get: function get() {
                      return this.demuxer.seekable
                    }
                  },
                  demuxerCpuTime: {
                    get: function get() {
                      return this.demuxer ? this.demuxer.cpuTime : 0
                    }
                  },
                  audioCpuTime: {
                    get: function get() {
                      return this.audioDecoder ? this.audioDecoder.cpuTime : 0
                    }
                  },
                  videoCpuTime: {
                    get: function get() {
                      return this.videoDecoder ? this.videoDecoder.cpuTime : 0
                    }
                  }
                }),
                (this.loadedDemuxerMetadata = !1),
                (this.loadedAudioMetadata = !1),
                (this.loadedVideoMetadata = !1),
                (this.loadedAllMetadata = !1),
                (this.onseek = null),
                (this.videoBytes = 0),
                (this.audioBytes = 0),
                this
              )
            }
            return (
              (0, l.default)(OGVWrapperCodec, [
                {
                  key: 'flushSafe',
                  value: function flushSafe(t) {
                    var i = this,
                      u = this.flushIter
                    return function (d) {
                      i.flushIter <= u && t(d)
                    }
                  }
                },
                {
                  key: 'init',
                  value: function init(t) {
                    var i,
                      u = this
                    ;(this.processing = !0),
                      (i =
                        'video/webm' === this.options.type ||
                        'audio/webm' === this.options.type
                          ? 'OGVDemuxerWebMW'
                          : 'OGVDemuxerOggW'),
                      h.default.loadClass(i, function (i) {
                        i().then(function (i) {
                          ;(u.demuxer = i),
                            (i.onseek = function (t) {
                              u.onseek && u.onseek(t)
                            }),
                            i.init(function () {
                              ;(u.processing = !1), t()
                            })
                        })
                      })
                  }
                },
                {
                  key: 'close',
                  value: function close() {
                    this.demuxer &&
                      (this.demuxer.close(), (this.demuxer = null)),
                      this.videoDecoder &&
                        (this.videoDecoder.close(), (this.videoDecoder = null)),
                      this.audioDecoder &&
                        (this.audioDecoder.close(), (this.audioDecoder = null))
                  }
                },
                {
                  key: 'receiveInput',
                  value: function receiveInput(t, i) {
                    this.demuxer.receiveInput(t, i)
                  }
                },
                {
                  key: 'process',
                  value: function process(t) {
                    var i = this
                    if (this.processing)
                      throw new Error(
                        'reentrancy fail on OGVWrapperCodec.process'
                      )
                    this.processing = !0
                    var u = function finish(u) {
                        ;(i.processing = !1), t(u)
                      },
                      d = function doProcessData() {
                        i.demuxer.process(u)
                      }
                    this.demuxer.loadedMetadata && !this.loadedDemuxerMetadata
                      ? this.loadAudioCodec(function () {
                          i.loadVideoCodec(function () {
                            ;(i.loadedDemuxerMetadata = !0),
                              (i.loadedAudioMetadata = !i.audioDecoder),
                              (i.loadedVideoMetadata = !i.videoDecoder),
                              (i.loadedAllMetadata =
                                i.loadedAudioMetadata && i.loadedVideoMetadata),
                              u(!0)
                          })
                        })
                      : this.loadedDemuxerMetadata && !this.loadedAudioMetadata
                      ? this.audioDecoder.loadedMetadata
                        ? ((this.loadedAudioMetadata = !0),
                          (this.loadedAllMetadata =
                            this.loadedAudioMetadata &&
                            this.loadedVideoMetadata),
                          u(!0))
                        : this.demuxer.audioReady
                        ? this.demuxer.dequeueAudioPacket(function (t, d) {
                            ;(i.audioBytes += t.byteLength),
                              i.audioDecoder.processHeader(t, function (t) {
                                u(!0)
                              })
                          })
                        : d()
                      : this.loadedAudioMetadata && !this.loadedVideoMetadata
                      ? this.videoDecoder.loadedMetadata
                        ? ((this.loadedVideoMetadata = !0),
                          (this.loadedAllMetadata =
                            this.loadedAudioMetadata &&
                            this.loadedVideoMetadata),
                          u(!0))
                        : this.demuxer.frameReady
                        ? ((this.processing = !0),
                          this.demuxer.dequeueVideoPacket(function (t) {
                            ;(i.videoBytes += t.byteLength),
                              i.videoDecoder.processHeader(t, function () {
                                u(!0)
                              })
                          }))
                        : d()
                      : this.loadedVideoMetadata &&
                        !this.loadedMetadata &&
                        this.loadedAllMetadata
                      ? ((this.loadedMetadata = !0), u(!0))
                      : !this.loadedMetadata ||
                        (this.hasAudio && !this.demuxer.audioReady) ||
                        (this.hasVideo && !this.demuxer.frameReady)
                      ? d()
                      : u(!0)
                  }
                },
                {
                  key: 'decodeFrame',
                  value: function decodeFrame(t) {
                    var i = this,
                      u = this.flushSafe(t),
                      d = this.frameTimestamp,
                      c = this.keyframeTimestamp
                    this.demuxer.dequeueVideoPacket(function (t) {
                      ;(i.videoBytes += t.byteLength),
                        i.videoDecoder.processFrame(t, function (t) {
                          var l = i.videoDecoder.frameBuffer
                          l && ((l.timestamp = d), (l.keyframeTimestamp = c)),
                            u(t)
                        })
                    })
                  }
                },
                {
                  key: 'decodeAudio',
                  value: function decodeAudio(t) {
                    var i = this,
                      u = this.flushSafe(t)
                    this.demuxer.dequeueAudioPacket(function (t, d) {
                      ;(i.audioBytes += t.byteLength),
                        i.audioDecoder.processAudio(t, function (t) {
                          if (d) {
                            var c,
                              l = [],
                              h = _createForOfIteratorHelper(
                                i.audioDecoder.audioBuffer
                              )
                            try {
                              for (h.s(); !(c = h.n()).done; ) {
                                var _ = c.value,
                                  p = Math.round((d * i.audioFormat.rate) / 1e9)
                                p > 0
                                  ? l.push(
                                      _.subarray(
                                        0,
                                        _.length - Math.min(p, _.length)
                                      )
                                    )
                                  : l.push(
                                      _.subarray(
                                        Math.min(Math.abs(p), _.length),
                                        _.length
                                      )
                                    )
                              }
                            } catch (t) {
                              h.e(t)
                            } finally {
                              h.f()
                            }
                            i.audioDecoder.audioBuffer = l
                          }
                          return u(t)
                        })
                    })
                  }
                },
                {
                  key: 'discardFrame',
                  value: function discardFrame(t) {
                    var i = this
                    this.demuxer.dequeueVideoPacket(function (u) {
                      ;(i.videoBytes += u.byteLength), t()
                    })
                  }
                },
                {
                  key: 'discardAudio',
                  value: function discardAudio(t) {
                    var i = this
                    this.demuxer.dequeueAudioPacket(function (u, d) {
                      ;(i.audioBytes += u.byteLength), t()
                    })
                  }
                },
                {
                  key: 'flush',
                  value: function flush(t) {
                    this.flushIter++, this.demuxer.flush(t)
                  }
                },
                {
                  key: 'sync',
                  value: function sync() {
                    this.videoDecoder && this.videoDecoder.sync()
                  }
                },
                {
                  key: 'recycleFrame',
                  value: function recycleFrame(t) {
                    this.videoDecoder && this.videoDecoder.recycleFrame(t)
                  }
                },
                {
                  key: 'getKeypointOffset',
                  value: function getKeypointOffset(t, i) {
                    this.demuxer.getKeypointOffset(t, i)
                  }
                },
                {
                  key: 'seekToKeypoint',
                  value: function seekToKeypoint(t, i) {
                    this.demuxer.seekToKeypoint(t, this.flushSafe(i))
                  }
                },
                {
                  key: 'loadAudioCodec',
                  value: function loadAudioCodec(t) {
                    var i = this
                    if (this.demuxer.audioCodec) {
                      var u = {
                        vorbis: 'OGVDecoderAudioVorbisW',
                        opus: 'OGVDecoderAudioOpusW'
                      }[this.demuxer.audioCodec]
                      ;(this.processing = !0),
                        h.default.loadClass(
                          u,
                          function (u) {
                            var d = {}
                            i.demuxer.audioFormat &&
                              (d.audioFormat = i.demuxer.audioFormat),
                              u(d).then(function (u) {
                                ;(i.audioDecoder = u),
                                  u.init(function () {
                                    ;(i.loadedAudioMetadata = u.loadedMetadata),
                                      (i.processing = !1),
                                      t()
                                  })
                              })
                          },
                          { worker: this.options.worker }
                        )
                    } else t()
                  }
                },
                {
                  key: 'loadVideoCodec',
                  value: function loadVideoCodec(t) {
                    var i = this
                    if (this.demuxer.videoCodec) {
                      var u = !!this.options.simd,
                        d = !!this.options.threading,
                        c = {
                          theora: 'OGVDecoderVideoTheoraW',
                          vp8: d
                            ? 'OGVDecoderVideoVP8MTW'
                            : 'OGVDecoderVideoVP8W',
                          vp9: d
                            ? u
                              ? 'OGVDecoderVideoVP9SIMDMTW'
                              : 'OGVDecoderVideoVP9MTW'
                            : u
                            ? 'OGVDecoderVideoVP9SIMDW'
                            : 'OGVDecoderVideoVP9W',
                          av1: d
                            ? u
                              ? 'OGVDecoderVideoAV1SIMDMTW'
                              : 'OGVDecoderVideoAV1MTW'
                            : u
                            ? 'OGVDecoderVideoAV1SIMDW'
                            : 'OGVDecoderVideoAV1W'
                        }[this.demuxer.videoCodec]
                      ;(this.processing = !0),
                        h.default.loadClass(
                          c,
                          function (u) {
                            var c = {}
                            i.demuxer.videoFormat &&
                              (c.videoFormat = i.demuxer.videoFormat),
                              d && delete window.ENVIRONMENT_IS_PTHREAD,
                              u(c).then(function (u) {
                                ;(i.videoDecoder = u),
                                  u.init(function () {
                                    ;(i.loadedVideoMetadata = u.loadedMetadata),
                                      (i.processing = !1),
                                      t()
                                  })
                              })
                          },
                          {
                            worker:
                              this.options.worker && !this.options.threading
                          }
                        )
                    } else t()
                  }
                }
              ]),
              OGVWrapperCodec
            )
          })()
          i.default = _
        },
        539: (t, i, u) => {
          'use strict'
          var d = u(318)
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var c = d(u(8)),
            l = d(u(575)),
            h = d(u(913))
          var _ = new ((function () {
            function WebAssemblyChecker() {
              ;(0, l.default)(this, WebAssemblyChecker),
                (this.tested = !1),
                (this.testResult = void 0)
            }
            return (
              (0, h.default)(WebAssemblyChecker, [
                {
                  key: 'wasmSupported',
                  value: function wasmSupported() {
                    if (!this.tested) {
                      try {
                        'object' ===
                        ('undefined' == typeof WebAssembly
                          ? 'undefined'
                          : (0, c.default)(WebAssembly))
                          ? (this.testResult =
                              (function testSafariWebAssemblyBug() {
                                var t = new Uint8Array([
                                    0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1,
                                    127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7,
                                    8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16,
                                    1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40,
                                    2, 0, 11
                                  ]),
                                  i = new WebAssembly.Module(t)
                                return (
                                  0 !==
                                  new WebAssembly.Instance(i, {}).exports.test(
                                    4
                                  )
                                )
                              })())
                          : (this.testResult = !1)
                      } catch (t) {
                        console.log('Exception while testing WebAssembly', t),
                          (this.testResult = !1)
                      }
                      this.tested = !0
                    }
                    return this.testResult
                  }
                }
              ]),
              WebAssemblyChecker
            )
          })())()
          i.default = _
        },
        309: (t, i) => {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }),
            (i.default = void 0)
          var u = function extend(t, i) {
            for (var u in i) i.hasOwnProperty(u) && (t[u] = i[u])
          }
          i.default = u
        },
        431: (t, i, u) => {
          'use strict'
          var d = (function () {
              function defineProperties(t, i) {
                for (var u = 0; u < i.length; u++) {
                  var d = i[u]
                  ;(d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    'value' in d && (d.writable = !0),
                    Object.defineProperty(t, d.key, d)
                }
              }
              return function (t, i, u) {
                return (
                  i && defineProperties(t.prototype, i),
                  u && defineProperties(t, u),
                  t
                )
              }
            })(),
            c = function get(t, i, u) {
              null === t && (t = Function.prototype)
              var d = Object.getOwnPropertyDescriptor(t, i)
              if (void 0 === d) {
                var c = Object.getPrototypeOf(t)
                return null === c ? void 0 : get(c, i, u)
              }
              if ('value' in d) return d.value
              var l = d.get
              return void 0 !== l ? l.call(u) : void 0
            }
          function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }
          function _possibleConstructorReturn(t, i) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !i || ('object' != typeof i && 'function' != typeof i)
              ? t
              : i
          }
          var l = u(828),
            h = 'arraybuffer',
            _ = (function (t) {
              function ArrayBufferBackend() {
                return (
                  _classCallCheck(this, ArrayBufferBackend),
                  _possibleConstructorReturn(
                    this,
                    (
                      ArrayBufferBackend.__proto__ ||
                      Object.getPrototypeOf(ArrayBufferBackend)
                    ).apply(this, arguments)
                  )
                )
              }
              return (
                (function _inherits(t, i) {
                  if ('function' != typeof i && null !== i)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof i
                    )
                  ;(t.prototype = Object.create(i && i.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    i &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, i)
                        : (t.__proto__ = i))
                })(ArrayBufferBackend, t),
                d(ArrayBufferBackend, [
                  {
                    key: 'initXHR',
                    value: function initXHR() {
                      c(
                        ArrayBufferBackend.prototype.__proto__ ||
                          Object.getPrototypeOf(ArrayBufferBackend.prototype),
                        'initXHR',
                        this
                      ).call(this),
                        (this.xhr.responseType = h)
                    }
                  },
                  { key: 'onXHRProgress', value: function onXHRProgress() {} },
                  {
                    key: 'onXHRLoad',
                    value: function onXHRLoad() {
                      var t = this.xhr.response
                      ;(this.bytesRead += t.byteLength),
                        this.emit('buffer', t),
                        c(
                          ArrayBufferBackend.prototype.__proto__ ||
                            Object.getPrototypeOf(ArrayBufferBackend.prototype),
                          'onXHRLoad',
                          this
                        ).call(this)
                    }
                  }
                ]),
                ArrayBufferBackend
              )
            })(l)
          ;(_.supported = function () {
            try {
              var t = new XMLHttpRequest()
              return (t.responseType = h), t.responseType === h
            } catch (t) {
              return !1
            }
          }),
            (t.exports = _)
        },
        306: (t, i, u) => {
          'use strict'
          var d = (function () {
            function defineProperties(t, i) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u]
                ;(d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  'value' in d && (d.writable = !0),
                  Object.defineProperty(t, d.key, d)
              }
            }
            return function (t, i, u) {
              return (
                i && defineProperties(t.prototype, i),
                u && defineProperties(t, u),
                t
              )
            }
          })()
          function getXHRLength(t) {
            if (206 == t.status)
              return (function getXHRRangeTotal(t) {
                var i = getXHRRangeMatches(t)
                return i ? parseInt(i[3], 10) : -1
              })(t)
            var i = t.getResponseHeader('Content-Length')
            return null === i || '' === i ? -1 : parseInt(i, 10)
          }
          function getXHRRangeMatches(t) {
            var i = t.getResponseHeader('Content-Range')
            return i && i.match(/^bytes (\d+)-(\d+)\/(\d+)/)
          }
          var c = (function (t) {
            function Backend(t) {
              var i = t.url,
                u = t.offset,
                d = t.length,
                c = t.cachever,
                l = void 0 === c ? 0 : c
              !(function _classCallCheck(t, i) {
                if (!(t instanceof i))
                  throw new TypeError('Cannot call a class as a function')
              })(this, Backend)
              var h = (function _possibleConstructorReturn(t, i) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  )
                return !i || ('object' != typeof i && 'function' != typeof i)
                  ? t
                  : i
              })(
                this,
                (Backend.__proto__ || Object.getPrototypeOf(Backend)).call(this)
              )
              return (
                (h.url = i),
                (h.offset = u),
                (h.length = d),
                (h.cachever = l),
                (h.loaded = !1),
                (h.seekable = !1),
                (h.headers = {}),
                (h.eof = !1),
                (h.bytesRead = 0),
                (h.xhr = new XMLHttpRequest()),
                h
              )
            }
            return (
              (function _inherits(t, i) {
                if ('function' != typeof i && null !== i)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      typeof i
                  )
                ;(t.prototype = Object.create(i && i.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  i &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, i)
                      : (t.__proto__ = i))
              })(Backend, t),
              d(Backend, [
                {
                  key: 'load',
                  value: function load() {
                    var t = this
                    return new Promise(function (i, u) {
                      var d = null
                      t._onAbort = function (t) {
                        d(), u(t)
                      }
                      var c = function checkOpen() {
                          if (2 == t.xhr.readyState) {
                            if (206 == t.xhr.status) {
                              var c = (function getXHRRangeStart(t) {
                                var i = getXHRRangeMatches(t)
                                return i ? parseInt(i[1], 10) : 0
                              })(t.xhr)
                              if (t.offset != c)
                                return (
                                  console.log(
                                    'Expected start at ' +
                                      t.offset +
                                      ' but got ' +
                                      c +
                                      '; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672'
                                  ),
                                  t.cachever++,
                                  t.emit('cachever'),
                                  t.abort(),
                                  d(),
                                  void t.load().then(i).catch(u)
                                )
                              t.seekable = !0
                            }
                            t.xhr.status >= 200 && t.xhr.status < 300
                              ? ((t.length = getXHRLength(t.xhr)),
                                (t.headers = (function getXHRHeaders(t) {
                                  var i = {}
                                  return (
                                    t
                                      .getAllResponseHeaders()
                                      .split(/\r?\n/)
                                      .forEach(function (t) {
                                        var u = t.split(/:\s*/, 2)
                                        u.length > 1 &&
                                          (i[u[0].toLowerCase()] = u[1])
                                      }),
                                    i
                                  )
                                })(t.xhr)),
                                t.onXHRStart())
                              : (d(),
                                u(new Error('HTTP error ' + t.xhr.status)))
                          }
                        },
                        l = function checkError() {
                          d(), u(new Error('network error'))
                        },
                        h = function checkBackendOpen() {
                          d(), i()
                        }
                      ;(d = function oncomplete() {
                        t.xhr.removeEventListener('readystatechange', c),
                          t.xhr.removeEventListener('error', l),
                          t.off('open', h),
                          (t._onAbort = null)
                      }),
                        t.initXHR(),
                        t.xhr.addEventListener('readystatechange', c),
                        t.xhr.addEventListener('error', l),
                        t.on('open', h),
                        t.xhr.send()
                    })
                  }
                },
                {
                  key: 'bufferToOffset',
                  value: function bufferToOffset(t) {
                    return Promise.reject(new Error('abstract'))
                  }
                },
                {
                  key: 'abort',
                  value: function abort() {
                    if ((this.xhr.abort(), this._onAbort)) {
                      var t = this._onAbort
                      this._onAbort = null
                      var i = new Error('Aborted')
                      ;(i.name = 'AbortError'), t(i)
                    }
                  }
                },
                {
                  key: 'initXHR',
                  value: function initXHR() {
                    var t = this.url
                    this.cachever && (t += '?buggy_cachever=' + this.cachever),
                      this.xhr.open('GET', t)
                    var i = null
                    ;(this.offset || this.length) &&
                      (i = 'bytes=' + this.offset + '-'),
                      this.length && (i += this.offset + this.length - 1),
                      null !== i && this.xhr.setRequestHeader('Range', i)
                  }
                },
                {
                  key: 'onXHRStart',
                  value: function onXHRStart() {
                    throw new Error('abstract')
                  }
                }
              ]),
              Backend
            )
          })(u(566))
          t.exports = c
        },
        810: (t, i, u) => {
          'use strict'
          var d = (function () {
              function defineProperties(t, i) {
                for (var u = 0; u < i.length; u++) {
                  var d = i[u]
                  ;(d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    'value' in d && (d.writable = !0),
                    Object.defineProperty(t, d.key, d)
                }
              }
              return function (t, i, u) {
                return (
                  i && defineProperties(t.prototype, i),
                  u && defineProperties(t, u),
                  t
                )
              }
            })(),
            c = function get(t, i, u) {
              null === t && (t = Function.prototype)
              var d = Object.getOwnPropertyDescriptor(t, i)
              if (void 0 === d) {
                var c = Object.getPrototypeOf(t)
                return null === c ? void 0 : get(c, i, u)
              }
              if ('value' in d) return d.value
              var l = d.get
              return void 0 !== l ? l.call(u) : void 0
            }
          function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }
          function _possibleConstructorReturn(t, i) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !i || ('object' != typeof i && 'function' != typeof i)
              ? t
              : i
          }
          var l = (function (t) {
            function BinaryStringBackend() {
              return (
                _classCallCheck(this, BinaryStringBackend),
                _possibleConstructorReturn(
                  this,
                  (
                    BinaryStringBackend.__proto__ ||
                    Object.getPrototypeOf(BinaryStringBackend)
                  ).apply(this, arguments)
                )
              )
            }
            return (
              (function _inherits(t, i) {
                if ('function' != typeof i && null !== i)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      typeof i
                  )
                ;(t.prototype = Object.create(i && i.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  i &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, i)
                      : (t.__proto__ = i))
              })(BinaryStringBackend, t),
              d(BinaryStringBackend, [
                {
                  key: 'initXHR',
                  value: function initXHR() {
                    c(
                      BinaryStringBackend.prototype.__proto__ ||
                        Object.getPrototypeOf(BinaryStringBackend.prototype),
                      'initXHR',
                      this
                    ).call(this),
                      (this.xhr.responseType = 'text'),
                      this.xhr.overrideMimeType(
                        'text/plain; charset=x-user-defined'
                      )
                  }
                },
                {
                  key: 'onXHRProgress',
                  value: function onXHRProgress() {
                    var t = this.xhr.responseText.slice(this.bytesRead)
                    t.length > 0 &&
                      ((this.bytesRead += t.length), this.emit('buffer', t))
                  }
                },
                {
                  key: 'onXHRLoad',
                  value: function onXHRLoad() {
                    this.onXHRProgress(),
                      c(
                        BinaryStringBackend.prototype.__proto__ ||
                          Object.getPrototypeOf(BinaryStringBackend.prototype),
                        'onXHRLoad',
                        this
                      ).call(this)
                  }
                }
              ]),
              BinaryStringBackend
            )
          })(u(828))
          ;(l.supported = function () {
            try {
              return !!new XMLHttpRequest().overrideMimeType
            } catch (t) {
              return !1
            }
          }),
            (t.exports = l)
        },
        828: (t, i, u) => {
          'use strict'
          var d = (function () {
              function defineProperties(t, i) {
                for (var u = 0; u < i.length; u++) {
                  var d = i[u]
                  ;(d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    'value' in d && (d.writable = !0),
                    Object.defineProperty(t, d.key, d)
                }
              }
              return function (t, i, u) {
                return (
                  i && defineProperties(t.prototype, i),
                  u && defineProperties(t, u),
                  t
                )
              }
            })(),
            c = function get(t, i, u) {
              null === t && (t = Function.prototype)
              var d = Object.getOwnPropertyDescriptor(t, i)
              if (void 0 === d) {
                var c = Object.getPrototypeOf(t)
                return null === c ? void 0 : get(c, i, u)
              }
              if ('value' in d) return d.value
              var l = d.get
              return void 0 !== l ? l.call(u) : void 0
            }
          function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }
          function _possibleConstructorReturn(t, i) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !i || ('object' != typeof i && 'function' != typeof i)
              ? t
              : i
          }
          var l = (function (t) {
            function DownloadBackend() {
              return (
                _classCallCheck(this, DownloadBackend),
                _possibleConstructorReturn(
                  this,
                  (
                    DownloadBackend.__proto__ ||
                    Object.getPrototypeOf(DownloadBackend)
                  ).apply(this, arguments)
                )
              )
            }
            return (
              (function _inherits(t, i) {
                if ('function' != typeof i && null !== i)
                  throw new TypeError(
                    'Super expression must either be null or a function, not ' +
                      typeof i
                  )
                ;(t.prototype = Object.create(i && i.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                })),
                  i &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, i)
                      : (t.__proto__ = i))
              })(DownloadBackend, t),
              d(DownloadBackend, [
                {
                  key: 'bufferToOffset',
                  value: function bufferToOffset(t) {
                    var i = this
                    return new Promise(function (u, d) {
                      if (i.eof || i.offset >= t) u()
                      else {
                        var c = null
                        i._onAbort = function (t) {
                          c(), d(t)
                        }
                        var l = function checkBuffer() {
                            i.offset >= t && !i.eof && (c(), u())
                          },
                          h = function checkDone() {
                            c(), u()
                          },
                          _ = function checkError() {
                            c(), d(new Error('error streaming'))
                          }
                        ;(c = function oncomplete() {
                          ;(i.buffering = !1),
                            i.off('buffer', l),
                            i.off('done', h),
                            i.off('error', _),
                            (i._onAbort = null)
                        }),
                          (i.buffering = !0),
                          i.on('buffer', l),
                          i.on('done', h),
                          i.on('error', _)
                      }
                    })
                  }
                },
                {
                  key: 'initXHR',
                  value: function initXHR() {
                    c(
                      DownloadBackend.prototype.__proto__ ||
                        Object.getPrototypeOf(DownloadBackend.prototype),
                      'initXHR',
                      this
                    ).call(this)
                  }
                },
                {
                  key: 'onXHRStart',
                  value: function onXHRStart() {
                    var t = this
                    this.xhr.addEventListener('progress', function () {
                      return t.onXHRProgress()
                    }),
                      this.xhr.addEventListener('error', function () {
                        return t.onXHRError()
                      }),
                      this.xhr.addEventListener('load', function () {
                        return t.onXHRLoad()
                      }),
                      this.emit('open')
                  }
                },
                {
                  key: 'onXHRProgress',
                  value: function onXHRProgress() {
                    throw new Error('abstract')
                  }
                },
                {
                  key: 'onXHRError',
                  value: function onXHRError() {
                    this.emit('error')
                  }
                },
                {
                  key: 'onXHRLoad',
                  value: function onXHRLoad() {
                    ;(this.eof = !0), this.emit('done')
                  }
                }
              ]),
              DownloadBackend
            )
          })(u(306))
          t.exports = l
        },
        761: (t, i, u) => {
          'use strict'
          var d = u(855),
            c = u(810),
            l = u(431)
          var h = null
          t.exports = function instantiate(t) {
            if (!1 === t.progressive) return new l(t)
            if (
              (h ||
                (h = (function autoselect() {
                  return d.supported() ? d : c.supported() ? c : null
                })()),
              !h)
            )
              throw new Error('No supported backend class')
            return new h(t)
          }
        },
        855: (t, i, u) => {
          'use strict'
          var d = (function () {
              function defineProperties(t, i) {
                for (var u = 0; u < i.length; u++) {
                  var d = i[u]
                  ;(d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    'value' in d && (d.writable = !0),
                    Object.defineProperty(t, d.key, d)
                }
              }
              return function (t, i, u) {
                return (
                  i && defineProperties(t.prototype, i),
                  u && defineProperties(t, u),
                  t
                )
              }
            })(),
            c = function get(t, i, u) {
              null === t && (t = Function.prototype)
              var d = Object.getOwnPropertyDescriptor(t, i)
              if (void 0 === d) {
                var c = Object.getPrototypeOf(t)
                return null === c ? void 0 : get(c, i, u)
              }
              if ('value' in d) return d.value
              var l = d.get
              return void 0 !== l ? l.call(u) : void 0
            }
          function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }
          function _possibleConstructorReturn(t, i) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              )
            return !i || ('object' != typeof i && 'function' != typeof i)
              ? t
              : i
          }
          var l = u(828),
            h = 'moz-chunked-arraybuffer',
            _ = (function (t) {
              function MozChunkedBackend() {
                return (
                  _classCallCheck(this, MozChunkedBackend),
                  _possibleConstructorReturn(
                    this,
                    (
                      MozChunkedBackend.__proto__ ||
                      Object.getPrototypeOf(MozChunkedBackend)
                    ).apply(this, arguments)
                  )
                )
              }
              return (
                (function _inherits(t, i) {
                  if ('function' != typeof i && null !== i)
                    throw new TypeError(
                      'Super expression must either be null or a function, not ' +
                        typeof i
                    )
                  ;(t.prototype = Object.create(i && i.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })),
                    i &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, i)
                        : (t.__proto__ = i))
                })(MozChunkedBackend, t),
                d(MozChunkedBackend, [
                  {
                    key: 'initXHR',
                    value: function initXHR() {
                      c(
                        MozChunkedBackend.prototype.__proto__ ||
                          Object.getPrototypeOf(MozChunkedBackend.prototype),
                        'initXHR',
                        this
                      ).call(this),
                        (this.xhr.responseType = h)
                    }
                  },
                  {
                    key: 'onXHRProgress',
                    value: function onXHRProgress() {
                      var t = this.xhr.response
                      ;(this.bytesRead += t.byteLength), this.emit('buffer', t)
                    }
                  }
                ]),
                MozChunkedBackend
              )
            })(l)
          ;(_.supported = function () {
            try {
              var t = new XMLHttpRequest()
              return (t.responseType = h), t.responseType === h
            } catch (t) {
              return !1
            }
          }),
            (t.exports = _)
        },
        503: (t) => {
          'use strict'
          var i = (function () {
            function defineProperties(t, i) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u]
                ;(d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  'value' in d && (d.writable = !0),
                  Object.defineProperty(t, d.key, d)
              }
            }
            return function (t, i, u) {
              return (
                i && defineProperties(t.prototype, i),
                u && defineProperties(t, u),
                t
              )
            }
          })()
          function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }
          var u = (function () {
            function CacheItem() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = t.buffer,
                u = void 0 === i ? void 0 : i,
                d = t.string,
                c = void 0 === d ? void 0 : d,
                l = t.start,
                h = void 0 === l ? 0 : l,
                _ = t.end,
                p =
                  void 0 === _ ? h + (u ? u.byteLength : c ? c.length : 0) : _,
                m = t.prev,
                V = void 0 === m ? null : m,
                g = t.next,
                v = void 0 === g ? null : g,
                y = t.eof,
                b = void 0 !== y && y,
                T = t.empty,
                k = void 0 === T ? !(u || c) : T,
                A = t.timestamp,
                P = void 0 === A ? Date.now() : A
              _classCallCheck(this, CacheItem),
                (this.start = h),
                (this.end = p),
                (this.prev = V),
                (this.next = v),
                (this.eof = b),
                (this.empty = k),
                (this.timestamp = P),
                (this.buffer = u),
                (this.string = c),
                Object.defineProperty(this, 'length', {
                  get: function get() {
                    return this.end - this.start
                  }
                })
            }
            return (
              i(CacheItem, [
                {
                  key: 'contains',
                  value: function contains(t) {
                    return t >= this.start && (t < this.end || this.eof)
                  }
                },
                {
                  key: 'readBytes',
                  value: function readBytes(t, i, u) {
                    var d = i - this.start,
                      c = u - i
                    if (this.buffer) {
                      var l = new Uint8Array(this.buffer, d, c)
                      t.set(l)
                    } else {
                      if (!this.string) throw new Error('invalid state')
                      for (var h = this.string, _ = 0; _ < c; _++)
                        t[_] = h.charCodeAt(d + _)
                    }
                    this.timestamp = Date.now()
                  }
                },
                {
                  key: 'split',
                  value: function split(t) {
                    if (!this.empty || !this.contains(t))
                      throw new Error('invalid split')
                    var i = new CacheItem({ start: this.start, end: t }),
                      u = new CacheItem({
                        start: t,
                        end: this.eof ? t : this.end,
                        eof: this.eof
                      })
                    return (i.next = u), (u.prev = i), [i, u]
                  }
                },
                {
                  key: 'first',
                  value: function first(t) {
                    for (var i = this; i; i = i.next) if (t(i)) return i
                    return null
                  }
                },
                {
                  key: 'last',
                  value: function last(t) {
                    for (var last = null, i = this; i && t(i); i = i.next)
                      last = i
                    return last
                  }
                }
              ]),
              CacheItem
            )
          })()
          t.exports = u
        },
        91: (t, i, u) => {
          'use strict'
          var d = (function () {
            function defineProperties(t, i) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u]
                ;(d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  'value' in d && (d.writable = !0),
                  Object.defineProperty(t, d.key, d)
              }
            }
            return function (t, i, u) {
              return (
                i && defineProperties(t.prototype, i),
                u && defineProperties(t, u),
                t
              )
            }
          })()
          function _classCallCheck(t, i) {
            if (!(t instanceof i))
              throw new TypeError('Cannot call a class as a function')
          }
          var c = u(503),
            l = (function () {
              function CachePool() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = t.cacheSize,
                  u = void 0 === i ? 0 : i
                _classCallCheck(this, CachePool)
                var d = new c({ eof: !0 })
                ;(this.head = d),
                  (this.tail = d),
                  (this.readOffset = 0),
                  (this.readCursor = d),
                  (this.writeOffset = 0),
                  (this.writeCursor = d),
                  (this.cacheSize = u)
              }
              return (
                d(CachePool, [
                  {
                    key: 'bytesReadable',
                    value: function bytesReadable() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1 / 0,
                        i = this.readOffset,
                        u = this.readCursor,
                        d = u.last(function (u) {
                          return !u.empty && u.start <= i + t
                        })
                      return d ? Math.min(t, d.end - i) : 0
                    }
                  },
                  {
                    key: 'bytesWritable',
                    value: function bytesWritable() {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1 / 0,
                        i = this.writeOffset,
                        u = this.writeCursor
                      if (u.eof) return t
                      var d = u.last(function (u) {
                        return u.empty && u.start <= i + t
                      })
                      return d ? Math.min(t, d.end - i) : 0
                    }
                  },
                  {
                    key: 'seekRead',
                    value: function seekRead(t) {
                      var i = this.head.first(function (i) {
                        return i.contains(t)
                      })
                      if (!i) throw new Error('read seek out of range')
                      ;(this.readOffset = t), (this.readCursor = i)
                    }
                  },
                  {
                    key: 'seekWrite',
                    value: function seekWrite(t) {
                      var i = this.head.first(function (i) {
                        return i.contains(t)
                      })
                      if (!i) throw new Error('write seek out of range')
                      ;(this.writeOffset = t), (this.writeCursor = i)
                    }
                  },
                  {
                    key: 'readBytes',
                    value: function readBytes(t) {
                      for (
                        var i = t.byteLength,
                          u = this.bytesReadable(i),
                          d = this.readOffset,
                          c = d + u,
                          l = d,
                          h = this.readCursor;
                        h && !h.empty && !(h.start >= c);
                        h = h.next
                      ) {
                        var _ = Math.min(c, h.end),
                          p = t.subarray(l - d, _ - d)
                        h.readBytes(p, l, _), (l = _)
                      }
                      return (
                        (this.readOffset = l),
                        (this.readCursor = this.readCursor.first(function (t) {
                          return t.contains(l)
                        })),
                        u
                      )
                    }
                  },
                  {
                    key: 'write',
                    value: function write(t) {
                      var i = this.bufferItem(t),
                        u = this.writeCursor
                      if (!u.empty) throw new Error('write cursor not empty')
                      if (!u.contains(i.end) && u.end !== i.end)
                        throw new Error('write cursor too small')
                      u.start < i.start &&
                        (this.split(u, i.start), (u = this.writeCursor)),
                        (i.end < u.end || u.eof) &&
                          (this.split(u, i.end), (u = this.writeCursor)),
                        this.splice(u, u, i, i),
                        (this.writeOffset = i.end),
                        (this.writeCursor = i.next),
                        this.gc()
                    }
                  },
                  {
                    key: 'bufferItem',
                    value: function bufferItem(t) {
                      if (t instanceof ArrayBuffer)
                        return new c({
                          start: this.writeOffset,
                          end: this.writeOffset + t.byteLength,
                          buffer: t
                        })
                      if ('string' == typeof t)
                        return new c({
                          start: this.writeOffset,
                          end: this.writeOffset + t.length,
                          string: t
                        })
                      throw new Error('invalid input to write')
                    }
                  },
                  {
                    key: 'split',
                    value: function split(t, i) {
                      var u = t.split(i)
                      this.splice(t, t, u[0], u[1])
                    }
                  },
                  {
                    key: 'ranges',
                    value: function ranges() {
                      for (var ranges = [], t = this.head; t; t = t.next)
                        if (!t.empty) {
                          var i = t
                          ;(t = t.last(function (t) {
                            return !t.empty
                          })),
                            ranges.push([i.start, t.end])
                        }
                      return ranges
                    }
                  },
                  {
                    key: 'gc',
                    value: function gc() {
                      for (var t = 0, i = [], u = this.head; u; u = u.next)
                        u.empty ||
                          ((t += u.length),
                          (u.end < this.readOffset ||
                            u.start > this.readOffset + this.chunkSize) &&
                            i.push(u))
                      if (t > this.cacheSize) {
                        i.sort(function (t, i) {
                          return t.timestamp - i.timestamp
                        })
                        for (var d = 0; d < i.length; d++) {
                          var c = i[d]
                          if (t <= this.cacheSize) break
                          this.remove(c), (t -= c.length)
                        }
                      }
                    }
                  },
                  {
                    key: 'remove',
                    value: function remove(t) {
                      var i = new c({ start: t.start, end: t.end })
                      this.splice(t, t, i, i),
                        (t = i).prev &&
                          t.prev.empty &&
                          (t = this.consolidate(t.prev)),
                        t.next &&
                          t.next.empty &&
                          !t.next.eof &&
                          (t = this.consolidate(t)),
                        0 === t.start && (this.head = t)
                    }
                  },
                  {
                    key: 'consolidate',
                    value: function consolidate(t) {
                      var i = t.last(function (t) {
                          return t.empty && !t.eof
                        }),
                        u = new c({ start: t.start, end: i.end })
                      return this.splice(t, i, u, u), u
                    }
                  },
                  {
                    key: 'splice',
                    value: function splice(t, i, u, d) {
                      var c = this
                      if (t.start !== u.start)
                        throw new Error('invalid splice head')
                      if (!(i.end === d.end || (i.eof && d.eof)))
                        throw new Error('invalid splice tail')
                      var l = t.prev,
                        h = i.next
                      ;(t.prev = null),
                        (i.next = null),
                        l && ((l.next = u), (u.prev = l)),
                        h && ((h.prev = d), (d.next = h)),
                        t === this.head && (this.head = u),
                        i === this.tail && (this.tail = d),
                        (this.readCursor = this.head.first(function (t) {
                          return t.contains(c.readOffset)
                        })),
                        (this.writeCursor = this.head.first(function (t) {
                          return t.contains(c.writeOffset)
                        }))
                    }
                  },
                  {
                    key: 'eof',
                    get: function get() {
                      return this.readCursor.eof
                    }
                  }
                ]),
                CachePool
              )
            })()
          t.exports = l
        },
        814: (t, i, u) => {
          'use strict'
          t.exports = u(91)
        },
        566: (t) => {
          'use strict'
          var i = (function () {
            function defineProperties(t, i) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u]
                ;(d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  'value' in d && (d.writable = !0),
                  Object.defineProperty(t, d.key, d)
              }
            }
            return function (t, i, u) {
              return (
                i && defineProperties(t.prototype, i),
                u && defineProperties(t, u),
                t
              )
            }
          })()
          var u = (function () {
            function TinyEvents() {
              !(function _classCallCheck(t, i) {
                if (!(t instanceof i))
                  throw new TypeError('Cannot call a class as a function')
              })(this, TinyEvents),
                (this._e = {})
            }
            return (
              i(TinyEvents, [
                {
                  key: 'on',
                  value: function on(t, i) {
                    ;(this._e[t] || (this._e[t] = [])).push(i)
                  }
                },
                {
                  key: 'off',
                  value: function off(t, i) {
                    var u = this._e[t] || [],
                      d = u.indexOf(i)
                    i >= 0 && u.splice(d, 1)
                  }
                },
                {
                  key: 'emit',
                  value: function emit(t, i) {
                    ;(this._e[t] || []).slice().forEach(function (t) {
                      return t(i)
                    })
                  }
                }
              ]),
              TinyEvents
            )
          })()
          t.exports = u
        },
        936: (t, i, u) => {
          'use strict'
          var d = (function () {
            function defineProperties(t, i) {
              for (var u = 0; u < i.length; u++) {
                var d = i[u]
                ;(d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  'value' in d && (d.writable = !0),
                  Object.defineProperty(t, d.key, d)
              }
            }
            return function (t, i, u) {
              return (
                i && defineProperties(t.prototype, i),
                u && defineProperties(t, u),
                t
              )
            }
          })()
          u(566)
          var c = u(814),
            l = u(761),
            h = (function () {
              function StreamFile(t) {
                var i = t.url,
                  u = void 0 === i ? '' : i,
                  d = t.chunkSize,
                  l = void 0 === d ? 1048576 : d,
                  h = t.cacheSize,
                  _ = void 0 === h ? 0 : h,
                  p = t.progressive,
                  m = void 0 === p || p
                !(function _classCallCheck(t, i) {
                  if (!(t instanceof i))
                    throw new TypeError('Cannot call a class as a function')
                })(this, StreamFile),
                  (this.length = -1),
                  (this.loaded = !1),
                  (this.loading = !1),
                  (this.seekable = !1),
                  (this.buffering = !1),
                  (this.seeking = !1),
                  (this.progressive = m),
                  Object.defineProperties(this, {
                    offset: {
                      get: function get() {
                        return this._cache.readOffset
                      }
                    },
                    eof: {
                      get: function get() {
                        return this.length === this._cache.readOffset
                      }
                    }
                  }),
                  (this.url = u),
                  (this.headers = {}),
                  (this._cache = new c({ cacheSize: _ })),
                  (this._backend = null),
                  (this._cachever = 0),
                  (this._chunkSize = l)
              }
              return (
                d(StreamFile, [
                  {
                    key: 'load',
                    value: function load() {
                      var t = this
                      return new Promise(function (i, u) {
                        if (t.loading)
                          throw new Error('cannot load when loading')
                        if (t.loaded) throw new Error('cannot load when loaded')
                        ;(t.loading = !0),
                          t
                            ._openBackend()
                            .then(function (u) {
                              ;(t.seekable = u.seekable),
                                (t.headers = u.headers),
                                (t.length = u.length),
                                (t.loaded = !0),
                                (t.loading = !1),
                                i()
                            })
                            .catch(function (i) {
                              'AbortError' !== i.name && (t.loading = !1), u(i)
                            })
                      })
                    }
                  },
                  {
                    key: '_openBackend',
                    value: function _openBackend() {
                      var t = this
                      return new Promise(function (i, u) {
                        if (t._backend) i(t._backend)
                        else if (t.eof)
                          u(new Error('cannot open at end of file'))
                        else {
                          var d = t._cache,
                            c = t._chunkSize,
                            h = d.bytesReadable(c),
                            _ = d.readOffset + h
                          if ((d.seekWrite(_), t.length >= 0 && _ >= t.length))
                            return void i(null)
                          var p =
                            t._clampToLength(
                              d.writeOffset + d.bytesWritable(c)
                            ) - d.writeOffset
                          if (0 === p) i(null)
                          else {
                            var m = (t._backend = new l({
                                url: t.url,
                                offset: t._cache.writeOffset,
                                length: p,
                                cachever: t._cachever,
                                progressive: t.progressive
                              })),
                              V = null,
                              g = function checkOpen() {
                                m !== t._backend
                                  ? (V(), u(new Error('invalid state')))
                                  : (m.on('buffer', function (i) {
                                      m === t._backend && t._cache.write(i)
                                    }),
                                    m.on('done', function () {
                                      m === t._backend &&
                                        (-1 === t.length &&
                                          (t.length =
                                            t._backend.offset +
                                            t._backend.bytesRead),
                                        (t._backend = null))
                                    }),
                                    i(m))
                              },
                              v = function checkError(i) {
                                m !== t._backend
                                  ? u(new Error('invalid state'))
                                  : ((t._backend = null), u(i))
                              }
                            ;(V = function oncomplete() {
                              m.off('open', g), m.off('error', v)
                            }),
                              m.on('open', g),
                              m.on('error', v),
                              m.on('cachever', function () {
                                t._cachever++
                              }),
                              m.load()
                          }
                        }
                      })
                    }
                  },
                  {
                    key: '_readAhead',
                    value: function _readAhead() {
                      var t = this
                      return new Promise(function (i, u) {
                        t._backend || t.eof
                          ? i()
                          : t
                              ._openBackend()
                              .then(function () {
                                i()
                              })
                              .catch(function (t) {
                                u(t)
                              })
                      })
                    }
                  },
                  {
                    key: 'seek',
                    value: function seek(t) {
                      var i = this
                      return new Promise(function (u, d) {
                        if (!i.loaded || i.buffering || i.seeking)
                          throw new Error('invalid state')
                        if (t !== (0 | t) || t < 0)
                          throw new Error('invalid input')
                        if (i.length >= 0 && t > i.length)
                          throw new Error('seek past end of file')
                        if (!i.seekable)
                          throw new Error('seek on non-seekable stream')
                        i._backend && i.abort(),
                          i._cache.seekRead(t),
                          i._cache.seekWrite(t),
                          i._readAhead().then(u).catch(d)
                      })
                    }
                  },
                  {
                    key: 'read',
                    value: function read(t) {
                      var i = this
                      return this.buffer(t).then(function (t) {
                        return i.readSync(t)
                      })
                    }
                  },
                  {
                    key: 'readSync',
                    value: function readSync(t) {
                      var i = this.bytesAvailable(t),
                        u = new Uint8Array(i)
                      if (this.readBytes(u) !== i)
                        throw new Error('failed to read expected data')
                      return u.buffer
                    }
                  },
                  {
                    key: 'readBytes',
                    value: function readBytes(t) {
                      if (!this.loaded || this.buffering || this.seeking)
                        throw new Error('invalid state')
                      if (!(t instanceof Uint8Array))
                        throw new Error('invalid input')
                      var i = this._cache.readBytes(t)
                      return this._readAhead(), i
                    }
                  },
                  {
                    key: 'buffer',
                    value: function buffer(t) {
                      var i = this
                      return new Promise(function (u, d) {
                        if (!i.loaded || i.buffering || i.seeking)
                          throw new Error('invalid state')
                        if (t !== (0 | t) || t < 0)
                          throw new Error('invalid input')
                        var c = i._clampToLength(i.offset + t),
                          l = c - i.offset,
                          h = i.bytesAvailable(l)
                        h >= l
                          ? u(h)
                          : ((i.buffering = !0),
                            i
                              ._openBackend()
                              .then(function (u) {
                                return u
                                  ? u.bufferToOffset(c).then(function () {
                                      return (i.buffering = !1), i.buffer(t)
                                    })
                                  : Promise.resolve(h)
                              })
                              .then(function (t) {
                                ;(i.buffering = !1), u(t)
                              })
                              .catch(function (t) {
                                'AbortError' !== t.name && (i.buffering = !1),
                                  d(t)
                              }))
                      })
                    }
                  },
                  {
                    key: 'bytesAvailable',
                    value: function bytesAvailable() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1 / 0
                      return this._cache.bytesReadable(t)
                    }
                  },
                  {
                    key: 'abort',
                    value: function abort() {
                      this.loading && (this.loading = !1),
                        this.buffering && (this.buffering = !1),
                        this.seeking && (this.seeking = !1),
                        this._backend &&
                          (this._backend.abort(), (this._backend = null))
                    }
                  },
                  {
                    key: 'getBufferedRanges',
                    value: function getBufferedRanges() {
                      return this._cache.ranges()
                    }
                  },
                  {
                    key: '_clampToLength',
                    value: function _clampToLength(t) {
                      return this.length < 0 ? t : Math.min(this.length, t)
                    }
                  }
                ]),
                StreamFile
              )
            })()
          t.exports = h
        },
        302: (t, i, u) => {
          'use strict'
          u.r(i), u.d(i, { default: () => d })
          const d =
            'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='
        },
        826: (t) => {
          t.exports = {
            vertex:
              'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n',
            fragment:
              '// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n',
            vertexStripe:
              'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n',
            fragmentStripe:
              "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n"
          }
        },
        487: (t) => {
          !(function () {
            'use strict'
            function FrameSink(t, i) {
              throw new Error('abstract')
            }
            ;(FrameSink.prototype.drawFrame = function (t) {
              throw new Error('abstract')
            }),
              (FrameSink.prototype.clear = function () {
                throw new Error('abstract')
              }),
              (t.exports = FrameSink)
          })()
        },
        926: (t, i, u) => {
          !(function () {
            'use strict'
            var i = u(487),
              d = u(627)
            function SoftwareFrameSink(t) {
              var i = this,
                u = t.getContext('2d'),
                c = null,
                l = null,
                h = null
              return (
                (i.drawFrame = function drawFrame(i) {
                  var _ = i.format
                  ;(t.width === _.displayWidth &&
                    t.height === _.displayHeight) ||
                    ((t.width = _.displayWidth), (t.height = _.displayHeight)),
                    (null !== c &&
                      c.width == _.width &&
                      c.height == _.height) ||
                      (function initImageData(t, i) {
                        for (
                          var d = (c = u.createImageData(t, i)).data,
                            l = t * i * 4,
                            h = 0;
                          h < l;
                          h += 4
                        )
                          d[h + 3] = 255
                      })(_.width, _.height),
                    d.convertYCbCr(i, c.data)
                  var p,
                    m =
                      _.cropWidth != _.displayWidth ||
                      _.cropHeight != _.displayHeight
                  m
                    ? (l ||
                        (function initResampleCanvas(t, i) {
                          ;((l = document.createElement('canvas')).width = t),
                            (l.height = i),
                            (h = l.getContext('2d'))
                        })(_.cropWidth, _.cropHeight),
                      (p = h))
                    : (p = u),
                    p.putImageData(
                      c,
                      -_.cropLeft,
                      -_.cropTop,
                      _.cropLeft,
                      _.cropTop,
                      _.cropWidth,
                      _.cropHeight
                    ),
                    m && u.drawImage(l, 0, 0, _.displayWidth, _.displayHeight)
                }),
                (i.clear = function () {
                  u.clearRect(0, 0, t.width, t.height)
                }),
                i
              )
            }
            ;(SoftwareFrameSink.prototype = Object.create(i.prototype)),
              (t.exports = SoftwareFrameSink)
          })()
        },
        895: (t, i, u) => {
          !(function () {
            'use strict'
            var i = u(487),
              d = u(826)
            function WebGLFrameSink(t) {
              var i,
                u,
                c = this,
                l = WebGLFrameSink.contextForCanvas(t)
              if (null === l) throw new Error('WebGL unavailable')
              function compileShader(t, i) {
                var u = l.createShader(t)
                if (
                  (l.shaderSource(u, i),
                  l.compileShader(u),
                  !l.getShaderParameter(u, l.COMPILE_STATUS))
                ) {
                  var d = l.getShaderInfoLog(u)
                  throw (
                    (l.deleteShader(u),
                    new Error(
                      'GL shader compilation for ' + t + ' failed: ' + d
                    ))
                  )
                }
                return u
              }
              var h,
                _,
                p,
                m,
                V,
                g,
                v,
                y,
                b,
                T,
                k = new Float32Array([
                  -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1
                ]),
                A = {},
                P = {},
                w = {}
              function createOrReuseTexture(t, i) {
                return (A[t] && !i) || (A[t] = l.createTexture()), A[t]
              }
              function uploadTexture(t, i, u, d, c) {
                var h = !A[t] || i,
                  _ = createOrReuseTexture(t, i)
                if ((l.activeTexture(l.TEXTURE0), WebGLFrameSink.stripe)) {
                  var p = !A[t + '_temp'] || i,
                    m = createOrReuseTexture(t + '_temp', i)
                  l.bindTexture(l.TEXTURE_2D, m),
                    p
                      ? (l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_S,
                          l.CLAMP_TO_EDGE
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_T,
                          l.CLAMP_TO_EDGE
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MIN_FILTER,
                          l.NEAREST
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MAG_FILTER,
                          l.NEAREST
                        ),
                        l.texImage2D(
                          l.TEXTURE_2D,
                          0,
                          l.RGBA,
                          u / 4,
                          d,
                          0,
                          l.RGBA,
                          l.UNSIGNED_BYTE,
                          c
                        ))
                      : l.texSubImage2D(
                          l.TEXTURE_2D,
                          0,
                          0,
                          0,
                          u / 4,
                          d,
                          l.RGBA,
                          l.UNSIGNED_BYTE,
                          c
                        )
                  var V = A[t + '_stripe'],
                    g = !V || i
                  g && (V = createOrReuseTexture(t + '_stripe', i)),
                    l.bindTexture(l.TEXTURE_2D, V),
                    g &&
                      (l.texParameteri(
                        l.TEXTURE_2D,
                        l.TEXTURE_WRAP_S,
                        l.CLAMP_TO_EDGE
                      ),
                      l.texParameteri(
                        l.TEXTURE_2D,
                        l.TEXTURE_WRAP_T,
                        l.CLAMP_TO_EDGE
                      ),
                      l.texParameteri(
                        l.TEXTURE_2D,
                        l.TEXTURE_MIN_FILTER,
                        l.NEAREST
                      ),
                      l.texParameteri(
                        l.TEXTURE_2D,
                        l.TEXTURE_MAG_FILTER,
                        l.NEAREST
                      ),
                      l.texImage2D(
                        l.TEXTURE_2D,
                        0,
                        l.RGBA,
                        u,
                        1,
                        0,
                        l.RGBA,
                        l.UNSIGNED_BYTE,
                        (function buildStripe(t) {
                          if (w[t]) return w[t]
                          for (
                            var i = t, u = new Uint32Array(i), d = 0;
                            d < i;
                            d += 4
                          )
                            (u[d] = 255),
                              (u[d + 1] = 65280),
                              (u[d + 2] = 16711680),
                              (u[d + 3] = 4278190080)
                          return (w[t] = new Uint8Array(u.buffer))
                        })(u)
                      ))
                } else
                  l.bindTexture(l.TEXTURE_2D, _),
                    h
                      ? (l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_S,
                          l.CLAMP_TO_EDGE
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_WRAP_T,
                          l.CLAMP_TO_EDGE
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MIN_FILTER,
                          l.LINEAR
                        ),
                        l.texParameteri(
                          l.TEXTURE_2D,
                          l.TEXTURE_MAG_FILTER,
                          l.LINEAR
                        ),
                        l.texImage2D(
                          l.TEXTURE_2D,
                          0,
                          l.ALPHA,
                          u,
                          d,
                          0,
                          l.ALPHA,
                          l.UNSIGNED_BYTE,
                          c
                        ))
                      : l.texSubImage2D(
                          l.TEXTURE_2D,
                          0,
                          0,
                          0,
                          u,
                          d,
                          l.ALPHA,
                          l.UNSIGNED_BYTE,
                          c
                        )
              }
              function unpackTexture(t, i, d, c) {
                var v = A[t]
                l.useProgram(u)
                var y = P[t]
                ;(y && !i) ||
                  (l.activeTexture(l.TEXTURE0),
                  l.bindTexture(l.TEXTURE_2D, v),
                  l.texParameteri(
                    l.TEXTURE_2D,
                    l.TEXTURE_WRAP_S,
                    l.CLAMP_TO_EDGE
                  ),
                  l.texParameteri(
                    l.TEXTURE_2D,
                    l.TEXTURE_WRAP_T,
                    l.CLAMP_TO_EDGE
                  ),
                  l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR),
                  l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR),
                  l.texImage2D(
                    l.TEXTURE_2D,
                    0,
                    l.RGBA,
                    d,
                    c,
                    0,
                    l.RGBA,
                    l.UNSIGNED_BYTE,
                    null
                  ),
                  (y = P[t] = l.createFramebuffer())),
                  l.bindFramebuffer(l.FRAMEBUFFER, y),
                  l.framebufferTexture2D(
                    l.FRAMEBUFFER,
                    l.COLOR_ATTACHMENT0,
                    l.TEXTURE_2D,
                    v,
                    0
                  )
                var b = A[t + '_temp']
                l.activeTexture(l.TEXTURE1),
                  l.bindTexture(l.TEXTURE_2D, b),
                  l.uniform1i(g, 1)
                var T = A[t + '_stripe']
                l.activeTexture(l.TEXTURE2),
                  l.bindTexture(l.TEXTURE_2D, T),
                  l.uniform1i(V, 2),
                  l.bindBuffer(l.ARRAY_BUFFER, h),
                  l.enableVertexAttribArray(_),
                  l.vertexAttribPointer(_, 2, l.FLOAT, !1, 0, 0),
                  l.bindBuffer(l.ARRAY_BUFFER, p),
                  l.enableVertexAttribArray(m),
                  l.vertexAttribPointer(m, 2, l.FLOAT, !1, 0, 0),
                  l.viewport(0, 0, d, c),
                  l.drawArrays(l.TRIANGLES, 0, k.length / 2),
                  l.bindFramebuffer(l.FRAMEBUFFER, null)
              }
              function attachTexture(t, u, d) {
                l.activeTexture(u),
                  l.bindTexture(l.TEXTURE_2D, A[t]),
                  l.texParameteri(
                    l.TEXTURE_2D,
                    l.TEXTURE_WRAP_S,
                    l.CLAMP_TO_EDGE
                  ),
                  l.texParameteri(
                    l.TEXTURE_2D,
                    l.TEXTURE_WRAP_T,
                    l.CLAMP_TO_EDGE
                  ),
                  l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.LINEAR),
                  l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.LINEAR),
                  l.uniform1i(l.getUniformLocation(i, t), d)
              }
              function initProgram(t, i) {
                var u = compileShader(l.VERTEX_SHADER, t),
                  d = compileShader(l.FRAGMENT_SHADER, i),
                  c = l.createProgram()
                if (
                  (l.attachShader(c, u),
                  l.attachShader(c, d),
                  l.linkProgram(c),
                  !l.getProgramParameter(c, l.LINK_STATUS))
                ) {
                  var h = l.getProgramInfoLog(c)
                  throw (
                    (l.deleteProgram(c),
                    new Error('GL program linking failed: ' + h))
                  )
                }
                return c
              }
              return (
                (c.drawFrame = function (A) {
                  var P = A.format,
                    w =
                      !i ||
                      t.width !== P.displayWidth ||
                      t.height !== P.displayHeight
                  if (
                    (w &&
                      ((t.width = P.displayWidth),
                      (t.height = P.displayHeight),
                      c.clear()),
                    i ||
                      (function init() {
                        if (WebGLFrameSink.stripe) {
                          ;(u = initProgram(d.vertexStripe, d.fragmentStripe)),
                            l.getAttribLocation(u, 'aPosition'),
                            (p = l.createBuffer())
                          var t = new Float32Array([
                            0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1
                          ])
                          l.bindBuffer(l.ARRAY_BUFFER, p),
                            l.bufferData(l.ARRAY_BUFFER, t, l.STATIC_DRAW),
                            (m = l.getAttribLocation(u, 'aTexturePosition')),
                            (V = l.getUniformLocation(u, 'uStripe')),
                            (g = l.getUniformLocation(u, 'uTexture'))
                        }
                        ;(i = initProgram(d.vertex, d.fragment)),
                          (h = l.createBuffer()),
                          l.bindBuffer(l.ARRAY_BUFFER, h),
                          l.bufferData(l.ARRAY_BUFFER, k, l.STATIC_DRAW),
                          (_ = l.getAttribLocation(i, 'aPosition')),
                          (v = l.createBuffer()),
                          (y = l.getAttribLocation(i, 'aLumaPosition')),
                          (b = l.createBuffer()),
                          (T = l.getAttribLocation(i, 'aChromaPosition'))
                      })(),
                    w)
                  ) {
                    var setupTexturePosition = function (t, i, u) {
                      var d = P.cropLeft / u,
                        c = (P.cropLeft + P.cropWidth) / u,
                        h = (P.cropTop + P.cropHeight) / P.height,
                        _ = P.cropTop / P.height,
                        p = new Float32Array([
                          d,
                          h,
                          c,
                          h,
                          d,
                          _,
                          d,
                          _,
                          c,
                          h,
                          c,
                          _
                        ])
                      l.bindBuffer(l.ARRAY_BUFFER, t),
                        l.bufferData(l.ARRAY_BUFFER, p, l.STATIC_DRAW)
                    }
                    setupTexturePosition(v, 0, A.y.stride),
                      setupTexturePosition(
                        b,
                        0,
                        (A.u.stride * P.width) / P.chromaWidth
                      )
                  }
                  uploadTexture(
                    'uTextureY',
                    w,
                    A.y.stride,
                    P.height,
                    A.y.bytes
                  ),
                    uploadTexture(
                      'uTextureCb',
                      w,
                      A.u.stride,
                      P.chromaHeight,
                      A.u.bytes
                    ),
                    uploadTexture(
                      'uTextureCr',
                      w,
                      A.v.stride,
                      P.chromaHeight,
                      A.v.bytes
                    ),
                    WebGLFrameSink.stripe &&
                      (unpackTexture('uTextureY', w, A.y.stride, P.height),
                      unpackTexture(
                        'uTextureCb',
                        w,
                        A.u.stride,
                        P.chromaHeight
                      ),
                      unpackTexture(
                        'uTextureCr',
                        w,
                        A.v.stride,
                        P.chromaHeight
                      )),
                    l.useProgram(i),
                    l.viewport(0, 0, t.width, t.height),
                    attachTexture('uTextureY', l.TEXTURE0, 0),
                    attachTexture('uTextureCb', l.TEXTURE1, 1),
                    attachTexture('uTextureCr', l.TEXTURE2, 2),
                    l.bindBuffer(l.ARRAY_BUFFER, h),
                    l.enableVertexAttribArray(_),
                    l.vertexAttribPointer(_, 2, l.FLOAT, !1, 0, 0),
                    l.bindBuffer(l.ARRAY_BUFFER, v),
                    l.enableVertexAttribArray(y),
                    l.vertexAttribPointer(y, 2, l.FLOAT, !1, 0, 0),
                    l.bindBuffer(l.ARRAY_BUFFER, b),
                    l.enableVertexAttribArray(T),
                    l.vertexAttribPointer(T, 2, l.FLOAT, !1, 0, 0),
                    l.drawArrays(l.TRIANGLES, 0, k.length / 2)
                }),
                (c.clear = function () {
                  l.viewport(0, 0, t.width, t.height),
                    l.clearColor(0, 0, 0, 0),
                    l.clear(l.COLOR_BUFFER_BIT)
                }),
                c.clear(),
                c
              )
            }
            ;(WebGLFrameSink.stripe = !1),
              (WebGLFrameSink.contextForCanvas = function (t) {
                var i = {
                  preferLowPowerToHighPerformance: !0,
                  powerPreference: 'low-power',
                  failIfMajorPerformanceCaveat: !0,
                  preserveDrawingBuffer: !0
                }
                return (
                  t.getContext('webgl', i) ||
                  t.getContext('experimental-webgl', i)
                )
              }),
              (WebGLFrameSink.isAvailable = function () {
                var t,
                  i = document.createElement('canvas')
                ;(i.width = 1), (i.height = 1)
                try {
                  t = WebGLFrameSink.contextForCanvas(i)
                } catch (t) {
                  return !1
                }
                if (t) {
                  var u = t.TEXTURE0,
                    d = t.createTexture(),
                    c = new Uint8Array(16),
                    l = WebGLFrameSink.stripe ? 1 : 4,
                    h = WebGLFrameSink.stripe ? t.RGBA : t.ALPHA,
                    _ = WebGLFrameSink.stripe ? t.NEAREST : t.LINEAR
                  return (
                    t.activeTexture(u),
                    t.bindTexture(t.TEXTURE_2D, d),
                    t.texParameteri(
                      t.TEXTURE_2D,
                      t.TEXTURE_WRAP_S,
                      t.CLAMP_TO_EDGE
                    ),
                    t.texParameteri(
                      t.TEXTURE_2D,
                      t.TEXTURE_WRAP_T,
                      t.CLAMP_TO_EDGE
                    ),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, _),
                    t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, _),
                    t.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      h,
                      l,
                      4,
                      0,
                      h,
                      t.UNSIGNED_BYTE,
                      c
                    ),
                    !t.getError()
                  )
                }
                return !1
              }),
              (WebGLFrameSink.prototype = Object.create(i.prototype)),
              (t.exports = WebGLFrameSink)
          })()
        },
        627: (t, i, u) => {
          !(function () {
            'use strict'
            var i = u(877)
            t.exports = {
              convertYCbCr: function convertYCbCr(t, u) {
                var d = 0 | t.format.width,
                  c = 0 | t.format.height,
                  l = 0 | i(t.format.width / t.format.chromaWidth),
                  h = 0 | i(t.format.height / t.format.chromaHeight),
                  _ = t.y.bytes,
                  p = t.u.bytes,
                  m = t.v.bytes,
                  V = 0 | t.y.stride,
                  g = 0 | t.u.stride,
                  v = 0 | t.v.stride,
                  y = d << 2,
                  b = 0,
                  T = 0,
                  k = 0,
                  A = 0,
                  P = 0,
                  w = 0,
                  E = 0,
                  x = 0,
                  R = 0,
                  O = 0,
                  S = 0,
                  C = 0,
                  B = 0,
                  D = 0,
                  M = 0,
                  I = 0,
                  L = 0,
                  j = 0
                if (1 == l && 1 == h)
                  for (E = 0, x = y, j = 0, I = 0; I < c; I += 2) {
                    for (
                      k = ((T = (I * V) | 0) + V) | 0,
                        A = (j * g) | 0,
                        P = (j * v) | 0,
                        M = 0;
                      M < d;
                      M += 2
                    )
                      (R = 0 | p[A++]),
                        (C = (((409 * (O = 0 | m[P++])) | 0) - 57088) | 0),
                        (B = (((100 * R) | 0) + ((208 * O) | 0) - 34816) | 0),
                        (D = (((516 * R) | 0) - 70912) | 0),
                        (S = (298 * _[T++]) | 0),
                        (u[E] = (S + C) >> 8),
                        (u[E + 1] = (S - B) >> 8),
                        (u[E + 2] = (S + D) >> 8),
                        (E += 4),
                        (S = (298 * _[T++]) | 0),
                        (u[E] = (S + C) >> 8),
                        (u[E + 1] = (S - B) >> 8),
                        (u[E + 2] = (S + D) >> 8),
                        (E += 4),
                        (S = (298 * _[k++]) | 0),
                        (u[x] = (S + C) >> 8),
                        (u[x + 1] = (S - B) >> 8),
                        (u[x + 2] = (S + D) >> 8),
                        (x += 4),
                        (S = (298 * _[k++]) | 0),
                        (u[x] = (S + C) >> 8),
                        (u[x + 1] = (S - B) >> 8),
                        (u[x + 2] = (S + D) >> 8),
                        (x += 4)
                    ;(E += y), (x += y), j++
                  }
                else
                  for (w = 0, I = 0; I < c; I++)
                    for (
                      L = 0,
                        b = (I * V) | 0,
                        A = ((j = I >> h) * g) | 0,
                        P = (j * v) | 0,
                        M = 0;
                      M < d;
                      M++
                    )
                      (R = 0 | p[A + (L = M >> l)]),
                        (C = (((409 * (O = 0 | m[P + L])) | 0) - 57088) | 0),
                        (B = (((100 * R) | 0) + ((208 * O) | 0) - 34816) | 0),
                        (D = (((516 * R) | 0) - 70912) | 0),
                        (S = (298 * _[b++]) | 0),
                        (u[w] = (S + C) >> 8),
                        (u[w + 1] = (S - B) >> 8),
                        (u[w + 2] = (S + D) >> 8),
                        (w += 4)
              }
            }
          })()
        },
        877: (t) => {
          !(function () {
            'use strict'
            t.exports = function depower(t) {
              for (var i = 0, u = t >> 1; 0 != u; ) (u >>= 1), i++
              if (t !== 1 << i)
                throw (
                  'chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got ' +
                  t
                )
              return i
            }
          })()
        },
        731: (t, i, u) => {
          !(function () {
            'use strict'
            var i = u(487),
              d = u(926),
              c = u(895),
              l = {
                FrameSink: i,
                SoftwareFrameSink: d,
                WebGLFrameSink: c,
                attach: function (t, i) {
                  return ('webGL' in (i = i || {}) ? i.webGL : c.isAvailable())
                    ? new c(t, i)
                    : new d(t, i)
                }
              }
            t.exports = l
          })()
        }
      },
      i = {}
    function __webpack_require__(u) {
      var d = i[u]
      if (void 0 !== d) return d.exports
      var c = (i[u] = { exports: {} })
      return t[u](c, c.exports, __webpack_require__), c.exports
    }
    ;(__webpack_require__.d = (t, i) => {
      for (var u in i)
        __webpack_require__.o(i, u) &&
          !__webpack_require__.o(t, u) &&
          Object.defineProperty(t, u, { enumerable: !0, get: i[u] })
    }),
      (__webpack_require__.o = (t, i) =>
        Object.prototype.hasOwnProperty.call(t, i)),
      (__webpack_require__.r = (t) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      })
    var u = {}
    return (
      (() => {
        'use strict'
        var t = u,
          i = __webpack_require__(318)
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'OGVCompat', {
            enumerable: !0,
            get: function get() {
              return c.default
            }
          }),
          Object.defineProperty(t, 'OGVLoader', {
            enumerable: !0,
            get: function get() {
              return l.default
            }
          }),
          Object.defineProperty(t, 'OGVMediaError', {
            enumerable: !0,
            get: function get() {
              return h.default
            }
          }),
          Object.defineProperty(t, 'OGVMediaType', {
            enumerable: !0,
            get: function get() {
              return _.default
            }
          }),
          Object.defineProperty(t, 'OGVPlayer', {
            enumerable: !0,
            get: function get() {
              return p.default
            }
          }),
          Object.defineProperty(t, 'OGVTimeRanges', {
            enumerable: !0,
            get: function get() {
              return m.default
            }
          }),
          (t.OGVVersion = void 0)
        var d = i(__webpack_require__(8)),
          c = i(__webpack_require__(523)),
          l = i(__webpack_require__(964)),
          h = i(__webpack_require__(759)),
          _ = i(__webpack_require__(278)),
          p = i(__webpack_require__(869)),
          m = i(__webpack_require__(168)),
          V = '1.8.9-20220406232920-cb5f7ff'
        ;(t.OGVVersion = V),
          'object' ===
            ('undefined' == typeof window
              ? 'undefined'
              : (0, d.default)(window)) &&
            ((window.OGVCompat = c.default),
            (window.OGVLoader = l.default),
            (window.OGVMediaError = h.default),
            (window.OGVMediaType = _.default),
            (window.OGVTimeRanges = m.default),
            (window.OGVPlayer = p.default),
            (window.OGVVersion = V))
      })(),
      u
    )
  })()
})
