import React from 'react'
import { connect } from 'react-redux'
import Actions from '@srcR/redux/actions/count'
import { Button } from 'antd'

const Count = ({ addCount }) => {
  const handleAddCount = () => {
    addCount()
  }
  return (
    <Button type="primary" onClick={handleAddCount}>Add</Button>
  )
}

const mapDispatch = (dispatch) => ({
  addCount: (payload) => Actions.AddCount(payload)(dispatch)
})
export default connect(null, mapDispatch)(Count)