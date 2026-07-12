import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      phone,
      serviceType,
      location,
      message,
      turnstileToken,
      website,
    } = await req.json();

    if (website) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken,
        }),
      },
    );

    const result = await verify.json();

    if (!result.success) {
      return Response.json({ error: "Bot detected." }, { status: 400 });
    }
    if (!fullName || !email || !phone || !location) {
      return Response.json({ error: "Neispravni podaci." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Ferologistik Sistem <kontakt@ferologistiksistem.com>",
      to: "office.ferologistik@gmail.com",
      replyTo: email,
      subject: `Novi zahtev od ${fullName}`,

      html: `

      <h2>Novi zahtev sa sajta Ferologistik Sistem</h2>

      <p>
      <b>Ime i Prezime:</b> ${fullName}
      </p>

      <p>
      <b>Email adresa:</b> ${email}
      </p>

      <p>
      <b>Telefon:</b> ${phone}
      </p>

      <p>
      <b>Potreban Kontejner:</b> ${serviceType}
      </p>

      <p>
      <b>Lokacija:</b> ${location}
      </p>

      <p>
      <b>Poruka:</b><br/>
      ${message}
      </p>

      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Greška",
      },
      {
        status: 500,
      },
    );
  }
}
