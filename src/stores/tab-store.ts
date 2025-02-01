import { makeAutoObservable } from 'mobx';
import { RouteConstants } from '../constants/route-constants';

export enum Tab {
  ABOUT_ME, UX_CASE_STUDIES, HOME
}

class TabStore {
  currentTab?: Tab;

  public setCurrentTab = (newTab: Tab) => { this.currentTab = newTab };

  constructor() {
    makeAutoObservable(this);
  }
}

export const tabStore = new TabStore();