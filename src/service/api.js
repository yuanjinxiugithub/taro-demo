import request from '../utils/request';

//api命令
const API = {
  list: "/default/getArticleList"
}

//api方法
let ApiMethod = {};
Object.keys(API).forEach(key=>{
  ApiMethod[key] = async (params) => {
       return request({url: API[key], data: params});
  }
})
module.exports = ApiMethod;