import { FunctionComponent } from "react";
import { fonts } from "../../constants/fonts";


const HomePageHeading: FunctionComponent = () => {
  return <div style={{display: "flex", flexDirection: "column"}}>
    <div className="text-[40px] " style={{ width: "100%", fontFamily: fonts.danielSans }}>I'm</div>
    <br />
    <div className="text-[40px] " style={{ width: "100%", fontFamily: fonts.alteHaasGrotesk }}>Maithreyi</div>
    <br />
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div className="text-[40px] " style={{ fontFamily: fonts.alteHaasGrotesk }}>Pejathaya</div>{" "}
      <div className="text-[40px] " style={{ fontFamily: fonts.danielSans }}>& I do</div>{" "}
      <div className="text-[40px] " style={{ fontFamily: fonts.alteHaasGrotesk }}>UX Research</div>
    </div>
    <br />
    <div className="text-[40px] " style={{ width: "100%", fontFamily: fonts.alteHaasGrotesk, textAlign: "end" }}>& Design</div>
    <div className="text-[40px] " style={{ width: "100%", fontFamily: fonts.danielSans, textAlign: "end" }}>really well!</div>
  </div>;
}

export default HomePageHeading;