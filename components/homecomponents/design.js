import styles from '../../styles/design.module.css';
import Designslider from './designslider'

const design = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.designheading}>
        Design
      </h1>       
      <hr className={styles.horizontalline}/>
      <Designslider />

    </div>
  )
}

export default design
