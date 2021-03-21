import React from 'react'

import styles from './CustomLayout.module.css'
import Sidebar from './Sidebar'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Content from './Content'

function CustomLayout({ songList }) {
  return (
    <div className={styles.layout_wrapper}>
      <Sidebar />
      <Content style={styles.layout_content} />
    </div>
  )
}

export default CustomLayout
