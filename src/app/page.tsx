"use client";
import styles from "./page.module.css";
// import RemiCard from "./components/card";
import TabsServices from "./components/tabs";
import Contact from "./components/contact";
import MapW from "./components/map";
import BlocImage from "./components/block";

export default function Home() {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,  // Décalage de 50px vers le haut
        behavior: 'smooth',  // Effet de défilement doux
      });
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.headerSectionFull_title}>
          <h1 className={styles.title} onClick={()=>handleScroll('start')}>Optic House</h1>
          <div className={styles.navLinks}>
            {/* Utilisation du gestionnaire de clics avec décalage */}
            <button onClick={() => handleScroll('services')}>Services</button>
            <button onClick={() => handleScroll('contact')}>Contact</button>
          </div>
        </section>

        <section className={styles.section_with_background} id="start">
          <div className={styles.content}>
            <h2>Optic House</h2>
            <p>
              "Le meilleur de l'optique"
            </p>
          </div>
        </section>

        <div id="services"></div>
        <TabsServices />

        <BlocImage/>

        <div className={styles.container} id="carte">

           {/* Mini-Map */}
          <div className={styles.map}>
            <MapW />
          </div>

          {/* Card du fondateur */}
          {/* <div className={styles.card}>
          <div className={styles.fondateur}>
            Fondateur:
          </div>
            <RemiCard />
          </div> */}
        </div>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
