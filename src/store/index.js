import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    /** 状态 */
    state: {
        language: window.localStorage.getItem('language') ? window.localStorage.getItem('language') : 'zh'
    },
    /** 用于异步处理 */
    actions: {

    },
    /** 用来处理状态 */
    mutations: {

    },
    /** 用于异步处理 */
    getters: {

    },
    /** 用来挂载模块 */
    modules: {

    }
})



export default store