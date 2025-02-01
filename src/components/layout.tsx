import { FunctionComponent } from "react";

interface LayoutProps {
  children?: React.ReactNode;
  style?: React.CSSProperties

}

const Layout: FunctionComponent<LayoutProps> = ({children, style}: LayoutProps) => {
  return (
    <div
      // className="min-h-screen overflow-x-hidden overscroll-none"
      style={{
        overscrollBehaviorY: "none",
        padding: "80px 12.5%",
        minHeight: "100vh", // Changed from height to minHeight
        width: "100%",      // Changed from 100vw to 100%
        backgroundImage: `url("../assets/background.png")`,
        backgroundSize: "cover",  // Added to ensure image covers the container
        backgroundPosition: "center", // Added to center the background
        backgroundRepeat: "no-repeat", // Prevents image from repeating
        backgroundAttachment: "fixed", // Keeps background fixed while scrolling
        position: "relative",  // Changed from absolute to relative
        ...style  // Fixed the spread operator syntax
    }}>
        {children}
    </div>
  );
}

export default Layout;