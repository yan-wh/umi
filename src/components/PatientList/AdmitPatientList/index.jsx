

export default function AdmitPatientListComponent(props){

    const {isClickAdmitPatientList} = props

    return(
        isClickAdmitPatientList?
        <div>入院患者列表</div>
        :
        ''
    )
}