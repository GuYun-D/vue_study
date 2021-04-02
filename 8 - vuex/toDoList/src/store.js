import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 所有的任务列表
        list: []
    },

    mutations: {
        // 为list赋值
        initList(state, list) {
            state.list = list
        }
    },

    actions: {
        // axios是异步请求，所以写在action
        getList(context) {
            axios.get('/list.json').then(({ data }) => {
                // console.log(data);
                context.commit("initList", data)
            })
        }
    }
})