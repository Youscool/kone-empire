export async function POST(req) {
  try {
    const { name, email, phone, country, date, time, clientType, lastRdv } =
      await req.json();

    // Vérification heure (>= 14h GMT)
    const [hours] = time.split(":");
    if (parseInt(hours) < 14) {
      return Response.json(
        { ok: false, error: "Les rendez-vous commencent à partir de 14h00 GMT." },
        { status: 400 }
      );
    }

    // Vérification ancien client
    if (clientType === "ancien" && (!lastRdv || lastRdv.length === 0)) {
      return Response.json(
        { ok: false, error: "Veuillez indiquer la date du dernier rendez-vous." },
        { status: 400 }
      );
    }

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({
        secret: process.env.SHEET_SECRET,
        name,
        email,
        phone,
        country,
        date,
        time,
        clientType,
        lastRdv: lastRdv || "non défini"
      }),
    });

    const result = await response.text();

    if (result !== "OK") {
      return Response.json({ ok: false, error: result }, { status: 400 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}
