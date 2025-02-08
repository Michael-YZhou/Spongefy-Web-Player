import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

// Define the interface for a route
export interface IRoute {
  path: string;
  element: ReactNode;
  isPrivate: boolean;
  // A human-friendly label for the navigation link
  label: string;
  // (Optional) Nested child routes
  children?: IRoute[];
}

// Function to create a route
export const createRoute = (
  path: string,
  element: ReactNode,
  isPrivate: boolean,
  label: string,
  children: IRoute[],
): IRoute => ({
  path,
  element,
  isPrivate,
  label,
  children,
});

// Function to create an array of routes
export const createRouteArray = (...routes: IRoute[]): IRoute[] => {
  return routes;
};

// Map routes to RouteObject
export const mapRoutes = (routes: IRoute[]): RouteObject[] =>
  routes.map(({ children, ...route }) => {
    const routeObject: RouteObject = {
      path: route.path,
      element: route.element,
    };

    if (children) {
      routeObject.children = mapRoutes(children);
    }
    return routeObject;
  });
