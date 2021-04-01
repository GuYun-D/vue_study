<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button>-1</button>
    <!-- 
        访问state数据的第二种方式 
        从vuex中按需导入mapState函数
        通过刚才的函数，将当前组件所需要的全局数据映射为当前组建的计算属性
    -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {

        }
    },


    computed: {
        ...mapState(["count"])
    }
}
</script>

<style>
</style>