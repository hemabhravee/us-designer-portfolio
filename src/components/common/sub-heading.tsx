import { FunctionComponent } from "react";
import LoveSvg from '../../assets/love.png';
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: center;
  font-weight: bold;

  @media (min-width: 640px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 32px;
  }

`;

const HomePageSubHeading: FunctionComponent = () => {
  return (
    <StyledDiv
      // style={{
      // width: "100%",
      // textAlign: "center",
      // fontSize: "20px",
      // fontWeight: "bold"
      // }}
    >
      I speak business, design, and tech, translating complex requirements into
      experiences
      {window.innerWidth < 1024 && (
          <br />
        )}
      {" "} users
      {/* <img src={LoveSvg} alt='mySvgImage' /> */}
      <span style={{ position: "relative", color: "transparent" }}>
        {" "} LOVE
        <img style={{position: "absolute", top: 0, right: -4}} src={LoveSvg} className="logo" alt="Vite logo" />
      </span>

    </StyledDiv>
  );
}

export default HomePageSubHeading;