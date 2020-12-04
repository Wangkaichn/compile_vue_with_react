/*
 * @Author: your name
 * @Date: 2020-12-04 09:36:12
 * @LastEditTime: 2020-12-04 14:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/CompileVueWithReact/apps/react17/src/components/Other/index.js
 */

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import action from '@src/redux/action/count'
import styles from './index.module.scss'

const Other = ({ setCountToStore }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      const _count = Math.floor(Math.random() * 100)
      setCount(_count)
      setCountToStore(_count)
    }, 1600)
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <>
      <h2>
        It is React, current Count =&nbsp;
        <span className={styles.count}>{count}</span>
      </h2>
    </>
  )
}
const mapDispatchToProps = (dispatch) => ({
  setCountToStore: (payload) => action.setCount(payload)(dispatch)
})
export default connect(null, mapDispatchToProps)(Other)