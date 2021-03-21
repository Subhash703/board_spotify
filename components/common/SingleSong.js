import React from 'react'
import styles from './SingleSong.module.css'
import { Rate } from 'antd'
import Router from 'next/router'

function SingleCourse({
  image,
  courseName,
  instructorName,
  rating,
  ratingCount,
}) {
  const handleChangeCourse = (courseName) => {
    console.log('clicked')
    Router.push(`/learn/${courseName}`)
  }
  return (
    // <div
    //   className={styles.sc__course_wrapper}
    //   onClick={(courseName) => handleChangeCourse(courseName)}
    // >
    //   <div className={styles.course_img}>
    //     <i className='fas fa-play play-icon'></i>
    //     <img className={styles.sc_cover_image} src={image} alt={courseName} />
    //   </div>
    //   <div className={styles.course_detail}>
    //     <div
    //       style={{
    //         whiteSpace: 'nowrap',
    //         overflow: 'hidden',
    //         textOverflow: 'ellipsis',
    //       }}
    //     >
    //       <span className={styles.course_title}>{courseName}</span>
    //     </div>
    //     <div className={styles.instructor_name}>{instructorName}</div>
    //     {/* <div className={styles.course_rating}>
    //       {rating}/5 <Rate allowHalf value={rating} disabled /> ({ratingCount})
    //     </div> */}

    //   </div>
    // </div>
    <div className={styles.sc__song_wrapper}>
      <div className={styles.sc_song_img}>
        <i className={(styles.play_icon, ['fas fa-play'])}></i>
        <img
          className={styles.sc_cover_img}
          src='https://source.unsplash.com/1600x900/?songs'
          alt=''
        />
      </div>
      <div className={styles.sc_song_detail}>
        <span className={styles.name}> Covers, Vol.2 </span>
        <div className={styles.artist_name}>Sleeping At Last</div>
      </div>
    </div>
  )
}

export default SingleCourse
