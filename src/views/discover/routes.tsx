import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { IRoute } from '@/services/routing/RoutingService';

// Lazy-load parent and child components
const Discover = lazy(() => import('@/views/Discover'));
const Recommend = lazy(() => import('@/views/Discover/Recommend'));
const Ranking = lazy(() => import('@/views/Discover/Ranking'));
const Playlist = lazy(() => import('@/views/Discover/Playlist'));
const Radio = lazy(() => import('@/views/Discover/Radio'));
const Artist = lazy(() => import('@/views/Discover/Artist'));
const Album = lazy(() => import('@/views/Discover/Album'));

// Define default route for discover
const discoverDefault: IRoute = {
  path: '/discover',
  element: <Navigate to="/discover/recommend" />,
  isPrivate: false,
  label: 'DiscoverDefault',
};

// Define child routes
const discoverChildren: IRoute[] = [
  discoverDefault,
  {
    path: '/discover/recommend',
    element: <Recommend />,
    isPrivate: false,
    label: 'Recommend',
  },
  {
    path: '/discover/ranking',
    element: <Ranking />,
    isPrivate: false,
    label: 'Ranking',
  },
  {
    path: '/discover/playlist',
    element: <Playlist />,
    isPrivate: false,
    label: 'Playlist',
  },
  {
    path: '/discover/radio',
    element: <Radio />,
    isPrivate: false,
    label: 'Radio',
  },
  {
    path: '/discover/artist',
    element: <Artist />,
    isPrivate: false,
    label: 'Artist',
  },
  {
    path: '/discover/album',
    element: <Album />,
    isPrivate: false,
    label: 'Album',
  },
];

// Define and export the discover route
export const discoverRoute: IRoute = {
  path: '/discover',
  element: <Discover />,
  isPrivate: false,
  label: 'Discover',
  children: discoverChildren,
};
