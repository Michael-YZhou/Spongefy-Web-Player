import { IRoute } from '@/services/routing/RoutingService';

// Function to filter out children with label 'Default'
export const filterChildrenWithDefaultLabel = (routes: IRoute[]): IRoute[] => {
  return routes.filter((route) => route.label !== 'Default');
};
