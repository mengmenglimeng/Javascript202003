// 一个模块有一个对应的接口文件；
import http from "./http";
export function isLogin(){
    return http.get("/user/login").then(data=>{
        return data;
    })
}
export function signout(){
    return http.get("/user/signout").then(data=>{
        return data;
    })
}