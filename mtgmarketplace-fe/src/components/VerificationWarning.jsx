import { Alert } from "react-bootstrap";
import { useState } from "react";

const VerificationWarning = () => {
  return (
    <>
      <Alert variant="primary" className="mb-2" style={{ height: "3rem" }}>
        <Alert.Heading style={{ fontSize: "1rem" }} className="text-center">
          Your account isn't verified! Please check your emails for a
          verification link. (Check your spam folder)
        </Alert.Heading>
      </Alert>
    </>
  );
};

export default VerificationWarning;
