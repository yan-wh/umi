import React,{useMemo, useState} from 'react'
import { Table, Popconfirm, Button, Row, Col, Select, Icon } from 'antd';
import './index.less'

const { Option } = Select;

export default function LeftTableComponent(props){

    const { getRightData } = props
    const { isLoading } = props.GetData

    const [DepartmentValue, setDepartmentValue] = useState('')

    //注意： useState([])里面的[]表示空数组，为 '' , useState()括号里面什么都没有，未定义，为undefined
    const [mockdata, setmockdata] = useState([])  
    const data_1 = [{
        key: Math.random().toString().slice(-3),
        drname: '',
        drtype_nm: ''
    }]
    const data = data_1  //这属于浅拷贝，两个指向同一个地址，任意一个对值进行修改都会对另一个造成影响
    // const data = []  //这属于赋值，error: "data" is read-only,若有了初始值，那么就不能通过赋值重新修改
    // data = data_1

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
        setmockdata(data)
    }

    const randomNumber = Math.random().toString().slice(-8)

    useMemo(()=>{
        console.log("随机数",Math.random().toString().slice(-5)+Date.now())
    },[])
    

    const columns=[
        {
            title: "入室科室",
            className:"InDepartMent",
            dataIndex: "drname",
            ellipsis: true,
            render: (text,record)=>{
                return <Select
                    labelInValue
                    style={{ width: 120 }}
                    // defaultValue={record.drname}
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
            className: "OutDepartMent",
            ellipsis: true,
            render: (text,record)=>{
                if(DepartmentValue.label==='外科'){
                    return <Select
                        labelInValue
                        // defaultValue={{ key: '' }}
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
                        // defaultValue={{ key: '' }}
                        style={{ width: 120 }}
                        onChange={OutDepartmentValue}
                    >
                        <Option value="jack">内科-中药房</Option>
                        <Option value="lucy">内科-西药房</Option>
                    </Select>
                }
                else{
                    return <Select
                        // defaultValue=''
                        style={{ width: 120 }}
                    >
                    </Select>
                }
            }
        },
    ]


    return(
        <div className="left_container">
            <Row>
                <Col span={24} style={{display: 'flex', justifyContent: 'space-between', height: '35px'}}>
                    <div><span className="takeMedical">科室选择</span></div>
                    <div><Button onClick={handleSearch} className="newAddQuestPaper"><Icon type="plus" />新增申请单</Button></div>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        rowKey={record=>record.key}
                        columns={columns}
                        // scroll={{x:500}}
                        dataSource={mockdata}
                        pagination={false}
                        locale = {mockdata==''? {emptyText:"请选择科室"}:''}

                    />
                </Col>
            </Row>
        </div>
    )
}