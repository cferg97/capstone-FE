import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FeedbackModel = (props) => {
  return (
    <>
      <Modal size="lg" show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Submit Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedbackModel;
