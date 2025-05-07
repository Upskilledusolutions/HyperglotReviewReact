import styles from "../../styles/category.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data1 from "../api/design";
import Image from "next/image";
import Link from "next/link";

const category = () => {
  let wholedata = [];
  wholedata.push(...data1);
  const artarr = [
    "Featured Brands",
    "Emerging Brands",
    "Designers in Spotlight",
    "Virtual Gallery",
  ];
  let featureddesign = [];
  let emergingdesign = [];
  let Spotlightdesign = [];

  wholedata.filter((data) => {
    if (data.category === "Featured") {
      featureddesign.push(data);
    } else if (data.category === "Emerging") {
      emergingdesign.push(data);
    } else if (data.category === "Spotlight") {
      Spotlightdesign.push(data);
    } 
    
  });

  return (
    <div>
      <Navbar />
      <div className={styles.background}></div>
      <h1 className={styles.heading}>Design</h1>
      <div className={styles.categoriessec}>
        {artarr.map((data) => {
          return (
            <div key={data} className={styles.cat}>
              {data}
            </div>
          );
        })}
      </div>

      <div>
        <h1 className={styles.subheading}>Featured Brands</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            {featureddesign && <div>
              <Image
                className={styles.img}
                src={featureddesign[featureddesign.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {featureddesign[featureddesign.length - 1].credit}
              </p>
              <Link className={styles.link}
                      href={`/SinglePage/${featureddesign[featureddesign.length - 1].id}`}
                    >
              <p className={styles.name}>
                {featureddesign[featureddesign.length - 1].heading}
              </p>
              </Link> 
              <p className={styles.desc}>
                {featureddesign[featureddesign.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {featureddesign && featureddesign
              .reverse()
              .splice(1,3)
              .map((data) => (
                <div key={data.id} className={styles.listcontainer}>
                  <div className={styles.sublistimgcontainer}>
                    <Image
                      className={styles.sublistimg}
                      src={data.url[0]}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  </div>
                  <div className={styles.listinfo}>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <button className={styles.button}>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
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
      </div>

      <div>
        <h1 className={styles.subheading}>Emerging Brands</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            {emergingdesign && <div>
              <Image
                className={styles.img}
                src={emergingdesign[emergingdesign.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {emergingdesign[emergingdesign.length - 1].credit}
              </p>
              <Link className={styles.link}
                      href={`/SinglePage/${emergingdesign[emergingdesign.length - 1].id}`}
                    >
              <p className={styles.name}>
                {emergingdesign[emergingdesign.length - 1].heading}
              </p>
              </Link>
              <p className={styles.desc}>
                {emergingdesign[emergingdesign.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {emergingdesign && emergingdesign
              .reverse()
              .splice(1,3)
              .map((data) => (
                <div key={data.id} className={styles.listcontainer}>
                  <div className={styles.sublistimgcontainer}>
                    <Image
                      className={styles.sublistimg}
                      src={data.url[0]}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  </div>
                  <div className={styles.listinfo}>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <button className={styles.button}>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
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
      </div>


      <div>
        <h1 className={styles.subheading}>Designers in Spotlight</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            {Spotlightdesign && <div>
              <Image
                className={styles.img}
                src={Spotlightdesign[Spotlightdesign.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {Spotlightdesign[Spotlightdesign.length - 1].credit}
              </p>
              <Link className={styles.link}
                      href={`/SinglePage/${Spotlightdesign[Spotlightdesign.length - 1].id}`}
                    >
              <p className={styles.name}>
                {Spotlightdesign[Spotlightdesign.length - 1].heading}
              </p>
              </Link>
              <p className={styles.desc}>
                {Spotlightdesign[Spotlightdesign.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {Spotlightdesign && Spotlightdesign
              .reverse()
              .splice(1,3)
              .map((data) => (
                <div key={data.id} className={styles.listcontainer}>
                  <div className={styles.sublistimgcontainer}>
                    <Image
                      className={styles.sublistimg}
                      src={data.url[0]}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  </div>
                  <div className={styles.listinfo}>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <button className={styles.button}>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
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
      </div>

      <Footer />
    </div>
  );
};

export default category;
