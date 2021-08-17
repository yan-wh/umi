import {Popconfirm, Button} from 'antd'

export default function RightTableColumns(onDelete){

    return [
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
}