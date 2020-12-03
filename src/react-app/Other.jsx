/*
 * @Author: your name
 * @Date: 2020-12-02 13:50:31
 * @LastEditTime: 2020-12-03 15:30:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/vue-react/other.js
 */

import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'

const Other = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      const c = Math.floor(Math.random() * 100)
      setCount(c)
    }, 600)
    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <h2>
      It is React, current Count is&nbsp;
      <span className={styles.count}>{ count }</span>
    </h2>
  )
}
export default Other