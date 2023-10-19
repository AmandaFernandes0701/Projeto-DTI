import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  padding-top: 100px;
  color: white;
  gap: 5rem;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: baseline;
`;

export const Title = styled.p`
  font-size: 100px;
  font-family: "Roboto";
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3rem;
`;

export const LabelDate = styled.p`
  font-size: 20px;
  text-align: left;
`;

export const Label = styled.p`
  font-size: 20px;
  width: 40rem;
  text-align: left;
`;

export const SelectDay = styled.select`
  height: 50px;
  width: 50%;
  border-radius: 10px;
`;

export const DivRow = styled.div`
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
  border: 2px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 10px;
`;

export const NumberInput = styled.input`
  display: flex;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  border: 2px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  font-size: 3rem;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.purple.primary};

  cursor: pointer;
  transition: background-color 1s;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple.hover};
  }
`;

export const CalculateButton = styled.button`
  width: 20rem;
  height: 50px;
  font-size: 2rem;
  color: white;
  background-color: transparent;
  border: 2px solid #8257e5;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 1s;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple.primary};
  }
`;

export const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const LabelResult = styled.p`
  font-size: 20px;
  text-align: left;
  color: ${(props) => props.theme.colors.lightGrey};
`;

export const PurpleLabelResult = styled.p`
  font-size: 30px;
  text-align: left;
  color: ${(props) => props.theme.colors.purple.primary};
  font-family: ${(props) => props.theme.fonts.roboto};
`;
