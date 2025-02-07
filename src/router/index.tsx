import { createHashRouter } from 'react-router-dom';
import { homeRoutes } from '@/views/Home/routes';
import { mapRoutes } from '@/services/routing/RoutingService';

// Create the router
export const router = createHashRouter(mapRoutes(homeRoutes));
