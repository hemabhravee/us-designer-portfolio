import { FunctionComponent } from "react";
import { fonts } from "../../constants/fonts";

const danielStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: fonts.danielSans,
  fontSize: "40px"
}
const haasStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: fonts.alteHaasGrotesk,
  fontWeight: "bold",
  fontSize: "52px"
}


const HomePageHeading: FunctionComponent = () => {
  return <div style={{display: "flex", flexDirection: "column"}}>
    <div style={danielStyle}>I'm</div>
    <div style={haasStyle}>Maithreyi</div>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <div style={{...haasStyle, width: "auto"}}>Pejathaya</div>
      <div style={{...danielStyle, width: "auto", textWrap: "nowrap"}}>and I do</div>
      <div style={{...haasStyle, width: "auto"}}>UX Research</div>
    </div>
    <div style={{ ...haasStyle, textAlign: "end"}}>& Design</div>
    <div style={{ ...danielStyle, textAlign: "end" }}>really well!</div>
  </div>;
}

export default HomePageHeading;