import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: pink;
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
`;

export const Label = styled.p`
  font-size: 30px;
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
  gap: 5rem;
`;

export const DateInput = styled.input`
  width: 150px;
  height: 50px;
  color: red;
`;

export const NumberInput = styled.input`
  width: 50px;
  height: 50px;
  color: red;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  color: red;
`;
