import React,{useState} from 'react'
import { Table, Popconfirm, Button, Row, Col, Icon } from 'antd';
import RightModal from './RightModal/index'
import RightDrawer from './RightDrawer/index'
import RightTableColumns from './RightTableColumns'


import './index.less'

function RightTableComponent(props){

  const { onDelete, handleSearch, isLoading, dispatch } = props
  const { RightData, RightDrawerData } = props.GetData

  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const handleSwitchModelOpen=()=>{
    setIsModelOpen(!isModelOpen)
  }

  const handleSwitchDrawerOpen=()=>{
    setIsDrawerOpen(!isDrawerOpen)
  }

  // const handleAddSelectedValueToRightTable=(rowsValue)=>{
  //   handleSwitchDrawerOpen()
  //   dispatch({
  //     type: 'GetData/addRightDrawerSelectedValue',
  //     payload: rowsValue
  //   })
  // }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const column = RightTableColumns(onDelete).map((col,index)=>{
    return col
  })

  console.log("我是RightData的数据",RightData)
  return (
    <div className='right-table-container'>
      <Row>
        <Col span={24} style={{display: "flex", justifyContent: 'space-between', height: '35px'}}>
          <div><span className="peopleDetail">人员明细</span></div>
          <div>
            <Button onClick={handleSwitchDrawerOpen} className="addPeopleItem"><Icon type="plus" />Add</Button>
          </div>
        </Col>
      </Row>
      <Row>
        
        {/* loading={isLoading} */}
        <Table 
          className='table_style'
          rowSelection={rowSelection}
          // scroll={{x:800}}
          dataSource={RightData} 
          columns={column}
          rowKey={record=>record.number}
          loading={isLoading}
          rowClassName={(record,index)=> record.sex==='男'? 'texts':''}
          locale = {RightData==''? {emptyText:"无数据"}:''}
          // onHeaderRow={column => {
          //   return {
          //     onClick: () => {alert("hei，我是表格头部")}, // 点击表头行
          //   };
          // }}
          pagination={{
            pageSize:3
          }}
          onRow={record=>{
            return{
              onDoubleClick: event=>{
                console.log("我是event",event.target)
                handleSwitchModelOpen()
              }
            }
          }}
        />

        {/* 打开=>抽屉 */}
        <RightDrawer 
          isDrawerOpen={isDrawerOpen} 
          handleSwitchDrawerOpen={handleSwitchDrawerOpen}  
          {...props}
          // handleAddSelectedValueToRightTable={handleAddSelectedValueToRightTable}
        />
        
        {/* 双击=>弹窗 */}
        <RightModal  isModelOpen={isModelOpen} handleSwitchModelOpen={handleSwitchModelOpen} RightData={RightData}/>

      </Row>
    </div>
  );
};

export default RightTableComponent;