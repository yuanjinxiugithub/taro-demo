import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index/index'
import dva from './dva'
import models from './models'

import './app.scss'

const dvaApp = dva.createApp({  
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {
    const DEV = Taro.getEnv();
    console.log(DEV)
    console.log(Taro.ENV_TYPE.WEAPP)
    if(DEV === Taro.ENV_TYPE.WEAPP){
      console.log("当前环境是微信小程序");
      Taro.checkSession({
        success: res => {
          //session_key 未过期，并且在本生命周期一直有效
          console.log(res)
        },
        fail: res => {
           //sessIon_key 已经失效，需要重新执行登录流程
          console.log(res)
          //需要重新登录
             //调用接口获取登录凭证。通过凭证进而换取用户登录态信息。包括用户的唯一openid以及本次登录的会话密钥
        Taro.login({
        success:(res2) => {
         console.log(res2) 
         //调用后端登录接口获取openid
        },
        fail:(fialMsg) => {
          console.log(fialMsg)
        }
      });
        }
      });
      Taro.getSetting({
        success: res => {
          console.log(res)
        },
      });
      //获取微信用户信息
      Taro.getUserInfo({
      }).then(res => {
        console.log(res);
        Taro.setStorage({
          key: 'userInfo',
          data: res.userInfo
        });
      })
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/user/user'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/tab/home.png',
          selectedIconPath: './assets/tab/home-active.png',
        },
        {
          pagePath: 'pages/user/user',
          text: '我的',
          iconPath: './assets/tab/user.png',
          selectedIconPath: './assets/tab/user-active.png',
        },
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff',
      borderStyle: 'white',
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
