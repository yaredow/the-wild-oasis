import { styled } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;
const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;
const StyledApp = styled.div`
  background-color: aqua;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Button has been clicked")}>
          Check In
        </Button>
        <Button onClick={() => alert("Button has been clicked")}>
          Check In
        </Button>

        <Input type="number" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
