import nodemailer from "nodemailer";

let lastSent = {}; // simple rate-limit en mémoire (par IP)

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // RATE LIMIT : 1 message toutes les 60 secondes
    if (lastSent[ip] && now - lastSent[ip] < 60 * 1000) {
      return Response.json(
        { success: false, error: "Veuillez patienter avant de renvoyer un message." },
        { status: 429 }
      );
    }

    const { name, email, message } = await req.json();

    // 🔒 VALIDATION DES CHAMPS
    if (!name || name.length < 2 || name.length > 50) {
      return Response.json(
        { success: false, error: "Nom invalide (2–50 caractères)." },
        { status: 400 }
      );
    }

    if (!email || email.length > 100 || !email.includes("@")) {
      return Response.json(
        { success: false, error: "Email invalide." },
        { status: 400 }
      );
    }

    if (!message || message.length < 5 || message.length > 500) {
      return Response.json(
        { success: false, error: "Message invalide (5–500 caractères)." },
        { status: 400 }
      );
    }

    // 🔥 ANTI-SPAM : bloque les messages pleins de liens
    if ((message.match(/https?:\/\//g) || []).length > 2) {
      return Response.json(
        { success: false, error: "Lien détecté : message suspect." },
        { status: 400 }
      );
    }

    // 🔥 ANTI-SPAM : bloque les répétitions abusives
    if (/([a-zA-Z0-9])\1{5,}/.test(message)) {
      return Response.json(
        { success: false, error: "Message suspect." },
        { status: 400 }
      );
    }

    // CONFIG SMTP SÉCURISÉ
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ENVOI EMAIL
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Nouveau message depuis votre site",
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
    });

    // Mettre à jour le rate-limit
    lastSent[ip] = now;

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur mail :", error);
    return Response.json(
      { success: false, error: "Erreur serveur." },
      { status: 500 }
    );
  }
}
