import React from 'react'
import Count from '@srcR/components/Count'
import ChangeCount from '@srcR/components/ChangeCount'
import styles from './index.module.scss'

export default () => {
  return (
    <div className={styles.container}>
      <Count />
      <ChangeCount />
    </div>
  )
}
