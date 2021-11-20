import { createStore } from 'vuex'
// export type State = {
//     counter:number
// }
export default createStore({
    state: {
        counter:1
    },
    mutations: {
        add(state){
            state.counter++
        }
    },
    actions: {
    },
    modules: {
    }
})
