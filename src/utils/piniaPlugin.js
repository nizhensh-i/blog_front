import { toRaw } from 'vue'
import {
  getLocalStorage,
  getSessionStorage,
  setLocalStorage,
  setSessionStorage
} from './storage'


const getStorageTypeMap = {
  sessionStorage: getSessionStorage,
  localStorage: getLocalStorage
}

const setStorageTypeMap = {
  sessionStorage: setSessionStorage,
  localStorage: setLocalStorage
}

const plugin = (options) => {
    const { key, storeList } = options;
  
    return (context) => {
      const { store } = context;
  
      // 遍历 storeList，找到匹配的配置项
      const matchedConfig = storeList.find((item) => item.storeName.includes(store.$id));
      if (!matchedConfig) return;
  
      const { storageType, path } = matchedConfig;
  
      // 从存储中获取数据并初始化 store
      const storedData = getStorageTypeMap[storageType](`${key ?? 'pinia'}-${store.$id}`);
      if (storedData) {
        if (path && path.length > 0) {
          // 仅初始化指定的 path 属性
          const partialState = {};
          path.forEach((p) => {
            if (storedData[p] !== undefined) {
              partialState[p] = storedData[p];
            }
          });
          store.$patch(partialState);
        } else {
          // 如果没有指定 path，则初始化整个 state
          store.$patch(storedData);
        }
      }
  
      // 监听 store 的变化并持久化
      store.$subscribe(() => {
        let dataToPersist;
        if (path && path.length > 0) {
          // 仅持久化指定的 path 属性
          dataToPersist = {};
          path.forEach((p) => {
            if (store.$state[p] !== undefined) {
              dataToPersist[p] = store.$state[p];
            }
          });
        } else {
          // 如果没有指定 path，则持久化整个 state
          dataToPersist = store.$state;
        }
  
        setStorageTypeMap[storageType](`${key ?? 'pinia'}-${store.$id}`, toRaw(dataToPersist));
      });
    };
  };
  

export default plugin