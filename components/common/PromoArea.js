import React from 'react'
import styles from './PromoArea.module.css'
import Link from 'next/link'
import { Button } from 'antd'

function PromoArea() {
  return (
    <div className={styles.promo__wrapper}>
      <h1 className={styles.promo_heading}>
        We provide the best courses on the Internet
      </h1>
      <p className={styles.promo_text}>
        The recommended way to learn on Techlious is not through just courses,
        but following learning paths. Pick a learning path below and start:
      </p>
      <Button type='success' size='middle'>
        <Link href='#faveroite'>Music You will Love to hear! </Link>
      </Button>
    </div>
  )
}

export default PromoArea
