import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, serviceType, location, message } =
      await req.json();

    await resend.emails.send({
      from: "Ferologistik Sistem <onboarding@resend.dev>",

      to: "dekimioc@gmail.com",

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
