import { FunctionComponent } from "react";
import { colors } from "../constants/colors";

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties

}

const MainCard: FunctionComponent<LayoutProps> = ({children, style}: LayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: colors.lightGreen,
        display: "Flex",
        flexDirection: "column",
        gap: "60px",
        padding: "100px 17%",
        borderRadius: "20px",
        color: colors.darkTeal,
        // height: "80vh",
        ...style  // Fixed the spread operator syntax
    }}>
        {children}
    </div>
  );
}

export default MainCard;