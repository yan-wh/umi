import { Row, Col, Icon } from 'antd'
import { withRouter } from 'umi';

import LeftTable from '@/containers/DepRecMedicine/LeftTable'
import RightTable from '@/containers/DepRecMedicine/RightTable'

// import Coffee from '@/static/coffee.jpg'

function DepRecMedicineComponent(props){

    const {location,isClickDepRecMedicine} = props


    return(
        isClickDepRecMedicine==true? 
        <Col span={21}>
            <Row>
                <Col span={8}>
                    <LeftTable />
                </Col>
                <Col span={16}>
                    <RightTable />
                </Col>
            </Row>
        </Col>
        :
        ''
        // <Col span={21}>
        //     <Row>
        //         <img src={Coffee}></img>
        //     </Row>
        // </Col>
    )
}

export default withRouter(DepRecMedicineComponent)