"use client";
import * as React from "react";
import styles from "./Home.module.css";
import { Layout } from "../../components/Layout";

const EconomizaeQuemSomos: React.FC = () => {
  return (
    <Layout className={styles.economizae}>
    <main className="overflow-hidden bg-neutral-100">
      <section className="flex flex-col items-center px-20 pt-16 pb-32 w-full text-base tracking-wide text-center text-stone-900 max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[836px]">
          <h1 className="self-stretch text-5xl font-bold tracking-widest leading-tight max-md:max-w-full max-md:text-4xl">
            somos a economizaê
          </h1>
          <p className="mt-6 leading-6 w-[474px] max-md:max-w-full">
            um sistema feito pra quem quer economizar de verdade e achar os
            melhores preços nos mercados da região.
          </p>
          <p className="mt-6 leading-6 w-[474px] max-md:max-w-full">
            a ideia nasceu quando os fundadores perceberam que, assim como eles,
            muita gente tava precisando economizar no dia a dia. Então por que
            não facilitar isso pra todo mundo?
          </p>
          <p className="mt-6 max-md:max-w-full">
            bora economizar juntos? Vem com a gente!
          </p>
        </div>
      </section>

      <section className="flex flex-wrap gap-10 justify-center items-center px-20 py-32 w-full bg-green-700 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <article className="self-stretch my-auto text-base tracking-wide leading-6 text-white min-w-60 w-[426px] max-md:max-w-full">
          <h2 className="text-2xl font-bold tracking-wider leading-tight">
            simples de usar
          </h2>
          <p className="mt-6 max-md:max-w-full">
            por meio do nosso site, somos seu comparador de preços dos mercados
            da região. nosso objetivo é simples: te ajudar a decidir onde vale
            mais a pena fazer suas compras.
          </p>
          <p className="mt-6 max-md:max-w-full">
            aqui, você compara os preços rapidinho e acompanha os melhores
            valores com base na sua lista.
          </p>
          <p className="mt-6 max-md:max-w-full">
            tudo pra facilitar sua vida e te ajudar a economizar de verdade, sem
            complicação!
          </p>
        </article>
        <div className="relative self-stretch my-auto min-w-60 w-[604px] max-md:max-w-full">
          <div className="flex absolute top-2/4 z-0 max-w-full rounded-full -translate-y-2/4 aspect-[1/1] bg-neutral-100 h-[500px] min-h-[500px] right-[-60px] translate-x-[0%] w-[500px]" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/852244925a60e56df94a50ec7b4443dd0bdda57f?placeholderIfAbsent=true"
            alt="Feature illustration"
            className="object-contain z-0 w-full aspect-[1.8] max-md:max-w-full"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-20 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[836px]">
          <h2 className="text-2xl font-bold tracking-wider leading-tight text-center text-stone-900 max-md:max-w-full">
            vamos começar?
          </h2>
          <button className="overflow-hidden gap-2.5 self-center px-8 py-4 mt-6 text-base font-semibold tracking-wide text-white bg-green-700 rounded-[38px] max-md:px-5">
            ver os melhores mercados
          </button>
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default EconomizaeQuemSomos;
