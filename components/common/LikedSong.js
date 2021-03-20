import React from 'react'
import styles from './LikedSong.module.css'
import { Col, Divider, Row } from 'antd'

import SingleSong from './SingleSong'

function LikedSong() {
  return (
    <div className={styles.courses_wrapper} id='courses'>
      <h2 className={styles.courses_title}>Front End Development</h2>
      <div className={styles.course_category}>
        <div className={styles.container}>
          <SingleSong
            image='https://source.unsplash.com/1600x900/?technology'
            courseName='Latest PHP,Laravel for bigginer'
            instructorName='Mr Prasad'
            rating={5}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Front End Development'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Business and marcketing'
            instructorName='Mr Joe'
            rating={5}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Salse and Marcketing Secrets'
            instructorName='Mr Joe'
            rating={5}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Mern Stack with some amazing projects'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />
        </div>
      </div>
      <Divider />
      <div className={styles.course_category}>
        <h2 className={styles.courses_title}>Back End Development</h2>
        <div className={styles.container}>
          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?websites'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?websites'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?websites'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?websites'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />
        </div>
      </div>
      <Divider />
      <div className={styles.course_category}>
        <h2 className={styles.courses_title}>Machine Learning</h2>
        <div className={styles.container}>
          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />
        </div>
      </div>
      <Divider />
      <div className={styles.course_category}>
        <h2 className={styles.courses_title}>Data Science</h2>
        <div className={styles.container}>
          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?life'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?technology'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?technology'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?machine'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?machine'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />

          <SingleSong
            image='https://source.unsplash.com/1600x900/?machine'
            courseName='Advance React/Redux Course'
            instructorName='Mr Joe'
            rating={4}
            ratingCount={2304}
          />
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default LikedSong
