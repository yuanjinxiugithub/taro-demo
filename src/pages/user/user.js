import Taro, { Component } from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './user.scss'
@connect(({ user }) => ({
  user
}))
export default class User extends Component{
	componentWillMount () { }

  componentDidMount () {
		const { dispatch } = this.props;
		dispatch({
			type: 'user/getList',
			params: { id: 1 },
			callback: res => {
				console.log(res)
			}
		});
	 }

  componentWillUnmount () { }

  componentDidShow () { }

	componentDidHide () { }

	config = {
		navigationBarTitleText: '个人中心'
	}
	
	render(){
		const userInfos = Taro.getStorageInfoSync("userInfo")
	//	console.log(userInfos)
		Taro.getStorage({
			key: 'userInfo',
			success: res => {
			 // console.log(res)
			}
		})
		return (
			<View>
				<View>
					{userInfos &&
	         <AtAvatar image={userInfos.avatarUrl}></AtAvatar>
					}
				</View>
			</View>
		)
	}
}

