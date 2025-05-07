import React from "react";
import styles from "../../styles/singlepage.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import data from "../api/art";
import dynamic from "next/dynamic";
import Swiperslider from '../../components/Swiperslider';

export function getServerSideProps(context) {
  const { id } = context.params;
  
  // Filter your data based on the dynamic route parameter (id)
  const newdata = data.filter((art) => Number(art.id) === Number(id));

  return {
    props: { newdata, id },
  };
}

const Page = ({ newdata, id }) => {
  console.log(id, newdata);

  return (
    <div>
      <Navbar />
      <div className={styles.background}></div>
      <div>
        <h1 className={styles.heading}>{newdata[0]?.heading}</h1>
      </div>
      <div className={styles.flex}>
        <div className={styles.topartistcontainer}>
          <div className={styles.imagesartistcontainer}>
            <Image
              className={styles.artistprofileimages}
              src={newdata[0]?.url[0]}
              width={800}
              height={700}
              alt="sidead"
            />
            <p className={styles.credit}>Image Credit - {newdata[0]?.credit}</p>
          </div>
          <div>
            <p>{newdata[0]?.info.map((data, index) => <div key={index}>{data}<br/><br/></div>)}</p>
          </div>
          <div>
            <div className={styles.gallery}>Gallery</div>
            <Swiperslider newdata={newdata}/>
          </div>
        </div>
        <div className={styles.Adcontainer}>
          <Image
            className={styles.adimg}
            src={"/ads/TAGad/img.jpg"}
            width={300}
            height={700}
            alt="sidead"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
