import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", // tu peux utiliser d'autres services SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // de l'expéditeur
      to: process.env.EMAIL_USER,   // vers ton email
      subject: "Nouveau message depuis le site Kone-Empire",
      text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
