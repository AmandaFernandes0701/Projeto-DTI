import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  gap: 5rem;
`;

export const Title = styled.p`
  font-size: 100px;
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.p`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const SelectDay = styled.select`
  height: 5rem;
  width: 50%;
  border-radius: 10px;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const DateInput = styled.input`
  width: 150px;
  height: 50px;
  font-family: "Montserrat";
  padding-left: 10px;
  padding-right: 4px;
  border: 2px solid #b0b0b0;
  border-radius: 10px;
`;

export const NumberInput = styled.input`
  display: flex;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  border: 2px solid #b0b0b0;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  font-size: 3rem;
  color: white;
  border-radius: 100px;
  background-color: #8257e5;

  cursor: pointer;
  transition: background-color 1s;

  &:hover {
    background-color: #4811ca;
  }
`;

export const CalculateButton = styled.button`
  width: 20rem;
  height: 5rem;
  font-size: 2rem;
  color: white;
  background-color: transparent;
  border: 2px solid #8257e5;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 1s;

  &:hover {
    background-color: #8257e5;
  }
`;

export const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
