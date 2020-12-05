import React from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'

const Count = (state) => {
  return (
    <h2>
      It is React Count =&nbsp;
      <span className={styles.count}>{state.Count.value}</span>
    </h2>
  )
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps)(Count)