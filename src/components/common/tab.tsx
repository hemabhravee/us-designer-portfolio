import { FunctionComponent, useMemo } from "react";
import { colors } from "../../constants/colors";
import { Tab, tabStore } from "../../stores/tab-store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { TabData } from "../../types/tab-data";

interface TabProps {
  tabData: TabData,
}

const TabButton: FunctionComponent<TabProps> = ({ tabData }: TabProps) => {
  const navigate = useNavigate();

  const isSelected = tabStore.currentTab === tabData.tab;

  return (
    <div
      className="font-[AlteHaasGrotesk] font-bold hover:font-[DanielSans] hover:font-normal"
      style={{
        width: "190px",
        height: "42px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkerLightGreen,
        color: isSelected ? colors.darkRed : colors.darkTeal,
        borderBottom: isSelected ? `2px solid ${colors.darkRed}`: "none"
      }}
      onClick={() => {
        tabStore.setCurrentTab(tabData.tab);
          navigate(tabData.route.path)
      } }
    >
      {tabData.label}
    </div>);
}

export default observer(TabButton);