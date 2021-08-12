import React,{useState} from 'react'
import { Table, Popconfirm, Button, Row, Col, Select, Spin  } from 'antd';
import './index.less'

const { Option } = Select;

export default function LeftTableComponent(props){

    const { LeftData } = props.GetData
    const { isLoading, getRightData } = props

    const [DepartmentValue, setDepartmentValue] = useState('')
    const [mockdata, setmockdata] = useState([])

    const selectDepartmentValue=(value)=>{
        setDepartmentValue(value)
    }

    const InDepartmentValue=()=>{
        getRightData()
    }
    const OutDepartmentValue=()=>{
        console.log('...')
    }
    const handleSearch=()=>{
        const data = [{
            drname: '',
            drtype_nm: ''
        }]
        setmockdata(data)
    }

    const columns=[
        {
            title: "入室科室",
            dataIndex: "drname",
            ellipsis: true,
            render: (text,record)=>{
                return <Select
                    labelInValue
                    style={{ width: 120 }}
                    defaultValue={record.drname}
                    onChange={selectDepartmentValue}
                >
                    <Option value="Surgery">外科</Option>
                    <Option value="internal-medicine">内科</Option>
                </Select>
            }
        },
        {
            title: "出室科室",
            dataIndex: "drtype_nm",
            ellipsis: true,
            render: (text,record)=>{
                if(DepartmentValue.label==='外科'){
                    return <Select
                        labelInValue
                        defaultValue={{ key: '' }}
                        style={{ width: 120 }}
                        onChange={InDepartmentValue}
                    >
                        <Option value="jack">外科-中药房</Option>
                        <Option value="lucy">外科-西药房</Option>
                    </Select>
                }
                else if(DepartmentValue.label==='内科'){
                    return <Select
                        labelInValue
                        defaultValue={{ key: '' }}
                        style={{ width: 120 }}
                        onChange={OutDepartmentValue}
                    >
                        <Option value="jack">内科-中药房</Option>
                        <Option value="lucy">内科-西药房</Option>
                    </Select>
                }
                else{
                    return <Select
                        defaultValue=''
                        style={{ width: 120 }}
                    >
                    </Select>
                }
            }
        },
    ]

    return(
        <div className="left-container">
            <Row>
                <Col span={24} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div><span>科室领药</span></div>
                    <div><Button onClick={handleSearch}>新增申请单</Button></div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Spin spinning={isLoading}>
                        <Table
                            bordered
                            rowKey={record=>record.key}
                            columns={columns}
                            // scroll={{x:500}}
                            dataSource={mockdata}
                            pagination={false}
                        />
                    </Spin>
                </Col>
            </Row>
        </div>
    )
}