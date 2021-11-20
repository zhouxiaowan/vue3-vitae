// 这个文件可以帮助我们实现在代码中，直接使用this.$store.xxxx
import { ComponentCustomProperties, Store } from "vuex";
import { Store } from "vuex";
import { State } from "./store";

// this.$store强类型支持
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties{
    $store:Store<State>
  }
}