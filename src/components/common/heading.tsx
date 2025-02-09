import { FunctionComponent } from "react";
import styled from "styled-components";
import { fonts } from "../../constants/fonts";

const DanielText = styled.div`
  width: 100%;
  font-family: ${fonts.danielSans};
  font-size: 40px;
  margin-bottom: -20px;

  @media (min-width: 640px) {
    font-size: 32px;
  }

  @media (min-width: 1280px) {
    font-size: 36px;
  }

`;

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const HaasText = styled.div<Pick<LayoutProps, 'style'>>`
  width: 100%;
  font-family: ${fonts.alteHaasGrotesk};
  font-weight: bold;
  font-size: 52px;
  margin-bottom: -15px;
  line-height: 4rem;

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

  ${props => props.style && { ...props.style }}
`;

const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -15px;
  transform: translateY(-10px);

  @media (min-width: 640px) {
    font-size: 44px;
    justify-content: start;
    gap: 20px;
    padding-bottom: 30px;
  }

  @media (min-width: 768px) {
    font-size: 44px;
    justify-content: start;
    gap: 20px;
    padding-bottom: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 44px;
    gap: 20px;
    padding-bottom: 0px;
  }
  @media (min-width: 1280px) {
    gap: 0px;
    justify-content: space-between;
  }
`;

const HomePageHeading: FunctionComponent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DanielText>I'm</DanielText>
      <HaasText>Maithreyi</HaasText>
      <RowDiv>
        <HaasText style={{ width: "auto", marginTop: '10px' }}>Pejathaya</HaasText>
        <DanielText
          style={{
            width: "auto",
            textWrap: "nowrap",
            transform: "translateY(20px)",
          }}
        >
          and I do
        </DanielText>
        {window.innerWidth >= 1280 && (
          <HaasText style={{ width: "auto" }}>UX Research</HaasText>
        )}
      </RowDiv>
      {window.innerWidth < 1280 && (
          <HaasText style={{ width: "auto", alignSelf: 'end' }}>UX Research</HaasText>
        )}
      <HaasText style={{ textAlign: "end" }}>& Design</HaasText>
      <DanielText style={{ textAlign: "end" }}>really well!</DanielText>
    </div>
  );
};

export default HomePageHeading;