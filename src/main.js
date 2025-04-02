import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'
import piniaPlugin from '@/utils/piniaPlugin'
import dayjs from './config/dayjsCfg'

import 'element-plus/theme-chalk/dark/css-vars.css'

import { ElMessage } from 'element-plus'

import '@wangeditor/editor/dist/css/style.css'

// 全局loading
import { loadingFadeOut } from 'virtual:app-loading'
loadingFadeOut()

import vue3PhotoPreview from 'vue3-photo-preview'
import 'vue3-photo-preview/dist/index.css'

import { useElementPlus } from '@/plugins/elementPlus'
import 'element-plus/dist/index.css'

import { useVant } from '@/plugins/vant'
import 'vant/lib/index.css'
import vSlideIn from '@/directives/vSlideIn.js'

import { UIcon } from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)
app.directive('slide-in',vSlideIn)

const pinia = createPinia()
// pinia.use(piniaPersist)
pinia.use(
    piniaPlugin({
      key: 'morePersist', // 这是给缓存到本地时，加一个特殊的前缀，以免造成污染到其他缓存数据
      storeList: [
        {
          storeName: ['main'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
          storageType: 'localStorage',
          path: ['test'] // 需要持久化的属性
        },
        {
          storeName: ['test'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
          storageType: 'localStorage',
          path: ['age'] 
        },
        {
          storeName: ['test1'], // 对于特定store进行持久化，空或者不传，则对所有的store进行缓存到本地
          storageType: 'localStorage'
        }
      ]
    })
  )

app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$message = ElMessage
app.use(useElementPlus)
app.use(useVant)
app.use(router)
app.use(pinia)
app.use(vue3PhotoPreview)
app.component('u-icon', UIcon)
app.mount('#app')
