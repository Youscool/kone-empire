import { useEffect } from "react";
import { Alert, CloseButton } from "react-bootstrap";

export default function FlashMessage({ message, variant, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <Alert
      variant={variant}
      className="mt-3 text-center fade show d-flex justify-content-between align-items-center"
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "280px",
        maxWidth: "400px",
        zIndex: 2000,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <div className="flex-grow-1">{message}</div>
      <CloseButton
        onClick={onClose}
        variant="white"
        className="ms-2"
        aria-label="Fermer"
      />
    </Alert>
  );
}