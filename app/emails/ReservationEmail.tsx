import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import InfoRow from "./components/InfoRow";
type Props = {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  rideType: string;
  distance: string;
  duration: string;
  price: string;
  note: string;
};

export default function ReservationEmail({
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
}: Props) {
  return (
    <Html lang="hr">
      <Head />

      <Preview>Nova rezervacija - TAXI IGGY</Preview>

      <Body
        style={{
          backgroundColor: "#f8fafc",
          fontFamily: "Arial, sans-serif",
          padding: "40px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "40px",
          }}
        >
          <Section>
            <Heading
              style={{
                color: "#0f172a",
                textAlign: "center",
              }}
            >
              🚖 TAXI IGGY
            </Heading>

            <Heading
              as="h2"
              style={{
                textAlign: "center",
              }}
            >
              Nova rezervacija
            </Heading>

            <Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<Text
  style={{
    fontSize: "16px",
    color: "#334155",
    lineHeight: "26px",
    margin: 0,
  }}
>
  Zaprimljen je novi zahtjev za rezervaciju putem web stranice.
</Text>

<Text
  style={{
    fontSize: "16px",
    color: "#334155",
    lineHeight: "26px",
    marginTop: "12px",
  }}
>
  Rezervaciju je poslao: <strong>{name}</strong>
</Text>
<Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<Heading
  as="h3"
  style={{
    fontSize: "20px",
    color: "#0f172a",
    marginBottom: "20px",
  }}
>
  Kontakt
</Heading>

<Section>
  <InfoRow
    label="Ime i prezime"
    value={name}
  />

  <InfoRow
  label="Telefon"
  value={phone}
/>

<InfoRow
  label="E-mail"
  value={email || "-"}
/>
</Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}