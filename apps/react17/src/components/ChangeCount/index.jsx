import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import Actions from '@srcR/redux/actions/count'
import { Button } from 'antd'
// import ElementTools from '@utils/ElementTools'

const App = () => {
  return (
    <>
      <h2>asas</h2>
    </>
  )
}

const Count = ({ addCount }) => {
  const handleAddCount = () => {
    addCount()
  }
  const handleMountNode = () => {
    // ElementTools.mount(ReactDOM, 'myFirstDiv', <App />)
    const node = document.getElementById('myFirstDiv')
    ReactDOM.createPortal(<App />, node)
  }
  return (
    <>
      <Button type="primary" onClick={handleAddCount}>
        Add
      </Button>
      <Button type="primary" onClick={handleMountNode}>
        Mount
      </Button>
      <handleMountNode />
    </>
  )
}

const mapDispatch = (dispatch) => ({
  addCount: (payload) => Actions.AddCount(payload)(dispatch)
})
export default connect(null, mapDispatch)(Count)
