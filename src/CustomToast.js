import React from "react";
import { Toast } from "react-bootstrap";

const CustomToast = ({ showToast, setShowToast }) => {
  return (
    <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
      <Toast.Body style={{ backgroundColor: "#28a745", color: "#fff" }}>
        Karakter favorilere eklendi!
      </Toast.Body>
    </Toast>
  );
};

export default CustomToast;
