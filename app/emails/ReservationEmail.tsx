type ReservationEmailProps = {
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
function infoRow(label: string, value: string) {
  return `
    <tr>
      <td
        style="
          width:180px;
          padding:12px 16px;
          font-weight:bold;
          color:#475569;
          border-bottom:1px solid #e2e8f0;
        "
      >
        ${label}
      </td>

      <td
        style="
          padding:12px 16px;
          color:#0f172a;
          border-bottom:1px solid #e2e8f0;
        "
      >
        ${value}
      </td>
    </tr>
  `;
}
export function ReservationEmail({
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
}: ReservationEmailProps) {
  return `
<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>TAXI IGGY</title>
</head>

<body
  style="
    margin:0;
    padding:40px;
    background:#f8fafc;
    font-family:Arial, Helvetica, sans-serif;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  role="presentation"
>

<tr>

<td align="center">

<table
  width="600"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
  "
>

<tr>

<td
  style="
    background:#0f172a;
    color:white;
    text-align:center;
    padding:40px;
  "
>

<h1
  style="
    margin:0;
    color:#facc15;
    font-size:34px;
  "
>
🚖 TAXI IGGY
</h1>

<p
  style="
    margin-top:12px;
    font-size:18px;
  "
>
Nova rezervacija
</p>

</td>

</tr>

<tr>

<td style="padding:40px;">

<h2 style="
margin:0 0 25px;
font-size:22px;
color:#0f172a;
">
👤 Kontakt
</h2>

<table width="100%" cellpadding="10" cellspacing="0">

<tr>
<td style="width:180px;font-weight:bold;color:#475569;">
Ime i prezime
</td>

<td>
${name}
</td>
</tr>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  role="presentation"
>

${infoRow("Ime i prezime", name)}

${infoRow("Telefon", phone)}

${infoRow("E-mail", email || "-")}

</table>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
}