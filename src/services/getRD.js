
import gen from './gen'
const getRD ={
    getRightData: `GET /api/RightData`,
    getLeftData: `GET /api/LeftData`,
    getRightDrawerData: 'GET /api/RightDrawerData',
    getUserInfo: 'POST http://localhost:9000/',
    getToken: 'POST http://localhost:7000/index/',
    getCityInfo: 'GET http://jisutqybmf.market.alicloudapi.com/weather/city',
    getCityWeatherInfo: 'POST http://jisutqybmf.market.alicloudapi.com/weather/query'
}

const APIFunction = {}

for (const key in getRD){
    APIFunction[key] = gen(getRD[key])
}

export default APIFunction