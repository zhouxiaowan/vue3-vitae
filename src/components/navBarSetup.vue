<template>
   <div>
     {{titleInfo.value}}{{titleInfo.color}}
   </div>
   <div v-for="item in list" :key="item.id">
     <div>{{item.name}}-{{item.completed}}</div>
   </div>
   <input type="value" v-model="todoName" @keydown.enter="addTodo(newTodos(todoName))"/>
</template>

<script lang="ts" setup>
import { PropType,ref,defineProps } from 'vue'
import type { TitleInfo,Todo } from "../types";

const todoName = ref('')
const list = ref([] as Todo[])
list.value.push({
  id:1,
  name:'zzz',
  completed:true
})
defineProps({
  titleInfo:{
      type: Object as PropType<TitleInfo>,
      required:true
    }
})
const newTodos = (todoName:string):Todo => {
      return {
        id: list.value.length+1,
        name: todoName,
        completed:false
      }
}
const addTodo = (todo:Todo):void=>{
  list.value.push(todo)
  todoName.value = ''
}
</script>

<style scoped lang=''>

</style>
