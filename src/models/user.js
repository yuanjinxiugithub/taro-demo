import Taro from '@tarojs/taro'
import { list } from '../service/api'

export default {
	namespace: 'user',
	state: {
		list: []
	},
	effects: {
	  *getList({ params , callback  },{ call , put }){
			// call 执行异步函数
		//	const data = yield call(list,{});
			//console.log(data)
		},
	},
	reducers: {

	},
	
}