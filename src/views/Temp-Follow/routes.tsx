import { lazy } from 'react';
import { IRoute } from '@/services/routing/RoutingService';

// Lazy-load parent and child components
const Follow = lazy(() => import('@/views/Temp-Follow'));

// Define and export the collection route
export const follownRoute: IRoute = {
  path: '/follow',
  element: <Follow />,
  isPrivate: true,
  label: 'Follow',
};
