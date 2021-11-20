<template>
   <nav-bar :title-info="{value:'123',color:'red'}"/>
   <NavBarSetup :title-info="{value:'123',color:'red'}"/>
   <router-view/>
</template>
<script lang="ts" setup>
  import navBar from "../components/navBar.vue";
import NavBarSetup from '../components/navBarSetup.vue';
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name:'APP'
})
</script>

<style scoped lang=''>

</style>
