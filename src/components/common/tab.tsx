import { FunctionComponent, useMemo, useState } from "react";
import { colors } from "../../constants/colors";
import { Tab, tabStore } from "../../stores/tab-store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { TabData } from "../../types/tab-data";
import { fonts } from "../../constants/fonts";

interface TabProps {
  tabData: TabData,
}

const TabButton: FunctionComponent<TabProps> = ({ tabData }: TabProps) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const isSelected = tabStore.currentTab === tabData.tab;

  return (
    <div
      className="transition-all duration-300 ease-in-out"
      style={{
        borderRadius: "4px",
        width: "190px",
        height: "42px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkerLightGreen,
        color: isSelected ? colors.darkRed : colors.darkTeal,
        fontWeight: isSelected || isHovering ? "normal" : "bold",
        fontFamily: isSelected || isHovering ? fonts.danielSans : fonts.alteHaasGrotesk,
        borderBottom: isSelected ? `2px solid ${colors.darkRed}` : "none",
        fontSize: isSelected || isHovering ? "22px" : "18px",
        transition: "color 0.2s ease, border-bottom 0.2s ease, font-weight 100ms ease-in-out, font-family 100ms ease-in-out, font-size 200ms ease-in-out, height 100ms ease-in-out"
      }}
      onClick={() => {
        tabStore.setCurrentTab(tabData.tab);
          navigate(tabData.route.path)
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {tabData.label}
    </div>);
}

export default observer(TabButton);