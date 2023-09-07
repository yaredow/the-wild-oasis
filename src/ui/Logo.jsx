import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import lightLogo from "../../public/logo-light.png";
import darkLogo from "../../public/logo-dark.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const imgSrc = isDarkMode ? darkLogo : lightLogo;
  return <StyledLogo>{<Img src={imgSrc} alt="Logo" />}</StyledLogo>;
}

export default Logo;
