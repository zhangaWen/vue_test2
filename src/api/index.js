/**
 * 包含多个请求函数的模块
 * 所有的接口请求函数，函数的返回值是promise对象
 */

 /**
  * 1：获取地理位置
  */
import ajax from './ajax'

const BASE = '/api'
const BASE2 = '/baidu'

export const reqAddress = (longitude,latitude) => ajax({
  method: 'GET',
  url: BASE + `/position/${latitude},${longitude}`,
})
/**
 * 2：获取食品分类
 */
export const reqCategorys = () => ajax.get(BASE + '/index_category')
/**
 * 3:根据经纬度获取商铺列表
 */

 export const reqShops = ({latitude, longitude}) => ajax({
   url: BASE + '/shops',
   params: {
    latitude,
    longitude
   }
 })

//  reqAddress('116.36867','40.10038').then((reslut) =>{
//   console.log(reslut)
//  })