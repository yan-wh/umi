import moment from 'moment'
import qs from 'qs';
import RequestServices from '@/utils/request.js'
import React from 'react'
import { Avatar, message } from 'antd'
import { withRouter, Link, history } from 'umi';
import './index.less'
import { connect } from 'dva';
class AdmitPatientListComponent extends React.Component{

    // componentDidMount(){
    //     const currentPage = document.getElementById('APList')
    //     currentPage.addEventListener('beforeunload', (e) => {
    //         // e.preventDefault();
    //         // e.returnValue='确定离开吗？';
    //         message.success('刷新页面了')
    //         history.push('/');
    //         console.log('props', this.props)
    //     }, false)
    //     // const city = '江干区'
    //     // // this.getWeatherInfo(city);
    //     // const { dispatch } = this.props
    //     // dispatch({
    //     //     type: 'GetData/getCityInfo',
    //     //     payload: '',
    //     //     callback: (res) => {
    //     //         // console.log('res', res)
    //     //         if(res.status == '200'){
    //     //             dispatch({
    //     //                 type: 'GetData/getCityWeatherInfo',
    //     //                 payload: {
    //     //                     city: city
    //     //                 },
    //     //             })
    //     //         }
    //     //     }
    //     // })
    // }
    // componentWillUnmount(){
    //     window.removeEventListener('beforeunload', () => {
    //         console.log('已卸载监听')
    //     }, false)
    // }
    // getWeatherInfo = (param) => {
    //     //获取城市信息
    //     const cityInfoParams = {
    //         method: 'get',
    //         url: 'http://jisutqybmf.market.alicloudapi.com/weather/city',
    //         data: '',
    //     }
    //     RequestServices(cityInfoParams).then(response => {
    //         console.log('city', response)
    //         //获取天气信息
    //         const cityInfo = JSON.parse(JSON.stringify(response.data))
    //         this.setState({cityInfo: cityInfo.result})
    //         const params = new URLSearchParams();
    //         params.append('city', param);
    //         let cityWeatherInfoParams = {
    //             method: 'post',
    //             url: 'http://jisutqybmf.market.alicloudapi.com/weather/query',
    //             data: params,
    //         }
    //         // cityInfo.result.map(e => {
    //         //     if(e.city = param){
    //         //         cityWeatherInfoParams.data.city = param
    //         //         // cityWeatherInfoParams.data.citycode = e.citycode
    //         //         // cityWeatherInfoParams.data.cityid = JSON.stringify(e.cityid)
    //         //         // cityWeatherInfoParams.data.ip = '221.12.173.11'
    //         //         // cityWeatherInfoParams.data.location = '30.302050,120.324870'
    //         //     }
    //         // })
    //         console.log('嗯', cityWeatherInfoParams)

    //         if(cityInfo.msg == 'ok'){
    //             RequestServices(cityWeatherInfoParams).then(res => {
    //                 console.log('weather', res.data.result)
    //                 this.setState({cityWeatherInfo: res.data.result})
    //             }).catch(error => {
    //                 console.log('err', error)
    //             })
    //         }
    //     }).catch(error => {
    //         console.log('err', error)
    //     })
    // }
    
    render(){
        // console.log('时间', moment(undefined).format('YYYY-MM-DD HH:MM:ss'))
        // console.log(`${false && <p>入院患者列表</p>}`)
        const { cityWeatherInfo } = this.props.GetData
        const iconCode = parseInt(cityWeatherInfo.img)
        // console.log('iconCode', iconCode)

        const arr = [1,12,11,33]
        console.log('判断', arr.includes(12, -2))

        return(
            <div className='APList' id='APList'>
                <div className='div-weather'>
                    {/* <img src={require(`@/assets/weatherIcon/weathercn/${iconCode}.png`)}/> */}
                    {/* <Avatar src={require(`@/assets/weatherIcon/weathercn/${iconCode}.png`)} size={70}/> */}
                </div>
            </div>
        )
    }
}

export default connect(({GetData}) => ({GetData}))(withRouter(AdmitPatientListComponent))