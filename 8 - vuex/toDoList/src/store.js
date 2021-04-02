import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 所有的任务列表
        list: [],
        // 文本框的内容
        inputValue: "aaa"
    },

    mutations: {
        // 为list赋值
        initList(state, list) {
            state.list = list
        },

        // 为store中的inputValue赋值
        setInputValue(state, val){
            state.inputValue = val
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