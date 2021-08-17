import React,{useState} from 'react'
import { Table, Popconfirm, Button, Row, Col, Icon } from 'antd';
import RightModalAdd from './RightModalAdd/index'
import RightDrawer from './RightDrawer/index'
import RightTableColumns from './RightTableColumns'


import './index.less'

function RightTableComponent(props){

  const { onDelete, handleSearch, isLoading } = props
  const { RightData } = props.GetData

  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  const handleSwitchModelOpen=()=>{
    setIsModelOpen(!isModelOpen)
  }

  const handleSwitchDrawerOpen=()=>{
    setIsDrawerOpen(!isDrawerOpen)
  }

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

  // console.log("我是RightData的数据",RightData)
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

        {/* 双击=>弹窗 */}
        <RightDrawer isDrawerOpen={isDrawerOpen} handleSwitchDrawerOpen={handleSwitchDrawerOpen}/>
        
        {/* 打开=>抽屉 */}
        <RightModalAdd  isModelOpen={isModelOpen} handleSwitchModelOpen={handleSwitchModelOpen} handleSwitchModelOpen={handleSwitchModelOpen} RightData={RightData}/>

      </Row>
    </div>
  );
};

export default RightTableComponent;