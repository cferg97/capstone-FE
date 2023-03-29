import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newFeedbackAction } from "../redux/actions";

const FeedbackModel = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [postageRating, setPostage] = useState(1);
  const [itemRating, setItem] = useState(1);

  const reviewToSend = {
    itemConditionRating: itemRating,
    postageRating: postageRating,
    comment: text,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newFeedbackAction(props.seller, reviewToSend));
    props.onHide();
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.onHide}
        seller={props.seller}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>Postage</Form.Label>
              <Form.Select
                value={postageRating}
                onChange={(e) => setPostage(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Condition</Form.Label>
              <Form.Select
                value={itemRating}
                onChange={(e) => setItem(e.target.value)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Add a comment</Form.Label>
              <Form.Control
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={(e) => onSubmit(e)}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
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
