import { createHashRouter } from 'react-router-dom';
import { homeRoute } from '@/views/Home/routes';
import { mapRoutes } from '@/services/routing/RoutingService';
import { createRouteArray } from '@/services/routing/RoutingService';

// Define the routes
const routes = createRouteArray(homeRoute);
// Create the router
export const router = createHashRouter(mapRoutes(routes));
