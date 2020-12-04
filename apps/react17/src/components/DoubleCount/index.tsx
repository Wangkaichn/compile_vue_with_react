import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import styles from './index.module.scss'

const renderNode = (count) => {
  return (
    <h2>
      It is Portal from React-Store, DOM Created From React, double Count =&nbsp;
      <span className={styles.count}>{count}</span>
    </h2>
  )
}

const DoubleCount = ({ state }) => {
  const [count, setCount] = useState(state.count.value)
  const [dom, setDom] = useState()
  useEffect(() => {
    const newDom = document.createElement('div')
    newDom.setAttribute('div', 'ReactPortals')
    document.body.appendChild(newDom)
    setDom(newDom)
  }, [])
  useEffect(() => {
    setCount(state.count.value)
  }, [state])
  if (dom) {
    return ReactDOM.createPortal(renderNode(count * 2), dom)
  }
  return null
}

const matStateToProps = (state, props) => {
  return { state, props }
}
export default connect(matStateToProps)(DoubleCount)