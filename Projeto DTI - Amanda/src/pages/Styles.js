import styled from "styled-components";

const firstBreakpoint = "700px";
const secondBreakpoint = "530px";
const thirdBreakpoint = "380px";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
  gap: 5rem;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 100px;

  @media (max-width: ${secondBreakpoint}) {
    padding-top: 70px;
  }
`;

export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: baseline;

  @media (max-width: ${firstBreakpoint}) {
    align-items: center;
  }
  @media (max-width: ${secondBreakpoint}) {
    gap: 3rem;
    width: 80%;
  }
`;

export const Title = styled.p`
  font-size: 100px;
  font-family: ${(props) => props.theme.fonts.roboto};

  @media (max-width: ${firstBreakpoint}) {
    font-size: 70px;
  }
  @media (max-width: ${secondBreakpoint}) {
    font-size: 50px;
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.lightGrey};

  @media (max-width: ${secondBreakpoint}) {
    font-size: 15px;
  }
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

  @media (max-width: ${firstBreakpoint}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: ${secondBreakpoint}) {
    gap: 1.3rem;
  }
`;

export const LabelDate = styled.p`
  font-size: 20px;
  text-align: left;

  @media (max-width: ${firstBreakpoint}) {
    text-align: center;
  }
  @media (max-width: ${secondBreakpoint}) {
    font-size: 18px;
  }
`;

export const Label = styled.p`
  font-size: 20px;
  width: 40rem;
  text-align: left;

  @media (max-width: ${firstBreakpoint}) {
    text-align: center;
    width: auto;
  }
  @media (max-width: ${secondBreakpoint}) {
    font-size: 18px;
  }
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

  @media (max-width: ${firstBreakpoint}) {
    font-size: 18px;
  }
`;

export const DivRowResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${firstBreakpoint}) {
    font-size: 18px;
    flex-direction: column;
  }
`;

export const DateInput = styled.input`
  width: 150px;
  height: 50px;
  font-family: ${(props) => props.theme.fonts.montserrat};
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

  @media (max-width: ${secondBreakpoint}) {
    width: 45px;
    height: 45px;
  }
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
  @media (max-width: ${secondBreakpoint}) {
    width: 35px;
    height: 35px;
    font-size: 2rem;
  }
`;

export const CalculateButton = styled.button`
  width: auto;
  height: auto;
  padding: 15px 60px 15px 60px;
  font-size: 20px;
  color: white;
  background-color: transparent;
  border: 2px solid #8257e5;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 1s;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple.primary};
  }

  @media (max-width: ${secondBreakpoint}) {
    font-size: 18px;
    padding: 10px 40px 10px 40px;
  }
`;

export const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-width: ${secondBreakpoint}) {
    width: 80%;
  }
`;

export const LabelResult = styled.p`
  font-size: 20px;
  text-align: left;

  @media (max-width: ${firstBreakpoint}) {
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: ${secondBreakpoint}) {
    font-size: 15px;
  }
`;

export const PurpleLabelResult = styled.p`
  font-size: 30px;
  text-align: left;
  color: ${(props) => props.theme.colors.purple.primary};
  font-family: ${(props) => props.theme.fonts.roboto};

  @media (max-width: ${firstBreakpoint}) {
    text-align: center;
    font-size: 25px;
  }
  @media (max-width: ${thirdBreakpoint}) {
    font-size: 20px;
  }
`;
