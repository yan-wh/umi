import React from 'react'
import { Table, Popconfirm, Button } from 'antd';

function RightTableComponent(props){

  const { onDelete, handleSearch, isLoading } = props
  const { RightData } = props.Rdata

  const columns = [
    {
      title: '名字',
      dataIndex: 'name'
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '地址',
      dataIndex: 'address',
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

  // console.log("我是RightData的数据",RightData)
  return (
    <div>
      <Button onClick={handleSearch}>Search</Button>
      {/* loading={isLoading} */}
      <Table 
        dataSource={RightData} 
        columns={columns} 
        rowKey='key' 
        loading={isLoading}
        defaultExpandedRowKeys="1"
        pagination={{
            pageSize:3
        }}

      /> 
    </div>
  );
};

export default RightTableComponent;