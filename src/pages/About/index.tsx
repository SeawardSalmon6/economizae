import { Layout } from "../../components/Layout";
import styles from "./About.module.css";

export function About() {
  return (
    <Layout>
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h1>somos a economizaê</h1>
          <p>
            um sistema feito pra quem quer economizar de verdade e achar os
            melhores preços nos mercados da região.
          </p>
          <p>
            a ideia nasceu quando os fundadores perceberam que, assim como
            eles, muita gente tava precisando economizar no dia a dia. Então
            por que não facilitar isso pra todo mundo?
          </p>
          <p>
            bora economizar juntos? Vem com a gente!
          </p>
        </div>
      </section>

      <section className={styles.featureSection}>
        <article className={styles.featureArticle}>
          <h2>simples de usar</h2>
          <p>
            por meio do nosso site, somos seu comparador de preços dos
            mercados da região. nosso objetivo é simples: te ajudar a decidir
            onde vale mais a pena fazer suas compras.
          </p>
          <p>
            aqui, você compara os preços rapidinho e acompanha os melhores
            valores com base na sua lista.
          </p>
          <p>
            tudo pra facilitar sua vida e te ajudar a economizar de verdade,
            sem complicação!
          </p>
        </article>
        <div className={styles.featureImageContainer}>
          <div className={styles.featureBackgroundCircle} />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/852244925a60e56df94a50ec7b4443dd0bdda57f?placeholderIfAbsent=true"
            alt="Feature illustration"
            className={styles.featureImage}
          />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>vamos começar?</h2>
          <a className={styles.ctaButton}>
            ver os melhores mercados
          </a>
        </div>
      </section>
    </Layout>
  );
}
