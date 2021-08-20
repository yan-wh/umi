import LeavePatientListComponent from '@/components/PatientList/LeavePatientList'

export default function LeavePatientListContainer(props){

    const {isClickLeavePatientList} = props

    return(
        <LeavePatientListComponent isClickLeavePatientList={isClickLeavePatientList}/>
    )
}