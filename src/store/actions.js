/**
 * 包含n个间接更新状态的方法
 */
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-types'
 export default {
   /**
    * 1：获取当前地址信息的异步action
    */
   async getAddress ({commit,state}) {
    //调用接口请求函数发请求
    const {longitude, latitude} = state
    const result = await reqAddress (longitude, latitude)
    //有了结果提交mutation
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
   },
   /**
    *2： 获取商品分类列表异步action
    */
   async getCategorys ({commit}, callback) {
    //调用接口请求函数发请求
    // const {longitude, latitude} = state
    const result = await reqCategorys ()
    //有了结果提交mutation
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
      //003
      typeof callback === 'function' && callback()
    }
   },
   /**
    * 3：获取商家列表异步action
    */
   async getShops ({commit,state}) {
    //调用接口请求函数发请求
    const {longitude, latitude} = state
    const result = await reqShops ({longitude, latitude})
    //有了结果提交mutation
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
   },
 }