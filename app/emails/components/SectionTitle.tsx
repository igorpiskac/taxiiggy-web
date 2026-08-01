import { Heading } from "@react-email/components";

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <Heading
      as="h3"
      style={{
        fontSize: "22px",
        color: "#0f172a",
        marginTop: "32px",
        marginBottom: "18px",
      }}
    >
      {children}
    </Heading>
  );
}