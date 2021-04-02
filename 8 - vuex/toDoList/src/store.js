import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 所有的任务列表
        list: [],
        // 文本框的内容
        inputValue: "aaa",
        /**
         * 纯前端项目，id只能自己生成
         */
        nextId: 5
    },

    mutations: {
        // 为list赋值
        initList(state, list) {
            state.list = list
        },

        // 为store中的inputValue赋值
        setInputValue(state, val) {
            state.inputValue = val
        },

        // 添加列表项
        addItem(state) {
            const obj = {
                id: state.nextId,
                info: state.inputValue.trim(),
                done: false
            }

            state.list.push(obj)

            state.nextId++

            state.inputValue = ''

        },

        // 根据id删除对应的item项
        removeItem(state, id) {
            console.log("传进来的id是" + id + typeof id);

            // 根据id查找对应索引
            const i = state.list.findIndex(x => {
               x.id === id
            })

            console.log(i);
            // 根据索引删除对象
            if (i !== -1) {
                state.list.splice(i, 1)
            }
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