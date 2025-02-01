import { FunctionComponent } from "react";
import LoveSvg from '../../assets/love.png';



const HomePageSubHeading: FunctionComponent = () => {
  return (
    <div style={{
      width: "100%",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold"
    }}>
      I speak business, design, and tech, translating complex requirements into
      experiences users
      {/* <img src={LoveSvg} alt='mySvgImage' /> */}
      <span style={{ position: "relative", color: "transparent" }}>
        <img style={{position: "absolute", top: 0, right: -4}} src={LoveSvg} className="logo" alt="Vite logo" />
        {" "} LOVE
      </span>



    </div>
  );
}

export default HomePageSubHeading;