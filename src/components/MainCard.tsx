import { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledDiv = styled.div`
  background-color: ${colors.lightGreen};
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 15%;
  border-radius: 20px;
  color: ${colors.darkTeal};
  ${props => props.style && Object.entries(props.style).map(([key, value]) => `${key}: ${value};`).join('\n')}


  @media (min-width: 640px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    gap: 40px;
    padding: 30px 15% 60px 15%;
  }

  @media (min-width: 1280px) {

  }
`;

const MainCard: FunctionComponent<LayoutProps> = ({ children, style }: LayoutProps) => {
  return (
    <StyledDiv style={style}>
      {children}
    </StyledDiv>
  );
};

export default MainCard;