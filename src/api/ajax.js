
/**
 * 
 * 发送axja的函数（axios）---返回值是promise
 *    1：处理post请求体参数---转化成urlencode格式--默认用json格式---请求拦截器
 *    2：让成功的结果不是response 而是response.data
 *    3：统一处理请求错误
 */
import axios from 'axios'
import qs from 'qs'


//添加请求拦截器
axios.interceptors.request.use(config => {
  const {method,data} = config
  if(method.toUpperCase()==="POST" && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

//添加响应拦截器
axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  console.log(error.message)
  //中断promise链
  return new Promise(() => {})
})

export default axios