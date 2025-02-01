import { FunctionComponent } from "react";
import Layout from "../components/layout";
import HomePageHeading from "../components/common/heading";
import HomePageSubHeading from "../components/common/sub-heading";
import Tabs from "../components/tabs";
import Projects from "../components/home-page/projects";
import { projects } from "../constants/projects";
import { colors } from "../constants/colors";

interface UxCaseStudiesProps {

}

const UxCaseStudies: FunctionComponent<UxCaseStudiesProps> = () => {
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
      <Projects projects={projects}/>
    </div>
  </Layout>
  );
}

export default UxCaseStudies;