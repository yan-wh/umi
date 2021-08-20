
import DepRecMedicineComponent from '@/components/DepRecMedicine'

export default function DepRecMedicineContainer(props){

    const {isClickDepRecMedicine} = props

    return(
        <DepRecMedicineComponent isClickDepRecMedicine={isClickDepRecMedicine}/>
    )
}