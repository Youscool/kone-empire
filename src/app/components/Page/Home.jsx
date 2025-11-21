
"use client";

import Image from "next/image";
import Link from "next/link";

// React Icons
import { FaBars, FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import CounterUp from "../sections/Counterup";
// Librairie d'animation
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Sendmail from "../form/Sendmail";
import Footer from "../Footer/Footer";
export default function HomePage() {
  useEffect(() => {
AOS.init({
  duration: 800,
  once: true,
});
  }, []);
  const ServiceDatas = [
    {
      id: 1,
      title: "Assistance Visa",
      detail: "lorem upsum",
    },
    {
      id: 2,
      title: "Réservation billet",
      detail: "lorem upsum",
    },
    {
      id: 3,
      title: "Hadj & Oumrah",
      detail: "lorem upsum",
    }
  ]
  return (
    <>
      {/* ====== Header ====== */}
      <header id="header">
        <div className="wrapper-header flex container">
          <Link id="logo" href="#home">
            <Image src="/images/logo.png" width={120} height={50} alt="Logo" />
          </Link>

         <Navbar position={"fixed-top"}/>

          <Link id="openmenu" className="btn" href="#">
            <FaBars />
          </Link>
        </div>
      </header>

      {/* ====== MAIN ====== */}
      <main>
        {/* Header Content */}
        <div className="wrapper-header-img d-flex flex-column">
          <h1 className="align-center" data-aos="fade-up">
            <span className="selected">Meilleure</span> Agence <br /> de voyage au Mali
          </h1>
          <Link href={"/prendre-rendez-vous"} className="btn btn-primary p-3">
             <i className="bi bi-calendar2-check me-2"></i>  Prendre Rendez-vous
          </Link>
        </div>

        {/* About Us */}
        <section id="aboutus" className="ptb" data-aos="fade-right" data-aos-delay="200">
          <div className="wrapper-aboutus container flex">
            <div className="aboutus-img">
              <Image src="/images/portfolio-5.webp" width={500} height={800} className="img-fluid rounded" alt="About us" />
              <div className="experiense align-center">
                <span className="counter">12</span>
                <p>ans <br /> D'experience</p>
              </div>
            </div>

            <div className="aboutus-content" data-aos="fade-left" data-aos-delay="800">
              <h2>À propos</h2>
              <p>Chez <span className="selected fw-bold">Kone Empire</span>, nous accompagnons
                chaque voyageur avec professionnalisme, transparence et sérénité.<br />
                Spécialisés dans <span className="fw-bold">l'assistance visa</span>, la <span className="fw-bold">réservation de billets d'avion,</span>
                la <span className="fw-bold">réservation d'hotels,</span> ansi que l'organisation de <span className="fw-bold">Hadj et Oumrah,</span>
                notre mission est de simplifier toutes vos démarches de voyage.
              </p>

              <div className="wrapper-founder flex">
                <Image src="/images/founder.webp" width={100} height={100} alt="Founder" />
                <div>
                  <h3>Yacinthe Koné</h3>
                  <p>PDG</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="ptb">
          <div className="container align-center">
            <h2>Nos Services</h2>
          </div>

          <div className="wrapper-services container flex">
            {ServiceDatas.map((serv) => (
              <article key={serv.id} data-aos="fade-up" data-aos-delay={`${serv.id}00`}>
                <Image src={`/images/service-${serv.id}.png`} width={120} height={120} alt="Service" />
                <h3>{serv.title}</h3>
                <p>{serv.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="ptb">
          <div className="container align-center">
            <h2>Réalisation</h2>
          </div>

          <div className="wrapper-portfolio container">
            <div className="row grid flex popup-gallery">
              {[1, 2, 3, 4, 5].map(i => (
                <div className="col-12 col-md-6 col-lg-3 element-item" key={i}>
                  <Link href={`/images/portfolio-${i}.webp`} className="w-100 h-100">
                    <Image
                      src={`/images/portfolio-${i}.webp`}
                      width={400}
                      height={400}
                      style={{ objectFit: "cover" }}
                      className="rounded"
                      alt="Portfolio" />
                    <div><FaPlus /></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Counterup */}
        <CounterUp />

        {/* Pricing */}
        <section id="pricing" className="ptb">
          <div className="container align-center">
            <h2>Tarifs</h2>
          </div>

          <div className="wrapper-pricing flex container">
            {[
              { title: "Regular", price: "400.000f" },
              { title: "Standard", price: "500.000f" },
              { title: "Premium", price: "600.000f" }
            ].map((p, i) => (
              <div className="single-pricing align-center" key={i}>
                <h3>{p.title} Package</h3>
                <p className="price">{p.price}</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>

                <ol>
                  {[1, 2, 3, 4, 5].map(j => (
                    <li key={j}><FaCheck /> Lorem ipsum dolor sit.</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ====== Footer / Contact ====== */}
      <Footer/>
    </>
  );
}

