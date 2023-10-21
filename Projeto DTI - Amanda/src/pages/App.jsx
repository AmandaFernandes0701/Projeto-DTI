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
import DogQuantityInput from '../components/dogQuantityInput';

export default function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [numBigDogs, setNumBigDogs] = useState(0);
  const [numSmallDogs, setNumSmallDogs] = useState(0);
  const [bestPetShop, setBestPetShop] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showFinalPrice, setShowFinalPrice] = useState(false);

  const handleIncrementDecrement = (isBigDog, increment) => {
    const operation = increment ? 1 : -1;

    if (isBigDog) {
      const newNumBigDogs = numBigDogs + operation;
      if (newNumBigDogs >= 0) {
        setNumBigDogs(newNumBigDogs);
      }
    } else {
      const newNumSmallDogs = numSmallDogs + operation;
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

        <DogQuantityInput
          label='Quantidade de cachorros pequenos'
          value={numSmallDogs}
          onDecrement={() => handleIncrementDecrement(false, false)}
          onIncrement={() => handleIncrementDecrement(false, true)}
          onChange={(e) => updateNumDogs(false, e.target.value)}
        />

        <DogQuantityInput
          label='Quantidade de cachorros grandes'
          value={numBigDogs}
          onDecrement={() => handleIncrementDecrement(true, false)}
          onIncrement={() => handleIncrementDecrement(true, true)}
          onChange={(e) => updateNumDogs(true, e.target.value)}
        />
      </DivMain>

      <CalculateButton onClick={handleCalculatePrice}>Enviar</CalculateButton>

      {showResult && (
        <DivResult>
          <DivRow flexcolumn='true'>
            <LabelResult>
              O Pet shop com o melhor custo benefício é:
            </LabelResult>
            <PurpleLabelResult>{bestPetShop}</PurpleLabelResult>
          </DivRow>

          <DivRow flexcolumn='true'>
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
