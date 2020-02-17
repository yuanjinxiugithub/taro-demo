import Taro, {  useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './user.scss'

function User(){
	const [userName ,setUserName] = useState('个人中心')
 return (
	 <View>
		  <Text>{userName}</Text>
	 </View>
 )
}
User.config = {
	navigationBarTitleText: '个人中心'
}
export default User;