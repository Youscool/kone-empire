"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMsg("Message envoyé avec succès !");
      e.target.reset();
    } else {
      setMsg(data.error || "Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">

      <input
        name="name"
        placeholder="Nom"
        maxLength={50}
        className="form-control mb-3"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        maxLength={100}
        className="form-control mb-3"
        required
      />

      <textarea
        name="message"
        placeholder="Votre message"
        maxLength={500}
        minLength={5}
        className="form-control mb-3"
        required
      />

      <button className="btn btn-primary w-100" disabled={loading}>
        {loading ? "Envoi..." : "Envoyer"}
      </button>

      {msg && <p className="mt-3">{msg}</p>}
    </form>
  );
}
