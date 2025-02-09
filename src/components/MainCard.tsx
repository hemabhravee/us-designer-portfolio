import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import { colors } from "../constants/colors";

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledMainCard = styled.div<Pick<LayoutProps, 'style'>>`
  background-color: ${colors.lightGreen};
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 10%;
  border-radius: 20px;
  color: ${colors.darkTeal};

  @media (min-width: 640px) {
    padding: 50px 10%;
  }

  @media (min-width: 768px) {
    /* padding: 100px 10%; */
  }

  @media (min-width: 1280px) {
    /* padding: 100px 10%; */
  }

  @media (min-width: 1536px) {
    padding: 100px 15%;
  }

  ${props => props.style && { ...props.style }}
`;

const MainCard: FunctionComponent<LayoutProps> = ({ children, style }: LayoutProps) => {
  return (
    <StyledMainCard style={style}>
      {children}
    </StyledMainCard>
  );
};

export default MainCard;