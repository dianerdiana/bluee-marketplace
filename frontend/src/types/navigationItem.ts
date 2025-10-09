import type { IconName } from './iconNames';

export type NavigationItem = {
  header?: string;
  title: string;
  linkTitle?: string;
  linkDescription?: string;
  icon?: IconName;
  navLink?: string;
  subItems?: NavigationItem[];
};
