import Vue from 'vue';
import Axios from 'axios';
// import qs from 'qs';
import store from '@/store';


const axios = Axios.create({
  timeout: 1000 * 60, // 超时时间60s
  // baseURL: '',
  withCredentials: false, // 跨域请求时，允许其他域设置自身站点下的cookie
  cache: false,
});

let COMMON_LOADING = null;
let requestList = [];
/* eslint-disable */
/**
      * 全局请求拦截器
*/
axios.interceptors.request.use(
    (config) => {
        if(process.env.NODE_ENV === 'development'){
          config.headers.httpHost = process.env.VUE_APP_HOST;
        }
        // config.headers.Authorization = store.getters.token || '';
        if(!config.isHideLoading){
          // 如果不为true 请求提示loadding
          requestList.push(config.url);
          if(!COMMON_LOADING){
            COMMON_LOADING = Vue.prototype.$loading();
          }
        }
        // 添加headers "application/x-www-form-urlencoded"
        //如果是formdata格式 自动格式化数据
        if(config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {

          if(window.FormData){
            const formData = new FormData();
            let data = config.data
            for(let key in data){
              formData.append(key,data[key])
            }
            config.data = formData
            // config.data = qs.stringify(config.data);
          }else{
            // config.headers['Content-Type'] === 'application/json';
            console.log('不支持formdata')
          }
        }

        return config;
    }, (error) => {
        if (process.env.NODE_ENV === 'development') {
            return Promise.reject(error)
        }else{
            return Promise.reject('请求出错，请稍后再试')
        }
    },
);

/**
      * 全局响应拦截器
*/
axios.interceptors.response.use(
    (response) => {
            if(COMMON_LOADING){
              
              requestList.forEach((item,index)=>{
                if(item === response.config.url){
                  requestList.splice(index,1);
                }
              })
              if(requestList.length<1){
                COMMON_LOADING.close();
                COMMON_LOADING = null;
              }
              
            }
            // console.log('token::::::::',store.getters.token,'code::::::::',response.data.code)
            if(response.data.code === '0002' && store.getters.token){
              // 登录过期

              Vue.prototype.$message({
                message: '登录状态过期，请重新登录',
                type: 'warning'
              });
              store.commit('setToken','');
            }
            return response;
    },
    (error) => {
          if(COMMON_LOADING){
              requestList.forEach((item,index)=>{
                if(item === error.config.url){
                  requestList.splice(index,1);
                }
              })
              if(requestList.length<1){
                COMMON_LOADING.close();
                COMMON_LOADING = null;
              }
            }
        if (process.env.NODE_ENV === 'development') {
          return Promise.reject(error);
        }else{
          return Promise.reject('请求出错，请稍后再试');
        }
        
    },
);
/* eslint-enable */
Vue.prototype.$http = axios;
// window.$http = axios
export default axios;
