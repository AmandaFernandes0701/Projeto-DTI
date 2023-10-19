import {
  Container,
  Title,
  DivInput,
  Label,
  NumberInput,
  DateInput,
  DivButtons,
  Button,
} from "./Styles";
import { useState } from "react";

export default function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [numBigDogs, setNumBigDogs] = useState(0);
  const [numSmallDogs, setNumSmallDogs] = useState(0);

  const handleIncrementDecrement = (isBigDog, increment) => {
    if (isBigDog) {
      const newNumBigDogs = increment ? numBigDogs + 1 : numBigDogs - 1;
      if (newNumBigDogs >= 0) {
        setNumBigDogs(newNumBigDogs);
      }
    } else {
      const newNumSmallDogs = increment ? numSmallDogs + 1 : numSmallDogs - 1;
      if (newNumSmallDogs >= 0) {
        setNumSmallDogs(newNumSmallDogs);
      }
    }
  };

  return (
    <Container>
      <Title>Bem vindo(a)!</Title>
      <DivInput>
        <Label>Selecione a data:</Label>
        <DateInput
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </DivInput>

      <DivInput>
        <Label>Quantidade de cachorros grandes:</Label>
        <DivButtons>
          <Button onClick={() => handleIncrementDecrement(true, false)}>
            -
          </Button>
          <NumberInput value={numBigDogs} readOnly />
          <Button onClick={() => handleIncrementDecrement(true, true)}>
            +
          </Button>
        </DivButtons>
      </DivInput>

      <DivInput>
        <Label>Quantidade de cachorros pequenos:</Label>
        <DivButtons>
          <Button onClick={() => handleIncrementDecrement(false, false)}>
            -
          </Button>
          <NumberInput value={numSmallDogs} readOnly />
          <Button onClick={() => handleIncrementDecrement(false, true)}>
            +
          </Button>
        </DivButtons>
      </DivInput>
    </Container>
  );
}
