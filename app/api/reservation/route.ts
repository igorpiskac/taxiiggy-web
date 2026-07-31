import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      pickup,
      destination,
      date,
      time,
      rideType,
      distance,
      duration,
      price,
      note,
    } = body;

    const result = await resend.emails.send({
      from: "Taxi Iggy <onboarding@resend.dev>",
      to: ["iggy.zgb@gmail.com"],
      subject: "🚖 Nova TAXI IGGY rezervacija",

      text: `
NOVA REZERVACIJA

Ime:
${name}

Telefon:
${phone}

E-mail:
${email || "Nije navedeno"}

Polazište:
${pickup}

Odredište:
${destination}

Datum:
${date}

Vrijeme:
${time}

Vrsta vožnje:
${rideType}

Udaljenost:
${distance}

Trajanje:
${duration}

Procijenjena cijena:
${price}

Napomena:
${note || "Nema napomene"}
`,
    });

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Greška prilikom slanja e-maila.",
      },
      {
        status: 500,
      }
    );
  }
}