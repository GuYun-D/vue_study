"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _actions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    count: 0
  },
  // 只有该数据中的函数可以修改state的数据
  mutations: {
    add: function add(state) {
      /**
       * 不能写异步程序
       * 如：延迟一秒执行，vue-devtools的数据就不同步了
       */
      // setTimeout(() => {
      //     state.count++
      // }, 2000);
      state.count++;
    },
    addN: function addN(state, step) {
      state.count += step;
    },
    sub: function sub(state) {
      state.count--;
    },
    subN: function subN(state, step) {
      state.count -= step;
    }
  },
  actions: (_actions = {
    /**
     * 专门处理异步数据
     * 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
     */
    addAsync: function addAsync(context) {
      setTimeout(function () {
        /**
         * action同样不能直接修改state
         */
        context.commit("add");
      }, 1000);
    }
  }, _defineProperty(_actions, "addAsync", function addAsync(context, step) {
    setTimeout(function () {
      /**
       * action同样不能直接修改state
       */
      context.commit("addN", step);
    }, 1000);
  }), _defineProperty(_actions, "subAsync", function subAsync(context) {
    setTimeout(function () {
      context.commit('sub');
    }, 1000);
  }), _defineProperty(_actions, "subNAsync", function subNAsync(context, step) {
    setTimeout(function () {
      context.commit('subN', step);
    }, 1000);
  }), _actions)
});

exports["default"] = _default;