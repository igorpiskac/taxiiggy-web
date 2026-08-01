import { Row, Column, Text } from "@react-email/components";

type Props = {
  label: string;
  value: string;
};

export default function InfoRow({ label, value }: Props) {
  return (
    <Row>
      <Column style={{ width: "180px" }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#64748b",
            margin: "8px 0",
          }}
        >
          {label}
        </Text>
      </Column>

      <Column>
        <Text
          style={{
            color: "#0f172a",
            margin: "8px 0",
          }}
        >
          {value}
        </Text>
      </Column>
    </Row>
  );
}