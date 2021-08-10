
import gen from './gen'
const getRD ={
    getRightData: `GET /api/list`
}

const APIFunction = {}

for (const key in getRD){
    APIFunction[key] = gen(getRD[key])
}

export default APIFunction