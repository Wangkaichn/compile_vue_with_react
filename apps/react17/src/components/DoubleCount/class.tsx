import React, { useEffect, Component } from 'react'
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

class DoubleCount extends Component {
  [x: string]: any
  state = {
    count: null,
    newDom: null,
    timer: null
  }
  constructor (props) {
    super(props)
    const { value } = props.state.count
    this.state.count = value * 2
    this.state.newDom = document.createElement('div')
    this.state.newDom.setAttribute('div', 'ReactPortals')
    document.body.appendChild(this.state.newDom)
  }
  updateCount = (count) => {
    this.state.timer = setInterval(() => {
      this.setState({ count })
    }, 600)
  }
  componentDidMount(...a) {
    console.info(a)
  }
  componentWillUnmount() {
  }
  render() {
    return ReactDOM.createPortal(
      renderNode(this.state.count),
      this.state.newDom
    )
  }
}

const matStateToProps = (state, props) => {
  return { state, props }
}
export default connect(matStateToProps)(DoubleCount)