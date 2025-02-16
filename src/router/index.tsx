import { createHashRouter } from 'react-router-dom';
import { rootRoute } from '@/views/Root/routes';
import { createRouteArray, mapRoutes } from '@/services/routing/RoutingService';

// Define the routes
const routes = createRouteArray(rootRoute);
// Create the router
export const router = createHashRouter(mapRoutes(routes));
