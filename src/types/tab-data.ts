import { RouteType } from "../constants/route-constants";
import { Tab } from "../stores/tab-store";

export interface TabData {
  route: RouteType,
  label: string,
  tab: Tab
}