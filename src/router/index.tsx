import { lazy } from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';

// import Discover from '@/views/discover';
// import Collection from '@/views/collection';
// import Follow from '@/views/follow';
// import Download from '@/views/download';

// Lazy load routes
const Discover = lazy(() => import('@/views/discover'));
const Collection = lazy(() => import('@/views/collection'));
const Follow = lazy(() => import('@/views/follow'));
const Download = lazy(() => import('@/views/download'));

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Redirect to /discover
      { path: '/', element: <Navigate to="/discover" /> },
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
    ],
  },
]);

export default router;
