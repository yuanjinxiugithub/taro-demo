import Taro, { Component } from '@tarojs/taro'
import { View  , Text } from '@tarojs/components'
import { AtButton , AtGrid, AtActionSheet , AtActionSheetItem, AtRadio , AtCheckbox , AtInputNumber } from 'taro-ui';
import Feed from '../../components/feed/feed.js'
import DocsHeader from '../../components/title/title.js'
import './index.scss'

export default class Index extends Component {
  state = {
    opend: false,
    selectRadio: '',
    checkboxList: [],
    inputNumber: 0,
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  clickAtActionSheet = () => {
    this.setState({
      opend: true
    });
  }

  handleChange = (val) => {
    this.setState({
      selectRadio: val
    });
  }

  handleChangeCheckBox = (val) => {
    this.setState({
      checkboxList: val
    });
  }

  handleChangeInput = (val) => {
    this.setState({
      inputNumber: val
    });
  }

  render () {
    const { opend } = this.state
    const data = [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '领取中心'
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '找折扣'
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '领会员'
      },
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '新品首发'
      },
      {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: '领京豆'
      },
      {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: '手机馆'
      }
    ]
    const radioOptions = [
      { label: '单选项一', value: 'option1', desc: '单选项描述' },
      { label: '单选项二', value: 'option2' },
      { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
    ]
    const checkOptions =  [{
      value: 'list1',
      label: 'iPhone X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
    },{
      value: 'list2',
      label: 'HUAWEI P20'
    },{
      value: 'list3',
      label: 'OPPO Find X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    },{
      value: 'list4',
      label: 'vivo NEX',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
  }]
    const { selectRadio , checkboxList , inputNumber } = this.state
    return (
      <View className='page'>
       <DocsHeader title='基础' desc='1 个组件'></DocsHeader>
       <View className='panel__content'>
          <View className='btn-item'>
            <AtButton type='primary'>主操作按钮</AtButton>
            </View>
         </View>
       <DocsHeader title='Grid珊格' desc='AtGrid'></DocsHeader> 
       <View className='panel__content'>
          <AtGrid data={data} />
        </View>
        <View className='panel__content'>
          <AtGrid  mode='rect' data={data} />
        </View>
        <View>
        <DocsHeader title='动作面板' desc=''></DocsHeader> 
          <AtButton onClick={this.clickAtActionSheet}>点击</AtButton>
          <AtActionSheet title='标题' isOpened={opend}>
             <AtActionSheetItem>按钮一</AtActionSheetItem>
             <AtActionSheetItem>按钮二</AtActionSheetItem>
          </AtActionSheet>
        </View>
        <View>
          <Feed></Feed>
        </View>
        <DocsHeader title='数据录入' desc='12个组件'></DocsHeader>
        {/* Radio */}
        <View className='doc-body'>
           <View className='panel'>
               <View>
                 <AtRadio options={radioOptions} value={selectRadio} onClick={this.handleChange.bind(this)}></AtRadio>
               </View>
           </View>
        </View>
        {/* Checkbox */}
        <View>
           <AtCheckbox options={checkOptions}  selectedList={checkboxList} onChange={this.handleChangeCheckBox.bind(this)}>
           </AtCheckbox>
        </View>
        {/* InputNumber */}
        <View>
        <View className='panel'>
             <View>
               <AtInputNumber
                 min={0}
                 max={10}
                 step={1}
                 value={inputNumber}
                 onChange={this.handleChangeInput.bind(this)}
               />
              </View>
           </View>
        </View>
        
      </View>
    )
  }
}
