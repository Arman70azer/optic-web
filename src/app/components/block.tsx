import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

export default function BlocImage() {
  const blocRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Déclenche l'effet quand 30% de l'élément est visible
    );

    if (blocRef.current) {
      observer.observe(blocRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={blocRef} className={`${styles.container_images} ${isVisible ? styles.show : ""}`}>
      <div className={styles.image1}></div>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
    </div>
  );
}
