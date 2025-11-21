"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import FlashMessage from "../FlashMessage/FlashMessage";
import { useRouter } from "next/navigation";

export default function RdvForm() {
  const [status, setStatus] = useState("");
  const [clientType, setClientType] = useState("new");
  const [variant, setVariant] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi...");
    
    const form = e.target;
    const time = form.time.value;

    const [hours] = time.split(":");
    if (parseInt(hours) < 14) {
      setStatus("❌ Les rendez-vous commencent à partir de 14h00 GMT.");
      setVariant("warning")
      return;
    }

    const res = await fetch("/api/appointment", {
      method: "POST",
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        country: form.country.value,
        date: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
        time,
        clientType,
        lastRdv: clientType === "old" ? form.lastRdv.value : ""
      }),
    });

    const data = await res.json();

    if (data.ok) {
      setStatus("✅ Rendez-vous envoyé avec succès !");
      setVariant("success")
      form.reset();
      setClientType("new");
      setSelectedDate(null);
      router.push("/")
    } else {
      setStatus("❌ " + data.error);
      setVariant("danger")
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4 p-4 animate__animated animate__fadeIn">
        <h3 className="text-center mb-4">Veuillez remplir ce formulaire</h3>
        <form onSubmit={handleSubmit} className="row g-3">

          {/* Nom */}
          <div className="col-md-6">
            <label className="form-label">Nom</label>
            <input type="text" name="name" className="form-control" required />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" required />
          </div>
          {/* Phone */}
          <div className="col-md-6">
            <label className="form-label">Numéro de tel</label>
            <input type="tel" name="phone" className="form-control" required />
          </div>
          {/* Pays */}
          <div className="col-md-6">
            <label className="form-label">Pays</label>
            <input type="text" name="country" className="form-control" required />
          </div>

          {/* Client Type */}
          <div className="col-md-6">
            <label className="form-label d-block">Type de client</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="clientType"
                value="new"
                checked={clientType === "new"}
                onChange={() => setClientType("new")}
              />
              <label className="form-check-label">Nouveau client</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="clientType"
                value="old"
                checked={clientType === "old"}
                onChange={() => setClientType("old")}
              />
              <label className="form-check-label">Ancien client</label>
            </div>
          </div>

          {/* Date dernier RDV si ancien client */}
          {clientType === "old" && (
            <div className="col-md-12">
              <label className="form-label">Date du dernier rendez-vous</label>
              <input type="date" name="lastRdv" className="form-control" required />
            </div>
          )}

          {/* Date RDV avec Datepicker */}
          <div className="col-md-6">
            <label className="form-label">Date du rendez-vous</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
              placeholderText="Sélectionnez une date"
              minDate={new Date()}
              required
              dateFormat="yyyy-MM-dd"
            />
          </div>

          {/* Heure RDV */}
          <div className="col-md-6">
            <label className="form-label">Heure (à partir de 14h00 GMT)</label>
            <input type="time" name="time" className="form-control" required />
          </div>

          {/* Bouton */}
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill">
              <i className="bi bi-calendar2-check me-2"></i> Envoyer le rendez-vous
            </button>
          </div>

          {/* Status */}
          <div className="col-12 text-center">
            {status && <FlashMessage message={status} variant={variant} onClose={() => setStatus("")} />}
          </div>

        </form>
      </div>
    </div>
  );
}
