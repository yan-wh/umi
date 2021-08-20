

export default function LeavePatientListComponent(props){

    const {isClickLeavePatientList} = props

    return(
        isClickLeavePatientList?
        <div>出院患者列表</div>
        :
        ''
    )
}