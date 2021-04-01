<template>
  <div>
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'
export default {
  data() {
    return {
      
    }
  },

  // 注册私有组件
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction,
  },
}
</script>

<style scoped>
</style>