import { Badge } from "react-bootstrap";

const CircleBadge = (props) => {
  return (
    <>
      <Badge className="m-0" style={{position: 'absolute', zIndex: '2', bottom: 50, borderRadius: '20px'}} bg="primary"><h3>{props.index}</h3></Badge>
    </>
  );
};

export default CircleBadge;
