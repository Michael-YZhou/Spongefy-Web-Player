import { lazy } from 'react';
import { IRoute } from '@/services/routing/RoutingService';

// Lazy-load parent and child components
const Download = lazy(() => import('@/views/Temp-Download'));

// Define and export the collection route
export const downloadRoute: IRoute = {
  path: '/download',
  element: <Download />,
  isPrivate: true,
  label: 'Download',
};
