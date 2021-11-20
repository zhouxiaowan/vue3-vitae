<template>
   <div>
     {{name}}
     {{$store.state.counter}}
     -----
     {{count}}
   </div>
   <div>
     {{titleInfo.value}}{{titleInfo.color}}
   </div>
   <div v-for="item in list" :key="item.id">
     <div>{{item.name}}-{{item.completed}}</div>
   </div>
   <input type="value" v-model="todoName" @keydown.enter="addTodo(newTodos(todoName))"/>
</template>

<script lang="ts">
import { computed, defineComponent,PropType } from 'vue'
import { TitleInfo,Todo } from "../types";
import { useStore } from "vuex";
export default defineComponent({
  setup() { 
    const store = useStore()
    const count = computed(() => store.state.counter)  //拿到count的值
    return {
      count
    }
  },
  props:{
    titleInfo:{
      type: Object as PropType<TitleInfo>,
      required:true
    }
  },
  data(){
    return {
      name:'APP',
      list: [] as Todo[],
      todoName:''
    }
  },
  created(){
    this.list.push({
      id:1,
      name:'zzz',
      completed:true
    })
  },
  methods:{
    newTodos(todoName:string):Todo{
      return {
        id: this.list.length+1,
        name: todoName,
        completed:false
      }
    },
    addTodo(todo:Todo):void{
      this.list.push(todo)
      this.todoName = ''
    }
  }
})
</script>
<script lang="ts" setup>

</script>
<style scoped lang=''>

</style>
