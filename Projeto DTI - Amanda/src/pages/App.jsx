import {
  Container,
  DivTitle,
  DivMain,
  Title,
  Subtitle,
  DivInput,
  Label,
  NumberInput,
  DateInput,
  DivRow,
  Button,
  CalculateButton,
  LabelResult,
  PurpleLabelResult,
  DivResult,
} from './Styles';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { calculateBestPetShop } from '../functions/calculatePrices';

export default function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [numBigDogs, setNumBigDogs] = useState(0);
  const [numSmallDogs, setNumSmallDogs] = useState(0);
  const [bestPetShop, setBestPetShop] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showFinalPrice, setShowFinalPrice] = useState(false);

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

  const updateNumDogs = (isBigDog, value) => {
    const newValue = parseInt(value);
    if (!isNaN(newValue)) {
      if (isBigDog) {
        setNumBigDogs(newValue);
      } else {
        setNumSmallDogs(newValue);
      }
    } else {
      if (isBigDog) {
        setNumBigDogs(0);
      } else {
        setNumSmallDogs(0);
      }
    }
  };

  const handleCalculatePrice = () => {
    if (!selectedDate || (numBigDogs === 0 && numSmallDogs === 0)) {
      toast.error('Favor inserir os dados corretamente ヽ(ಠ_ಠ)ノ');
      toast.clearWaitingQueue();
      setShowFinalPrice(false);
      setBestPetShop('');
      setFinalPrice('');
      return;
    } else {
      toast.success('Dados enviados com sucesso ✨', {
        icon: '🚀',
      });
      toast.clearWaitingQueue();
      const { name, price } = calculateBestPetShop(
        selectedDate,
        numSmallDogs,
        numBigDogs
      );
      setBestPetShop(name);
      setFinalPrice(price);
    }
    setShowResult(true);
    setShowFinalPrice(true);
  };

  return (
    <Container>
      <DivTitle>
        <Title>Bem vinda(o)!</Title>
        <Subtitle>Feito por: Amanda Fernandes 💜</Subtitle>
      </DivTitle>

      <DivMain>
        <DivInput>
          <Label>Selecione a data:</Label>
          <DateInput
            type='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </DivInput>

        <DivInput>
          <Label generic>Quantidade de cachorros pequenos:</Label>
          <DivRow>
            <Button onClick={() => handleIncrementDecrement(false, false)}>
              -
            </Button>
            <NumberInput
              value={numSmallDogs}
              onChange={(e) => updateNumDogs(false, e.target.value)}
            />
            <Button onClick={() => handleIncrementDecrement(false, true)}>
              +
            </Button>
          </DivRow>
        </DivInput>

        <DivInput>
          <Label generic>Quantidade de cachorros grandes:</Label>
          <DivRow>
            <Button onClick={() => handleIncrementDecrement(true, false)}>
              -
            </Button>
            <NumberInput
              value={numBigDogs}
              onChange={(e) => updateNumDogs(true, e.target.value)}
            />
            <Button onClick={() => handleIncrementDecrement(true, true)}>
              +
            </Button>
          </DivRow>
        </DivInput>
      </DivMain>

      <CalculateButton onClick={handleCalculatePrice}>Enviar</CalculateButton>

      {showResult && (
        <DivResult>
          <DivRow flexColumn>
            <LabelResult>
              O Pet shop com o melhor custo benefício é:
            </LabelResult>
            <PurpleLabelResult>{bestPetShop}</PurpleLabelResult>
          </DivRow>

          <DivRow flexColumn>
            <LabelResult>O preço total a ser pago é:</LabelResult>
            {showFinalPrice && (
              <PurpleLabelResult>R${finalPrice},00</PurpleLabelResult>
            )}
          </DivRow>
        </DivResult>
      )}
    </Container>
  );
}
