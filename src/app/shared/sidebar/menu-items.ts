import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Competitions',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/card',
    title: 'Members',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/dropdown',
    title: 'Fishes',
    icon: 'bi bi-menu-app',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/table',
    title: 'Hunts',
    icon: 'bi bi-layout-split',
    class: '',
    extralink: false,
    submenu: []
  },
];
