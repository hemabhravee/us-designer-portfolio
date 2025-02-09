import { FunctionComponent } from "react";
import styled from "styled-components";
import { fonts } from "../../constants/fonts";

const DanielText = styled.div`
  width: auto;
  font-family: ${fonts.danielSans};
  font-size: 40px;
  margin-bottom: -20px;
  padding-right: 10px;
  letter-spacing: -0.72px;


  @media (min-width: 640px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
  }

`;

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const HaasText = styled.div<Pick<LayoutProps, 'style'>>`
  width: auto;
  font-family: ${fonts.alteHaasGrotesk};
  font-weight: bold;
  font-size: 52px;
  margin-bottom: -15px;
  line-height: 40px;
  padding-right: 10px;
  letter-spacing: -3.3px;

  @media (min-width: 640px) {
    font-size: 36px;
    line-height: 4rem;
  }

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 44px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    line-height: 5rem;
  }
  `

const HaasText2 = styled.div<Pick<LayoutProps, 'style'>>`
  width: auto;
  font-family: ${fonts.alteHaasGrotesk};
  font-weight: bold;
  font-size: 52px;
  margin-bottom: -15px;
  line-height: 40px;
  padding-right: 10px;
  letter-spacing: -3.3px;

  @media (min-width: 640px) {
    font-size: 40px;
    line-height: 4rem;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 58px;
    line-height: 5rem;
  }
  `

const StyledDiv = styled.div<Pick<LayoutProps, 'style'>>`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    gap: 10px
  }

  @media (min-width: 1024px) {
    gap: 20px;
  }

  @media (min-width: 1280px) {
    font-size: 52px;
    line-height: 5rem;
    padding: 0px 50px;
    gap: 0px;
  }

  @media (min-width: 1536px) {
    font-size: 54px;
    padding: 0px 70px;
    gap: 0px;
  }

  ${props => props.style && { ...props.style }}
`;

const NameDiv = styled.div<Pick<LayoutProps, 'style'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;

  @media (min-width: 768px) {
    gap: 10px
  }

  @media (min-width: 1024px) {
    gap: 20px;
  }

  @media (min-width: 1280px) {
    gap: 0px;
  }

  @media (min-width: 1536px) {
    gap: 0px;
  }

  ${props => props.style && { ...props.style }}
`;



const leftAlignedStyle: React.CSSProperties = {
  ...(window.innerWidth >= 1280 && {alignSelf: 'start'})
};

const rightAlignedStyle: React.CSSProperties = {
  ...(window.innerWidth >= 1280 && {alignSelf: 'end'})
};

const HomePageHeading: FunctionComponent = () => {
  return (
    <StyledDiv>
      <DanielText style={{ ...leftAlignedStyle }}>I'm</DanielText>
      <NameDiv  style={{ ...leftAlignedStyle}}>
        <HaasText2 style={{ ...leftAlignedStyle}} >Maithreyi</HaasText2>
        <HaasText2 style={{ ...leftAlignedStyle }}>Pejathaya</HaasText2>
      </NameDiv>
      <DanielText> and I do </DanielText>
      <HaasText  style={{ ...rightAlignedStyle }}>UX Research</HaasText>
      <HaasText style={{ ...rightAlignedStyle, ...(window.innerWidth <= 768 && {marginTop: "-10px"}) }}>& Design</HaasText>
      <DanielText  style={{ ...rightAlignedStyle}}>
        really well!
      </DanielText>
    </StyledDiv>
  );
};

export default HomePageHeading;