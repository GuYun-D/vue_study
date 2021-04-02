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
        },

        subAsync(context) {
            setTimeout(() => {
                context.commit('sub')
            }, 1000);
        },

        subNAsync(context, step) {
            setTimeout(() => {
                context.commit('subN', step)
            }, 1000);
        }
    },

    /**
     * Getter 用于对 Store 中的数据进行加工处理形成新的数据。
     *      ① Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
     *      ② Store 中数据发生变化，Getter 的数据也会跟着变化
     */
    getters: {
        showNum(state) {
            return "当前最新的count的值为【" + state.count + "】"
        }
    }
})