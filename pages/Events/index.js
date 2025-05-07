import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/event.module.css'
import Slider from '../../components/eventpage/eventslider'
import Slide from '../../components/eventpage/eventslide'
import Artsection from '../../components/eventpage/artsection'
import Litsection from '../../components/eventpage/literaturesection'
import data1 from '../api/art'
import data2 from '../api/literature'
import data3 from '../api/newsnevent'

const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.background}></div> 
      <Slider />
      <div className={styles.bigcontainer}>
        <div>
          <h1 className={styles.heading}>Upcoming Events</h1>
        </div>
        <Slide data1={data1}/>
        <div>
          <h1 className={styles.heading}>Art Events</h1>
        </div>
        <Artsection data4={data2}/>
        <div>
          <h1 className={styles.heading}>Literary Events</h1>
        </div>
        <Litsection data4={data3}/>
      </div>

      <Footer />
    </div>
  )
}

export default index