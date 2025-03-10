import { lazy } from 'react';
import { IRoute } from '@/services/routing/RoutingService';

// Lazy-load parent and child components
const Collection = lazy(() => import('@/views/Temp-Collection'));

// Define and export the collection route
export const collectionRoute: IRoute = {
  path: '/collection',
  element: <Collection />,
  isPrivate: true,
  label: 'Collection',
};
