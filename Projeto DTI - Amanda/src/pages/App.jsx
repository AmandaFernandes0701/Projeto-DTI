import {
  Container,
  Title,
  DivInput,
  Label,
  NumberInput,
  DateInput,
  DivButtons,
  Button,
  CalculateButton,
  DivResult,
} from "./Styles";
import { useState } from "react";

export default function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [numBigDogs, setNumBigDogs] = useState(0);
  const [numSmallDogs, setNumSmallDogs] = useState(0);
  const [result, setResult] = useState("");
  const [petShop, setPetShop] = useState("");

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

  const handleCalculatePriceMeuCaninoFeliz = (isWeekend) => {
    const priceSmallDogs = numSmallDogs * 20;
    const priceBigDogs = numBigDogs * 40;
    const totalPrice = isWeekend
      ? (priceSmallDogs + priceBigDogs) * 1.2
      : priceSmallDogs + priceBigDogs;

    setPetShop("Meu Canino Feliz");
    setResult(totalPrice);
  };

  const handleCalculatePriceVaiRex = (isWeekend) => {
    const totalPrice = isWeekend
      ? numSmallDogs * 15 + numBigDogs * 50
      : numSmallDogs * 20 + numBigDogs * 55;

    setPetShop("Vai Rex");
    setResult(totalPrice);
  };

  const handleCalculatePriceChowChawgas = () => {
    const priceSmallDogs = numSmallDogs * 30;
    const priceBigDogs = numBigDogs * 45;
    const totalPrice = priceSmallDogs + priceBigDogs;

    setPetShop("ChowChawgas");
    setResult(totalPrice);
  };

  const handleCalculatePrice = () => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
      handleCalculatePriceMeuCaninoFeliz(isWeekend);

      handleCalculatePriceVaiRex(isWeekend);
      handleCalculatePriceChowChawgas();
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

      <CalculateButton onClick={handleCalculatePrice}>Enviar</CalculateButton>
      <DivResult>
        <p>O petShop com melhor custo benefício é: {petShop}</p>
        <p>O preço total a ser pago é: R${result},00</p>
      </DivResult>
    </Container>
  );
}
