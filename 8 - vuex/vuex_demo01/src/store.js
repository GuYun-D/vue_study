import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },

    // 只有该数据中的函数可以修改state的数据
    mutations: {
        add(state) {
            /**
             * 不能写异步程序
             * 如：延迟一秒执行，vue-devtools的数据就不同步了
             */
            // setTimeout(() => {
            //     state.count++
            // }, 2000);
            state.count++
        },

        addN(state, step) {
            state.count += step
        },

        sub(state) {
            state.count--;
        },

        subN(state, step) {
            state.count -= step
        },
    },

    actions: {
        /**
         * 专门处理异步数据
         * 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
         */

        addAsync(context) {
            setTimeout(() => {
                /**
                 * action同样不能直接修改state
                 */
                context.commit("add")
            }, 1000);
        },

        addAsync(context, step) {
            setTimeout(() => {
                /**
                 * action同样不能直接修改state
                 */
                context.commit("addN", step)
            }, 1000);
        }
    }
})