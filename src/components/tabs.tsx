import { FunctionComponent } from "react";
import { Tab } from "../stores/tab-store";
import TabButton from "./common/tab";
import { TabData } from "../types/tab-data";
import { RouteConstants } from "../constants/route-constants";

const tabs: TabData[] = [
  {
    label: "UX Case Studies",
    tab: Tab.UX_CASE_STUDIES,
    route: RouteConstants.uxCaseStudies,
  },
  {
    label: "Home",
    tab: Tab.HOME,
    route: RouteConstants.home,
  },
  {
    label: "About Mes",
    tab: Tab.ABOUT_ME,
    route: RouteConstants.aboutMe,
  },
]

const Tabs: FunctionComponent = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "0 10%"
    }}>
      {
        tabs.map((tabData) => (
          <TabButton tabData={tabData}/>
        ))
      }
  </div>  );
}

export default Tabs;