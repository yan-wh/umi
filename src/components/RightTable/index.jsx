import React,{useState} from 'react'
import { Table, Popconfirm, Button, Row, Col, Modal, Drawer } from 'antd';

function RightTableComponent(props){

  const { onDelete, handleSearch, isLoading } = props
  const { RightData } = props.GetData

  const [isModelOpen, setIsModelOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      ellipsis: true
    },
    {
      title: '性别',
      dataIndex: 'sex',
      ellipsis: true
    },
    {
      title: '地址',
      dataIndex: 'address',
      ellipsis: true
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (text, record,index) => {
        return (
          // record.id为当前该条数据的id值
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

  // console.log("我是RightData的数据",RightData)
  return (
    <div>
      <Row>
        <Col span={24} style={{display: "flex"}}>
          <span>人员明细</span>
          <Button onClick={handleSearch}>Search</Button>
          <Button onClick={handleSwitchDrawerOpen}>Add</Button>
        </Col>
      </Row>
      <Row>
        
        {/* loading={isLoading} */}
        <Table 
          scroll={{x:800}}
          dataSource={RightData} 
          columns={columns} 
          rowKey='key' 
          loading={isLoading}
          rowClassName={(record,index)=> record.text === '名字'? 'texts':''}
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