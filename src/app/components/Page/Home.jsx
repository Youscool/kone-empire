export default function Home() {
    return<>
    "use client";

import Image from "next/image";
import Link from "next/link";

// React Icons
import { FaBars, FaXmark, FaCheck, FaFacebookF, FaInstagram, FaYoutube, FaDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPlus, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      {/* ====== Header ====== */}
      <header id="header">
        <div className="wrapper-header flex container">
          <Link id="logo" href="#home">
            <Image src="/images/logo.png" width={120} height={50} alt="Logo" />
          </Link>

          <nav id="navigation">
            <Link id="closemenu" href="#">
              <FaXmark />
            </Link>

            <ul className="menu">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#aboutus">About us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#team">Team</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>

          <Link id="openmenu" className="btn" href="#">
            <FaBars />
          </Link>
        </div>
      </header>

      {/* ====== MAIN ====== */}
      <main>
        {/* Header Content */}
        <div className="wrapper-header-img flex">
          <h1 className="align-center">
            <span className="selected">Creative</span> & Innovative <br /> Digital Agency
          </h1>
        </div>

        {/* About Us */}
        <section id="aboutus" className="ptb">
          <div className="wrapper-aboutus container flex">
            <div className="aboutus-img">
              <Image src="/images/aboutus.png" width={500} height={500} alt="About us" />
              <div className="experiense align-center">
                <span className="counter">12</span>
                <p>Years <br /> Experience</p>
              </div>
            </div>

            <div className="aboutus-content">
              <h2>About Creative Agency</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>

              <div className="wrapper-founder flex">
                <Image src="/images/founder.jpg" width={80} height={80} alt="Founder" />
                <div>
                  <h3>Richard Nautz</h3>
                  <p>Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="ptb">
          <div className="container align-center">
            <h2>Our Services</h2>
          </div>

          <div className="wrapper-services container flex">
            {[1,2,3,4,5,6].map(i => (
              <article key={i}>
                <Image src={`/images/services-${i}.png`} width={120} height={120} alt="Service" />
                <h3>Service {i}</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </article>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="ptb">
          <div className="container align-center">
            <h2>Our Portfolio</h2>
          </div>

          <div className="wrapper-portfolio container">
            <div className="filter flex">
              <button className="active-portfolio" data-name="*">All</button>
              <button data-name=".marketing">Marketing</button>
              <button data-name=".development">Development</button>
              <button data-name=".optimization">Optimization</button>
              <button data-name=".integration">Integration</button>
            </div>

            <div className="grid flex popup-gallery">
              {[1,2,3,4,5,6,7,8,9].map(i => (
                <div className="element-item" key={i}>
                  <Link href={`/images/portfolio-${i}.png`}>
                    <Image src={`/images/portfolio-${i}.png`} width={350} height={350} alt="Portfolio" />
                    <div><FaPlus /></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="ptb">
          <div className="container align-center">
            <h2>Pricing Plan</h2>
          </div>

          <div className="wrapper-pricing flex container">
            {[
              { title: "Regular", price: "$289" },
              { title: "Standard", price: "$541" },
              { title: "Premium", price: "$756" }
            ].map((p, i) => (
              <div className="single-pricing align-center" key={i}>
                <h3>{p.title} Package</h3>
                <p className="price">{p.price}</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>

                <ol>
                  {[1,2,3,4,5].map(j => (
                    <li key={j}><FaCheck /> Lorem ipsum dolor sit.</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ====== Footer / Contact ====== */}
      <footer id="contact">
        <div className="container">
          <h2>Contact</h2>
        </div>

        <div className="wrapper-contact-form container flex">
          <div className="wrapper-contact">
            <p><FaMapMarkerAlt /> 4239 Lapeer Rd, Port Huron, MI 48060</p>
            <p><a href="#"><FaPhone /> +1 (800) 478-42-51</a></p>
            <p><a href="#"><FaPhone /> +1 (800) 479-43-52</a></p>
            <p><FaClock /> We are open Mon–Fri: 10am - 8pm</p>

            <ul className="footer-social">
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </div>

          <div className="wrapper-form">
            <form>
              <div className="wrapper-input flex">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
              </div>

              <div className="wrapper-input flex">
                <input type="text" name="phone" placeholder="Phone" />
                <input type="text" name="email" placeholder="Email" />
              </div>

              <textarea name="message" placeholder="Message"></textarea>
              <button id="send" type="submit">Submit Message</button>
            </form>
          </div>
        </div>

        <div className="wrapper-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="copyright align-center">
          <p>Copyright © All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

    </>
}