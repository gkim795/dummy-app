import { Card, Elevation } from "@blueprintjs/core";

function CardComponent(props) {
  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <h5>{props.code}</h5>
      <p>{props.desc}</p>
    </Card>
  );
}

export default CardComponent;
