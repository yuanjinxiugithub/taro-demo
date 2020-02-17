import Taro from '@tarojs/taro'
import request from "../utils/request";

export default {
	namespace: 'user',
	state: {
		list: []
	},
	effects: {
	  *getList({},{}){
      console.log("user model......")
		},
	},
	reducers: {

	},
	
}