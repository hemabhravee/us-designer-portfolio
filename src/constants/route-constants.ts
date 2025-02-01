

export type RouteType = {
  path: string;
  headerText: string;
  key: RouteKeys;
  // icon: As;
  tooltip?: string;
  helmetText?: string;
  description: string;
};

export enum RouteKeys {
  HOME = 'home',
  UX_CASE_STUDIES = 'uxCaseStudies',
  ABOUT_ME = 'aboutMe',
}

export const RouteConstants: { [key in RouteKeys]: RouteType } = {
  home: {
    path: '/home',
    headerText: 'Home',
    key: RouteKeys.HOME,
    description: 'This is where the heart is',
    // icon: HiOutlineHome,
  },
  uxCaseStudies: {
    path: '/ux-case-studies',
    headerText: 'UX Case Studies',
    key: RouteKeys.UX_CASE_STUDIES,
    description: 'UX Case Studies',
    // icon: HiOutlineColorSwatch,
  },
  aboutMe: {
    path: '/about-me',
    headerText: 'About Me',
    key: RouteKeys.ABOUT_ME,
    description: 'About Mes',
    // icon: HiOutlineColorSwatch,
  },
};
