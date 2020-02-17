import Taro, { Component } from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import './user.scss'
@connect(({ user }) => ({
  user
}))
export default class User extends Component{
	componentWillMount () { }

  componentDidMount () {
		const { dispatch } = this.props;
		dispatch({
			type: 'user/getList'
		})
	 }

  componentWillUnmount () { }

  componentDidShow () { }

	componentDidHide () { }

	config = {
		navigationBarTitleText: '个人中心'
	}
	
	render(){
		return (
			<View>
				 <Text>个人中心</Text>
			</View>
		)
	}
}

