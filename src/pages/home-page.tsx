import { FunctionComponent } from "react";
import HomePageHeading from "../components/common/heading";
import HomePageSubHeading from "../components/common/sub-heading";
import Tabs from "../components/tabs";
import Layout from "../components/layout";
import { colors } from "../constants/colors";


const HomePage: FunctionComponent = () => {
  return (
    <Layout>
      <div style={{
        backgroundColor: colors.lightGreen,
        display: "Flex",
        flexDirection: "column",
        gap: "50px",
        padding: "100px 160px",
        borderRadius: "20px"
      }}>
        <HomePageHeading />
        <HomePageSubHeading />
        <Tabs />
      </div>
    </Layout>
  );
}

export default HomePage;