import { FunctionComponent } from "react";
import Layout from "../components/layout";
import HomePageHeading from "../components/common/heading";
import HomePageSubHeading from "../components/common/sub-heading";
import Tabs from "../components/tabs";
import Projects from "../components/home-page/projects";
import { projects } from "../constants/projects";
import MainCard from "../components/MainCard";

interface UxCaseStudiesProps {

}

const UxCaseStudies: FunctionComponent<UxCaseStudiesProps> = () => {
  return (
    <Layout>
    <MainCard>
      <HomePageHeading />
      <HomePageSubHeading />
      <Tabs />
      <Projects projects={projects}/>
    </MainCard>
  </Layout>
  );
}

export default UxCaseStudies;