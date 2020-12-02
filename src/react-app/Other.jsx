/*
 * @Author: your name
 * @Date: 2020-12-02 13:50:31
 * @LastEditTime: 2020-12-02 15:51:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MyNote/vue-react/other.js
 */

import React, { useEffect, useState } from 'react'

const Other = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      const c = Math.floor(Math.random(0, 1) * 100)
      setCount(c)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  })
  return <h2>It is React, current Count is <span style={{ color: 'red' }}>{ count }</span></h2>
}
export default Other