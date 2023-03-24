import { Alert } from "react-bootstrap";

const VerificationWarning = ({userStatus}) => {
  return (
    <>
      <Alert variant="primary" className="mb-2" style={{ height: "3rem" }}>
        <Alert.Heading style={{ fontSize: "1rem" }} className="text-center p-0 m-0">
          {userStatus === undefined ? "You're not logged in!" : "Your account isn't verified! Please check your emails for averification link. (Check your spam folder)"}
        </Alert.Heading>
      </Alert>
    </>
  );
};

export default VerificationWarning;
