import { FunctionComponent, useEffect } from "react";
import Layout from "../components/layout";
import HomePageHeading from "../components/common/heading";
import HomePageSubHeading from "../components/common/sub-heading";
import Tabs from "../components/tabs";
import Projects from "../components/home-page/projects";
import { projects } from "../constants/projects";
import MainCard from "../components/MainCard";
import { Tab, tabStore } from "../stores/tab-store";

interface UxCaseStudiesProps {

}

const UxCaseStudies: FunctionComponent<UxCaseStudiesProps> = () => {
  useEffect(() => {
      tabStore.setCurrentTab(Tab.UX_CASE_STUDIES);
  })

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