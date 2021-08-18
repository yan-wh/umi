
import RightTableColumns from '../RightTableColumns'
import WrappedNormalLoginForm from './RightDrawerForm'
import {Drawer, Table, Row, Col, Button} from 'antd'

function RightDrawer(props){
    const {isDrawerOpen,handleSwitchDrawerOpen } = props
    
    const {RightDrawerData} = props.GetData

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
              <WrappedNormalLoginForm {...props}/>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table
                rowKey={record=>record.id}
                dataSource={RightDrawerData}
                columns={column}
              />
            </Col>
          </Row>

        </Drawer>
    )
}
export default RightDrawer