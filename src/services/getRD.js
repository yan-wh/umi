
import gen from './gen'
const getRD ={
    getRightData: `GET /api/RightData`,
    getLeftData: `GET /api/LeftData`,
}

const APIFunction = {}

for (const key in getRD){
    APIFunction[key] = gen(getRD[key])
}

export default APIFunction