import React,{useState} from 'react'
import { Table, Popconfirm, Button, Row, Col, Modal, Drawer } from 'antd';
import style from './index.less'

function RightTableComponent(props){

  const { onDelete, handleSearch, isLoading } = props
  const { RightData } = props.GetData

  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      ellipsis: true,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: '性别',
      dataIndex: 'sex',
      ellipsis: true
    },
    {
      title: '地址',
      dataIndex: 'address',
      ellipsis: true,
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (text, record,index) => {
        return (
          // record.id为当前该条数据的record.id值
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>  
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

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

  // console.log("我是RightData的数据",RightData)
  return (
    <div className='right-table-container'>
      <Row>
        <Col span={24} style={{display: "flex", justifyContent: 'space-between'}}>
          <div><span>人员明细</span></div>
          <div>
            <Button onClick={handleSwitchDrawerOpen}>Add</Button>
          </div>
        </Col>
      </Row>
      <Row>
        
        {/* loading={isLoading} */}
        <Table 
          bordered
          className='table_style'
          rowSelection={rowSelection}
          scroll={{x:800}}
          dataSource={RightData} 
          columns={columns} 
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
                console.log("我是event",event.target.title)
                handleSwitchModelOpen()
              }
            }
          }}
        />

        {/* 双击=>弹窗 */}
        <Modal
          title="Basic Modal"
          visible={isModelOpen}
          onOk={handleSwitchModelOpen}
          onCancel={handleSwitchModelOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        
        {/* 打开=>抽屉 */}
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={handleSwitchDrawerOpen}
          visible={isDrawerOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>

      </Row>
    </div>
  );
};

export default RightTableComponent;