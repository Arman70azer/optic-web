import styles from "./page.module.css";

import RemiCard from "./components/card";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section className={styles.headerSectionFull_title}>
        <h1 className={styles.title}>Optic House</h1>
        <div className={styles.navLinks}>
          <button>Services</button>
          <button>Contact</button>
        </div>
      </section>

        <section className={styles.section_with_background}>
          <div className={styles.content}>
            <h2>Définition d'un Opticien</h2>
            <p>
              Un opticien est un professionnel de santé spécialisé dans la
              fabrication, la vente et l'adaptation de lunettes, de lentilles de
              contact et d'autres dispositifs optiques. Il conseille les
              patients sur les choix de corrections visuelles en fonction de leurs
              besoins, effectue des examens de la vue de base et assure le suivi de
              l'ajustement des lunettes ou des lentilles. L'opticien travaille en
              étroite collaboration avec les ophtalmologues pour offrir des solutions
              adaptées à la correction de la vision.
            </p>
          </div>
        </section>

        
          <RemiCard/>
        

        {/* <section className={styles.section_with_background}>
          <div className={styles.content}>
            <h2>Définition d'un Opticien</h2>
            <p>
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
             ffffffffffffffffffyyyyyyyyyyyyycgcgvcnvjkvkjvj
             lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjg
             jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhs
            </p>
          </div>
        </section> */}
      </main>
    </div>
  );
}
