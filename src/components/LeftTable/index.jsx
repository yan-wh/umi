import React from 'react'
import { Table, Popconfirm, Button, Row, Col } from 'antd';

export default function LeftTableComponent(props){

    const { LeftData } = props.GetData
    const { handleSearch, isLoading } = props

    const columns=[
        {
            title: "入室科室",
            dataIndex: "drname",
            ellipsis: true,
            render: (text,record)=>{
                return <span>{record.drname+'/'+record.key}</span>
            }
        },
        {
            title: "出室科室",
            dataIndex: "drtype_nm",
            ellipsis: true,
            render: (text,record)=>{
                return <span>{record.drtype_nm}</span>
            }
        },
    ]

    return(
        <div>
            <Row>
                <Col span={24}>
                    <span>科室领药</span>
                    <Button onClick={handleSearch}>搜索</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        rowKey='key'
                        columns={columns}
                        dataSource={LeftData}
                        loading={isLoading}
                        defaultExpandedRowKeys='1'
                        scroll={{x:800}}
                    />
                </Col>
            </Row>
        </div>
    )
}