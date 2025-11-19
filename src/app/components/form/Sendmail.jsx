"use client";
import { useState } from "react";

export default function Sendmail() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      setSuccess(true);
      e.target.reset();
    } else {
      alert("Erreur serveur : " + data.error);
    }
  };
    return <>

        <form onSubmit={handleSubmit}>
            <div className="wrapper-input flex">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />

            </div>

            <textarea name="message" placeholder="Message"></textarea>
            <button id="send" type="submit" disabled={loading}>
                {loading? "Envoie en cours...": "Envoyer"}
            </button>
        </form>
        {success && (
            <p className="text-success mt-3">Message envoyé avec succès !</p>
        )}

    </>
}