import React from 'react'
import Image from 'next/image'
import styles from '../../styles/eventslide.module.css'
import Link from 'next/link'

const artsection = ({data4}) => {

  return (
    <div className={styles.container}>
    {data4.reverse().slice(0,3).map(data => {
      return(
      <Link className={styles.link} href={`/NewsPage/${data.id}`}>
      <div key={data._id} className={styles.card}>
      <div className={styles.imgcontainer}>
        {data.url[0] && <Image className={styles.img} src={data.url[0]} width={500} height={350}/>}
      </div>
       {data.details && <div className={styles.info}>
          <h2>{data.heading}</h2>
          {data?.details?.[0] && <h5>Dates : {data.details[0]}</h5>}
          {data?.details?.[1] && <p>Venue : {data.details[1]}</p>}
       </div>}
      </div>
      </Link>
      )
    })}
    </div>
  )
}

export default artsection