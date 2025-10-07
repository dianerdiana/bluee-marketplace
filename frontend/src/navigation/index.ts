import type { IconName } from '@/types/iconNames';

// ** Icons
export type SidenavItem = {
  isHeader?: boolean;
  title: string;
  icon?: IconName;
  href?: string;
  children?: SidenavItem[];
};

export const navigation: SidenavItem[] = [
  {
    title: 'Main Menu',
    isHeader: true,
  },
  {
    title: 'Overview',
    href: '/dashboard',
    icon: 'Home',
  },
  {
    title: 'My Transaction',
    href: '/admin/guests',
    icon: 'Stickynote',
  },
  {
    title: 'Category Sub',
    href: '/admin/category',
    icon: 'Map1',
    children: [
      {
        title: 'Item 1',
        href: '/admin/item-1',
        icon: 'RecordCircle',
      },
      {
        title: 'Item 2',
        href: '/admin/item-2',
        icon: 'RecordCircle',
      },
    ],
  },
];
