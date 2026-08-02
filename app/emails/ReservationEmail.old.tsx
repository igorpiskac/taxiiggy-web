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
import SectionTitle from "./components/SectionTitle";
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
            padding: "32px",
             maxWidth: "560px",
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


<Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<SectionTitle>
  👤 KONTAKT
</SectionTitle>

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

<Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<Section>
  <SectionTitle>
    📍 RUTA
  </SectionTitle>

  <InfoRow
    label="Polazište"
    value={pickup}
  />

  <InfoRow
    label="Odredište"
    value={destination}
  />
</Section>   
<Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<Section>
  <SectionTitle>
    🚖 DETALJI VOŽNJE
  </SectionTitle>

  <InfoRow
    label="Datum"
    value={date}
  />

  <InfoRow
    label="Vrijeme"
    value={time}
  />

  <InfoRow
    label="Vrsta vožnje"
    value={rideType}
  />
</Section>
<Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<Section>
  <SectionTitle>
    💶 PROCJENA
  </SectionTitle>

  <InfoRow
    label="Udaljenost"
    value={distance}
  />

  <InfoRow
    label="Trajanje"
    value={duration}
  />

  <InfoRow
    label="Procijenjena cijena"
    value={price}
  />
</Section>
<Hr
  style={{
    borderColor: "#e2e8f0",
    margin: "32px 0",
  }}
/>

<Section>
  <SectionTitle>
    📝 NAPOMENA
  </SectionTitle>

  <Text
    style={{
      fontSize: "15px",
      lineHeight: "26px",
      color: "#334155",
      margin: 0,
    }}
  >
    {note || "Nema napomene."}
  </Text>
</Section>
  </Section>   

        </Container>
      </Body>
    </Html>
  );
}