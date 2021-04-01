<template>
  <div>
    <!-- 在vue单文件中可以省略this -->
    <!-- <h3>当前最新的count值为：{{this.$store.state.count}}</h3> -->
    <!-- 访问state数据的第一种方式 -->
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+5</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {
    btnHandler1() {
      /**
       * 这样做虽然可以达到我们的目的，但是这样是错误的，vuex不允许组件直接修改state中的数据
       */
      // this.$store.state.count ++
      // console.log('错误修改')
      /**
       * 触发mutations函数
       * Mutation 用于变更 Store中 的数据。
       * 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。
       * 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。
       */
      this.$store.commit('add')
    },

    btnHandler2(){
      this.$store.commit('addN', 5)
    }
  },
}
</script>

<style>
</style>