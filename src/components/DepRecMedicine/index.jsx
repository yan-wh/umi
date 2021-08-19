import { Row, Col } from 'antd'
import { withRouter } from 'umi';

import LeftTable from '@/containers/LeftTable'
import RightTable from '@/containers/RightTable'

function DepRecMedicine(props){

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
    )
}

export default withRouter(DepRecMedicine)