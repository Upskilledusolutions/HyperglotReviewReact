import Image from 'next/image'
import styles from '../../styles/eventslider.module.css'
import { useEffect, useState } from 'react'


const [image1, image2, image3, image4, image5] = [ "/eventimages/TAG/TAG.png","/eventimages/dhoomimal/dhoomimal.jpg",
"/eventimages/kolkatalitmeet/kolkatalitmeet (3).jpg","/eventimages/muskanlitfest/muskaan1.jpg"
,"/eventimages/indiadesign2023/indiadesign2023.jpg"
]



const heroslider = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4, image5])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])


  return (
    <div className={styles.slideshowcontainer}>
      <Image className={styles.sliderimg} width={2400} height={1600} src={allImages[selectedImage]} alt="image"/> <br />
    </div>
  )
}

export default heroslider