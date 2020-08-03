import * as Types from "../action-types";
// 导出一个对象
export default {
    addTodo(val){
        return {type:Types.ADD_TODO,val}
    },
    delTodo(id){
        return {type:Types.DEL_TODO,id}
    },
    changeType(id){
        return {type:Types.CHANGE_TYPE,id}
    },
    changeVal(val){
        return {type:Types.CHANGE_VAL,val}
    }
}
