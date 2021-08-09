
import gen from './gen'
const getRD ={
    getRightData: `GET /appservice/common/v1/getSomeData`
}

const APIFunction = {}

for (const key in getRD){
    APIFunction[key] = gen(getRD[key])
}

export default APIFunction