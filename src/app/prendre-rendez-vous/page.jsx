import Footer from "../components/Footer/Footer";
import RdvForm from "../components/form/rdvForm";
import Navbar from "../components/navbar/Navbar";

export default function RdvPage() {
    return<>
    <Navbar position={""}/>
    <div className="rdv d-flex justify-content-center align-items-center">
        <h1 className="text-uppercase">Prendre <span className="selected">rendez</span>-vous</h1>
    </div>
    <RdvForm/>
    <Footer/>
    </>
}