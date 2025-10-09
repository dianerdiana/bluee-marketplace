import type { NavigationItem } from '@/types/navigationItem';

export const navigation: NavigationItem[] = [
  {
    header: 'Main Menu',
    title: 'Main Menu',
  },
  {
    title: 'Overview',
    linkTitle: 'Dashboard Overview',
    linkDescription: 'View Your Dashboard',
    navLink: '/dashboard',
    icon: 'Home',
  },
  {
    title: 'My Transactions',
    linkTitle: 'Manage Transactions',
    linkDescription: 'View and Manage Your Transactions',
    navLink: '/transactions',
    icon: 'Stickynote',
  },
  {
    title: 'Category Sub',
    navLink: '/admin/category',
    icon: 'Map1',
    subItems: [
      {
        title: 'Item 1',
        navLink: '/admin/item-1',
        icon: 'Cd',
      },
      {
        title: 'Item 2',
        navLink: '/admin/item-2',
        icon: 'Cd',
      },
    ],
  },
];
