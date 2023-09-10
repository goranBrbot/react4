import { Card, CardHeader, CardBody } from "@chakra-ui/react";

export function ConditionalRendering(props) {
  let rez = props.num > 5 ? "Primjer je veći od 5" : "Primjer je manji od 5";
  return (
    <>
      <Card backgroundColor="hsla(210, 100%, 56%, 10%)">
        <CardBody>
          <CardHeader bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="6xl" fontWeight="extrabold">
            <h2>ConditionalRendering ({props.num})</h2>
          </CardHeader>
          {props.num && rez}
        </CardBody>
      </Card>
    </>
  );
}


