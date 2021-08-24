import { useEffect, useState } from 'react'
import RightTableColumns from '../RightTableColumns'
import WrappedNormalLoginForm from './RightDrawerForm'
import {Drawer, Table, Row, Col, Button} from 'antd'

import './index.less'

function RightDrawer(props){

    const [rowsValue,setrowsValue] = useState()
    // console.log("我是rowsValue",rowsValue)
    const [isClickSearchPatientBtn,setisClickSearchPatientBtn] = useState(false)

    const {isDrawerOpen,handleSwitchDrawerOpen, handleAddSelectedValueToRightTable, dispatch } = props
    const {RightDrawerData,RightDrawerSearchData} = props.GetData

    const column = RightTableColumns().filter((col,index)=>{
      return col.title!=='操作'
    })

    useEffect(()=>{
      // dispatch请求
      dispatch({    //如若dispatch语句后还有其它需要在获取数据后执行的语句，那么需要用到async、await语句
        type: 'GetData/getRightDrawerData',
      })
    },[dispatch])

    const handleChangeIsClickSearchPatientBtnValue = ()=>{
      setisClickSearchPatientBtn(!isClickSearchPatientBtn)
    }

    return(
        <Drawer
          width={550}
          drawerStyle={{overflow: 'hidden',}}
          bodyStyle={{height: '100vh', overflow: 'hidden'}}
          title="添加病患"
          placement="right"
          closable={false}
          maskClosable={true}
          // onClose={handleSwitchDrawerOpen}
          visible={isDrawerOpen}
        >

          {/* 表单 */}
          <Row className="form-search">
            <Col span={24}>
              <WrappedNormalLoginForm 
                {...props}
                isClickSearchPatientBtn={isClickSearchPatientBtn}
                handleChangeIsClickSearchPatientBtnValue={handleChangeIsClickSearchPatientBtnValue}
              />
            </Col>
          </Row>
          {/* 数据展示 */}
          <Row className="data-table">
            <Col span={24}>
              <Table
                rowKey={record=>record.number}
                dataSource={isClickSearchPatientBtn? RightDrawerSearchData : RightDrawerData}
                columns={column}
                rowSelection={{
                  onSelect: (record, selected, selectedRows, nativeEvent)=>{
                    setrowsValue(selectedRows)
                    // console.log("我是选中的value",selectedRows)
                  }
                }}
                pagination={{
                  pageSize: 5
                }}
              />
            </Col>
          </Row>

          {/* 页尾 */}
          <Row className="footer">
            <Button onClick={handleSwitchDrawerOpen} style={{marginRight: '25px', marginLeft: 'auto'}}>取消</Button>
            {/* // 切记：调用方法传参时，使用箭头函数！否则将导致当前对象指向出错 */}
            <Button onClick={()=>handleAddSelectedValueToRightTable(rowsValue)}>添加</Button>
          </Row>

        </Drawer>
    )
}
export default RightDrawer