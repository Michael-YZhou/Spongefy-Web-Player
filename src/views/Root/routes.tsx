import { IRoute } from '@/services/routing/RoutingService';
import { discoverRoute } from '@/views/Discover/routes';
import { collectionRoute } from '@/views/Collection/routes';
import { follownRoute } from '@/views/Follow/routes';
import { downloadRoute } from '@/views/Download/routes';
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
