import React from 'react'
import { Table, Popconfirm, Button } from 'antd';

const RightTableComponent = ({ onDelete, RightName }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={RightName} columns={columns} />;
};

export default RightTableComponent;