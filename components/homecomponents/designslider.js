import styles from '../../styles/design.module.css'
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import data1 from '../../pages/api/design'
import Link from 'next/link';

const designslider = () => {

  let arr = [];
  data1.map(data => {
    if(data.category === "Featured" || data.category === "Emerging" || data.category === "Spotlight"){
      arr.push(data)
    }
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.slider}>
    <Slider  {...settings}>
    { arr.reverse().slice(0,7).map(design =>{
          return(
<Link key={design.id} className={styles.link} href={`/DesignPage/${design.id}`}>
          <div>
                    <div className={styles.imgcontainer}>
                      <Image className={styles.img} src={design.url[0]} width={1000} height={500} alt="image"/>
                    </div>
                    <div className={styles.info}>
                      <h2>{design.heading}</h2>
                      <p>{design.info[0].slice(0,250)}...</p>
                    </div>
                  </div></Link>)}
    )}
    </Slider>
    </div>
  )
}

export default designslider;