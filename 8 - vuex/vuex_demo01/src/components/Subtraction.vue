<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="btnHandler2">-5</button>
    <!-- 
        访问state数据的第二种方式 
        从vuex中按需导入mapState函数
        通过刚才的函数，将当前组件所需要的全局数据映射为当前组建的计算属性
    -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },

  methods: {
    /**
     * 通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：
     */
    // ...mapMutations(['sub']),
    ...mapMutations(['sub', 'subN']),
    btnHandler1() {
      this.sub()
    },

    btnHandler2() {
      this.subN(5)
    },
  },

  computed: {
    ...mapState(['count']),
  },
}
</script>

<style>
</style>