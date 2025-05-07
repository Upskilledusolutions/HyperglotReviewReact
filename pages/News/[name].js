import Navbar from '../../components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/list.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import data from '../api/newsnevent'

export default function news() {
  let itemdata = [];
  data.filter(data=>{if(data.category === "Art Events"){itemdata.push(data)}})

  const router = useRouter();
  const { name } = router.query;
  const subcategory = name?.split('_').join(' ');
  itemdata = itemdata.reverse()

  return (
    <div>
        <Navbar />
            <div className={styles.background}></div> 
            <div className={styles.bigcontainer}>
            <h1 className={styles.heading}>{subcategory}</h1>
            <div className={styles.flex}>
            <div className={styles.container}>
            <div className={styles.topcontainer}>
              <div className={styles.topimgcontainer}>
                <Image className={styles.topbannerimg} src={itemdata[0].url[0]} width={700} height={400} alt="image" />
              </div>
            <div className={styles.topinfo} key={itemdata[0]._id}>
              <Link className={styles.link} href={`/NewsPage/${itemdata[0]._id}`}><h3>{itemdata[0].heading} {itemdata[0].name && "-"} {itemdata[0].name}</h3></Link>
              <p>{itemdata[0].info[0].slice(0,400)}...</p>
              </div>
            </div>
            {itemdata.slice(1).map((data) => {
      return(
          <div key={data._id} className={styles.listcontainer}>
            <div className={styles.sublistimgcontainer}>
              <Image className={styles.sublistimg} src={data.url[0]} width={400} height={400} alt="image" />
            </div>
            <div className={styles.listinfo}>
              <Link className={styles.link} href={`/NewsPage/${data._id}`}><h3>{data.heading} {data.name && "-"} {data.name}</h3></Link>
              <p>{data.info[0].slice(0,150)}...</p>
              <Link className={styles.link} href={`/NewsPage/${data._id}`}><button className={styles.button}>Read More</button></Link>
            </div>
          </div>
        )
    })}
            </div>
            <div className={styles.Adcontainer}>
              <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
            </div>
            </div>
            </div>
        <Footer />
    </div>
  )
}