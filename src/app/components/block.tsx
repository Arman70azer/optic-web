import styles from "../page.module.css"; // Importation des styles CSS

export default function BlocImage() {
    return (
      <div className={styles.container_images}>
        <div className={styles.image1}></div>
        <div className={styles.image2}></div>
        <div className={styles.image3}></div>
        <div className={styles.image4}></div>
      </div>
    );
  }
  
