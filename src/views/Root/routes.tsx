import { IRoute } from '@/services/routing/RoutingService';
import { discoverRoute } from '@/views/Temp-Discover/routes';
import { collectionRoute } from '@/views/Temp-Collection/routes';
import { follownRoute } from '@/views/Temp-Follow/routes';
import { downloadRoute } from '@/views/Temp-Download/routes';
import Root from '.';
import { Navigate } from 'react-router-dom';

const rootDefaultRoute: IRoute = {
  path: '/',
  element: <Navigate to="/discover" />,
  isPrivate: false,
  label: 'Default',
};

const RootChildren: IRoute[] = [
  rootDefaultRoute,
  discoverRoute,
  collectionRoute,
  follownRoute,
  downloadRoute,
];

export const rootRoute: IRoute = {
  path: '/',
  element: <Root />,
  isPrivate: false,
  children: RootChildren,
  label: 'Root',
};
