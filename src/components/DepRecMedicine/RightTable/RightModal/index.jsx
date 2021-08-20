import {Modal} from 'antd'

function RightModal(props){

    const {isModelOpen,handleSwitchModelOpen} = props

    return(
        <Modal
          title="Basic Modal"
          visible={isModelOpen}
          onOk={handleSwitchModelOpen}
          onCancel={handleSwitchModelOpen}
        >
          ...
        </Modal>
    )
}
export default RightModal