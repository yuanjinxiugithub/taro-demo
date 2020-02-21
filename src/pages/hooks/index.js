import Taro, {  useState , useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui';
import './index.scss'

function Test(props){
	const  [ count , setCount ] = useState(0);
	useEffect(()=>{
	 console.log(`useEffect => You clicked ${count} times`);
	},[count])
  return <View>
		<AtButton onClick={()=>{ setCount(count+1)}}>{count}</AtButton>
	</View>
}
export default Test