import React from 'react'
import Image from 'next/image'
import styles from '../../styles/eventslide.module.css'
import Link from 'next/link'

const eventslide = ({data1}) => {

  return (
    <div className={styles.container}>
    {data1.reverse().slice(0,3).map(data => {
      return(
        <Link className={styles.link} href={`/EventPage/${data._id}`}>
        <div key={data.id} className={styles.card}>
      <div className={styles.imgcontainer}>
        {data.url[0] && <Image className={styles.img} src={data.url[0]} width={500} height={350}/>}
      </div>
       <div className={styles.info}>
          <h2>{data.heading}</h2>
          {data?.details?.[0] && <h5>Dates : {data.details[0]}</h5>}
          {data?.details?.[1] && <p>Venue : {data.details[1]}</p>}
       </div>
      </div>
        </Link>

      )
    })}
    </div>
  )
}

export default eventslide