import AdmitPatientListComponent from '@/components/PatientList/AdmitPatientList'

export default function AdmitPatientListContainer(props){

    const {isClickAdmitPatientList} = props

    return(
        <AdmitPatientListComponent isClickAdmitPatientList={isClickAdmitPatientList}/>
    )
}