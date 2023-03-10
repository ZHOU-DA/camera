import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import './style.css'
import VConsole from 'vconsole'

const vConsole = new VConsole()
const app = createApp(App)

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: 'http://localhost:3000',
  // baseURL: 'http://192.168.48.72:8099/',
  withCredentials: true,
  timeout: 10 * 60 * 1000 // 请求超时时间
})

app.config.globalProperties.$axios = request

app.mount('#app')
