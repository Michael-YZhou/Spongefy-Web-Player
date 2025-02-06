// import { type RouteObject } from "react-router-dom";
import { createHashRouter, Navigate } from 'react-router-dom';
import Discover from '@/views/discover';
import Collection from '@/views/collection';
import Follow from '@/views/follow';
import Download from '@/views/download';

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/discover" />, // Redirect to /discover
  },
  {
    path: '/discover',
    element: <Discover />,
  },
  {
    path: '/collection',
    element: <Collection />,
  },
  {
    path: '/follow',
    element: <Follow />,
  },
  {
    path: '/download',
    element: <Download />,
  },
]);

export default router;
