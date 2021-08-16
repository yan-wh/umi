import {Modal} from 'antd'

function RightModalAdd(props){

    const {isModelOpen,handleSwitchModelOpen} = props
    return(
        <Modal
          title="Basic Modal"
          visible={isModelOpen}
          onOk={handleSwitchModelOpen}
          onCancel={handleSwitchModelOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    )
}
export default RightModalAdd