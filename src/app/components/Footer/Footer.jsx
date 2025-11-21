import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { FaClock, FaFacebookF, FaInstagram, FaPhone, FaYoutube } from "react-icons/fa6";
import ContactForm from "../form/Sendmail";

export default function Footer() {
    return<>
     {/* ====== Footer / Contact ====== */}
          <footer id="contact">
            <div className="container">
              <h2>Contact</h2>
            </div>
    
            <div className="wrapper-contact-form container flex">
              <div className="wrapper-contact">
                <p><FaMapMarkerAlt /> Niamakoro cité UNICEF</p>
                <p><a href="tel: +22370725566"><FaPhone /> (+223) 70-72-55-66</a></p>
                <p><FaClock /> Nos horraires Lun–Ven: 8h00 - 16h00</p>
    
                <ul className="footer-social">
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                  <li><a href="#"><FaYoutube /></a></li>
                </ul>
              </div>
    
              <div className="wrapper-form">
                <ContactForm/>
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
              <p> © {new Date().getFullYear()} - Kone-Empire. Tous droits réservés.</p>
            </div>
          </footer>
    </>
}