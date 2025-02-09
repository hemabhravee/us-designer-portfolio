import { FunctionComponent, useMemo, useState } from "react";
import { colors } from "../../constants/colors";
import { Tab, tabStore } from "../../stores/tab-store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import { TabData } from "../../types/tab-data";
import { fonts } from "../../constants/fonts";
import styled from "styled-components";

interface TabProps {
  tabData: TabData,
}

const StyledTabButton = styled.div<{ isSelected: boolean; isHovering: boolean }>`
  border-radius: 4px;
  width: 190px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${colors.darkerLightGreen};
  color: ${props => props.isSelected ? colors.darkRed : colors.darkTeal};
  font-weight: ${props => (props.isSelected || props.isHovering) ? "normal" : "bold"};
  font-family: ${props => (props.isSelected || props.isHovering) ? fonts.danielSans : fonts.alteHaasGrotesk};
  border-bottom: ${props => props.isSelected ? `2px solid ${colors.darkRed}` : "none"};
  font-size: ${props => (props.isSelected || props.isHovering) ? "22px" : "18px"};
  transition: color 0.2s ease, border-bottom 0.2s ease, font-weight 100ms ease-in-out, font-family 100ms ease-in-out, font-size 200ms ease-in-out, height 100ms ease-in-out;

  @media (min-width: 640px) {
    font-size: ${props => (props.isSelected || props.isHovering) ? "14px" : "12px"};
    width: 100px;
  }
  @media (min-width: 768px) {
    font-size: ${props => (props.isSelected || props.isHovering) ? "14px" : "12px"};
    width: 100px;
  }
  @media (min-width: 1024px) {
    font-size: ${props => (props.isSelected || props.isHovering) ? "18px" : "16px"};
    width: 150px;
  }
  @media (min-width: 1280px) {
    font-size: ${props => (props.isSelected || props.isHovering) ? "22px" : "18px"};
    width: 190px;
  }
`;

const TabButton: FunctionComponent<TabProps> = ({ tabData }: TabProps) => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const isSelected = tabStore.currentTab === tabData.tab;

  return (
    <StyledTabButton
      isSelected={isSelected}
      isHovering={isHovering}
      onClick={() => {
        tabStore.setCurrentTab(tabData.tab);
          navigate(tabData.route.path)
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {tabData.label}
    </StyledTabButton>);
}

export default observer(TabButton);