import React from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = ({ show, setShow }) => {
  return (
    <Alert
      show={show}
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Favori karakter ekleme sayısını aştınız!</Alert.Heading>
      <p>Başka bir karakteri favorilerden çıkarmalısınız.</p>
    </Alert>
  );
};

export default CustomAlert;
