import { Container } from "react-bootstrap";

import FrmContact from "../components/FrmContact";

export default function Contacto() {
  return (
    <Container className="pt-5 text-center">
      <h1 className="mb-4">Tell us, how can we help you?</h1>
      <FrmContact />
    </Container>
  );
};
