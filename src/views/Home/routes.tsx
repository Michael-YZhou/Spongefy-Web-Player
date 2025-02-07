import { IRoute } from '@/services/routing/RoutingService';
import { discoverRoute } from '@/views/Discover/routes';
import { collectionRoute } from '@/views/Collection/routes';
import { follownRoute } from '@/views/Follow/routes';
import { downloadRoute } from '@/views/Download/routes';
import Home from '.';
import { Navigate } from 'react-router-dom';

const homeDefault: IRoute = {
  path: '/',
  element: <Navigate to="/discover" />,
  isPrivate: false,
  label: 'HomeDefault',
};

const HomeChildren: IRoute[] = [
  homeDefault,
  discoverRoute,
  collectionRoute,
  follownRoute,
  downloadRoute,
];

export const homeRoutes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
    isPrivate: false,
    children: HomeChildren,
    label: 'Home',
  },
];
