/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import demo from './modules/demo/index';
import {getTokenFn,setTokenFn} from '@/assets/utils/util'

const modules = {
  demo,
}


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		token:getTokenFn() || '',		//token
	},
	getters: {},
	actions: {},
	mutations: {
	  setToken(state,token) {
	  	// 设置token  同步到cookie 有效期默认7天
	  	//如果token不存在 默认清空token
	  	setTokenFn(token);
	    state.token = token;
	  },
	},
  modules,
  getters
});
