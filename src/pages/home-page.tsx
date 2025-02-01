import { FunctionComponent, useEffect } from "react";
import HomePageHeading from "../components/common/heading";
import HomePageSubHeading from "../components/common/sub-heading";
import Tabs from "../components/tabs";
import Layout from "../components/layout";
import MainCard from "../components/MainCard";
import { Tab, tabStore } from "../stores/tab-store";


const HomePage: FunctionComponent = () => {
  useEffect(() => {
    tabStore.setCurrentTab(Tab.HOME);
  })
  return (
    <Layout>
      <MainCard>
        <HomePageHeading />
        <HomePageSubHeading />
        <Tabs />
      </MainCard>
    </Layout>
  );
}

export default HomePage;