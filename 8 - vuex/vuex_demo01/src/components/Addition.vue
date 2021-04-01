<template>
  <div>
    <!-- 在vue单文件中可以省略this -->
    <!-- <h3>当前最新的count值为：{{this.$store.state.count}}</h3> -->
    <!-- 访问state数据的第一种方式 -->
    <h3>当前最新的count值为：{{ $store.state.count }}</h3>
    <button>+1</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>