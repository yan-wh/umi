import RightTableColumns from '../RightTableColumns'
import WrappedNormalLoginForm from './RightDrawerForm'
import {Drawer, Table, Row, Col, Button} from 'antd'

function RightDrawer(props){
    const {isDrawerOpen,handleSwitchDrawerOpen,RightData} = props

    const column = RightTableColumns().filter((col,index)=>{
      return col.title!=='操作'
    })

    return(
        <Drawer
          width={500}
          title="添加病患"
          placement="right"
          closable={false}
          onClose={handleSwitchDrawerOpen}
          visible={isDrawerOpen}
        >

          <Row>
            <Col span={24}>
              <WrappedNormalLoginForm />
              <Button><span>搜寻病人</span></Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table 
                dataSource={RightData}
                columns={column}
              />
            </Col>
          </Row>

        </Drawer>
    )
}
export default RightDrawer