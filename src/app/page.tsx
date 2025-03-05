"use client";
import styles from "./page.module.css";
// import RemiCard from "./components/card";
import TabsServices from "./components/tabs";
import Contact from "./components/contact";
import MapW from "./components/map";

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
            <h2>Qu'est-ce qu'Optic House ?</h2>
            <p>
              Optic House est un établissement de santé spécialisé dans la fabrication, la vente et l'adaptation de lunettes, 
              de lentilles de contact et d'autres dispositifs optiques. Nous conseillons nos patients sur le choix 
              des corrections visuelles en fonction de leurs besoins, réalisons des examens de la vue de base et assurons 
              un suivi attentif de l'ajustement des lunettes ou des lentilles. Notre équipe offre un service rapide, 
              efficace et courtois pour garantir la satisfaction de chaque patient. Nous travaillons en étroite 
              collaboration avec les ophtalmologues pour offrir des solutions adaptées à la correction de la vision.
            </p>
          </div>
        </section>

        <div id="services"></div>
        <TabsServices />

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
