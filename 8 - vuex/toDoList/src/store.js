import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 所有的任务列表
        list: [],
        // 文本框的内容
        inputValue: "",
        /**
         * 纯前端项目，id只能自己生成
         */
        nextId: 5,
        // 控制过滤
        viewKey: 'all'
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
            // 根据id查找对应索引
            var i = state.list.findIndex(x =>
                x.id === id
            )

            console.log(i);
            // 根据索引删除对象
            if (i !== -1) {
                state.list.splice(i, 1)
            }
        },

        // 修改列表的选中状态
        changeStatus(state, param) {
            const i = state.list.findIndex(x => x.id === param.id)
            if (i !== -1) {
                state.list[i].done = param.status
            }
        },

        // 清除已完成
        cleanDone(state) {
            state.list = state.list.filter(x => x.done === false)
        },

        // 修改视图关键字
        changeViewKey(stae, key) {
            stae.viewKey = key
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
    },

    getters: {
        unDoneLength(state) {
            return state.list.filter(x => x.done === false).length
        },

        infolist(state) {
            if (state.viewKey === "all") {
                return state.list
            }

            if (state.viewKey === "undone") {
                return state.list.filter(
                    x => !x.done
                )
            }

            if (state.viewKey === "done") {
                console.log("传进来的是done");
                return state.list.filter(
                    x => x.done
                )
            }

            return state.list
        }
    }
})