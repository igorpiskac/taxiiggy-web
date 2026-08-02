import { Heading } from "@react-email/components";

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <Heading
      as="h3"
      style={{
        fontSize: "18px",
        color: "#0f172a",
        marginTop: "20px",
        marginBottom: "12px",
      }}
    >
      {children}
    </Heading>
  );
}