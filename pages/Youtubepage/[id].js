import React from 'react'
import styles from '../../styles/youtube.module.css'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import youdata from "../api/youtube";

export function getServerSideProps(context) {
  const { id } = context.params;

  return {
    props: { id },
  };
}

const youtube = ({ id }) => {
  
  console.log(youdata.filter((art) => Number(art.id) === Number(id)))
  return (
    <div>
    <Navbar />
    <div className={styles.background}></div> 
    <div>
      <h1 className={styles.heading}>{youdata[Number(id-1)]?.title}</h1>
    </div>
    <div className={styles.flex}>
          <div className={styles.topcontainer}>
            <div className={styles.topimgcontainer}>
              <iframe class={styles.video} width="800" height="450" src={youdata[Number(id-1)]?.video} title={youdata[Number(id-1)]?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div className={styles.info}>
              <h4 className={styles.title}>{youdata[Number(id-1)]?.title}</h4>
              <p className={styles.desc}>{youdata[Number(id-1)]?.desc}</p>
              </div>
            </div>
          </div>
            <div className={styles.Adcontainer}>
                <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
            </div>
          </div>
    <Footer />
    </div>
  )
}

export default youtube