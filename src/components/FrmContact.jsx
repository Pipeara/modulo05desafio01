import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FrmContact() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const [formData, setFormData] = useState({
    email: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validar el correo electrónico en tiempo real
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors({
          ...errors,
          email: "Por favor, ingrese un correo electrónico válido.",
        });
      } else {
        setErrors({
          ...errors,
          email: "",
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar una vez más antes de enviar el formulario
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Simular el envío del formulario (aquí puedes hacer una solicitud HTTP real)
    console.log("Formulario enviado:", formData);

    // Reiniciar el estado del formulario después del envío
    setFormData({
      email: "",
      description: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && (
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="danger" type="submit">
        Send
      </Button>
    </Form>
  );
}
