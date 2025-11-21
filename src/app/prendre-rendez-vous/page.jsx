import Footer from "../components/Footer/Footer";
import RdvForm from "../components/form/rdvForm";
import Navbar from "../components/navbar/Navbar";

export default function RdvPage() {
    return<>
    <Navbar position={""}/>
    <div className="rdv d-flex justify-content-center align-items-center">
        <h2 className="text-uppercase text-light">Prendre <span className="selected">rendez</span>-vous</h2>
    </div>
    <RdvForm/>
    <Footer/>
    </>
}