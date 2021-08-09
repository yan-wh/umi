import React from 'react'
import { Table, Popconfirm, Button } from 'antd';

function RightTableComponent(props){

  const { onDelete, handleSearch, isLoading } = props
  const { RightData } = props.Rdata

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (text, record,index) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  console.log("我是RightData的数据",RightData)
  return (
    <div>
      <Button onClick={handleSearch}>Search</Button>
      {/* loading={isLoading} */}
      <Table dataSource={RightData} columns={columns} rowKey='key' loading={isLoading}/> 
    </div>
  );
};

export default RightTableComponent;