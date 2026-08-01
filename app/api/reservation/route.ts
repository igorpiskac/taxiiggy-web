import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ReservationEmail from "@/app/emails/ReservationEmail";

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

      react: ReservationEmail({
  name,
  phone,
  email: email || "",
  pickup,
  destination,
  date,
  time,
  rideType,
  distance,
  duration,
  price,
  note: note || "",
}),
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