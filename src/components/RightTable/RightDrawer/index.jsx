import {Drawer} from 'antd'

function RightDrawer(props){
    const {isDrawerOpen,handleSwitchDrawerOpen} = props

    return(
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={handleSwitchDrawerOpen}
          visible={isDrawerOpen}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
    )
}
export default RightDrawer