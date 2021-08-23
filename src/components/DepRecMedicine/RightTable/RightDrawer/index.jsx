import { useEffect, useState } from 'react'
import RightTableColumns from '../RightTableColumns'
import WrappedNormalLoginForm from './RightDrawerForm'
import {Drawer, Table, Row, Col, Button} from 'antd'


function RightDrawer(props){

    const [rowsValue,setrowsValue] = useState()
    // console.log("我是rowsValue",rowsValue)

    const {isDrawerOpen,handleSwitchDrawerOpen, handleAddSelectedValueToRightTable, dispatch } = props
    const {RightDrawerData} = props.GetData

    const column = RightTableColumns().filter((col,index)=>{
      return col.title!=='操作'
    })

    useEffect(()=>{
      // dispatch请求
      dispatch({    //如若dispatch语句后还有其它需要在获取数据后执行的语句，那么需要用到async、await语句
        type: 'GetData/getRightDrawerData',
      })
    },[dispatch])

    // //添加数据到右边table中
    // const onClickAddToRightTable=()=>{
      
    // }

    // //关闭抽屉
    // const onClickCloseDrawer=()=>{
      
    // }


    return(
        <Drawer
          width={550}
          drawerStyle={{overflow: 'hidden'}}
          title="添加病患"
          placement="right"
          closable={false}
          // onClose={handleSwitchDrawerOpen}
          visible={isDrawerOpen}
        >

          {/* 表单 */}
          <Row>
            <Col span={24}>
              <WrappedNormalLoginForm {...props}/>
            </Col>
          </Row>
          {/* 数据展示 */}
          <Row>
            <Col span={24}>
              <Table
                rowKey={record=>record.id}
                dataSource={RightDrawerData}
                columns={column}
                rowSelection={{
                  onSelect: (record, selected, selectedRows, nativeEvent)=>{
                    setrowsValue(record)
                  }
                }}
              />
            </Col>
          </Row>

          {/* 页尾 */}
          <Row style={{marginTop: '150px', display: 'flex'}}>
            <Button onClick={handleSwitchDrawerOpen} style={{marginRight: '25px', marginLeft: 'auto'}}>取消</Button>
            <Button >添加</Button>
            {/* onClick={handleAddSelectedValueToRightTable(rowsValue)} */}
          </Row>

        </Drawer>
    )
}
export default RightDrawer