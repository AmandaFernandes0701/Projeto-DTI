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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [selectedDate, setSelectedDate] = useState("");
  const [numBigDogs, setNumBigDogs] = useState(0);
  const [numSmallDogs, setNumSmallDogs] = useState(0);
  const [bestPetShop, setBestPetShop] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

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

    return totalPrice;
  };

  const handleCalculatePriceVaiRex = (isWeekend) => {
    const totalPrice = isWeekend
      ? numSmallDogs * 20 + numBigDogs * 55
      : numSmallDogs * 15 + numBigDogs * 50;

    return totalPrice;
  };

  const handleCalculatePriceChowChawgas = () => {
    const priceSmallDogs = numSmallDogs * 30;
    const priceBigDogs = numBigDogs * 45;
    const totalPrice = priceSmallDogs + priceBigDogs;

    return totalPrice;
  };

  const handleCalculatePrice = () => {
    if (!selectedDate) {
      toast.error("Favor inserir uma data ヽ(ಠ_ಠ)ノ");
      return;
    } else {
      toast.success("Dados enviados com sucesso ✨");
      const date = new Date(selectedDate);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

      const priceMeuCaninoFeliz = handleCalculatePriceMeuCaninoFeliz(isWeekend);
      const priceVaiRex = handleCalculatePriceVaiRex(isWeekend);
      const priceChowChawgas = handleCalculatePriceChowChawgas();

      const minPrice = Math.min(
        priceMeuCaninoFeliz,
        priceVaiRex,
        priceChowChawgas
      );

      const minPriceShops = [];
      if (priceMeuCaninoFeliz === minPrice) {
        minPriceShops.push({
          name: "Meu Canino Feliz",
          price: priceMeuCaninoFeliz,
          distance: 2,
        });
      }
      if (priceVaiRex === minPrice) {
        minPriceShops.push({
          name: "Vai Rex",
          price: priceVaiRex,
          distance: 1.7,
        });
      }
      if (priceChowChawgas === minPrice) {
        minPriceShops.push({
          name: "ChowChawgas",
          price: priceChowChawgas,
          distance: 0.8,
        });
      }

      minPriceShops.sort((a, b) => a.distance - b.distance);
      setBestPetShop(minPriceShops[0].name);
      setFinalPrice(minPriceShops[0].price);
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
        <p>O petShop com melhor custo benefício é: {bestPetShop}</p>
        <p>O preço total a ser pago é: R${finalPrice},00</p>
      </DivResult>
      <ToastContainer />
    </Container>
  );
}
