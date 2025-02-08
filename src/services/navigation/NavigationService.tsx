import { NavLink } from 'react-router-dom';
import { IRoute } from '@/services/routing/RoutingService';

// Function to filter out children with label 'Default'
const filterChildrenWithDefaultLabel = (routes: IRoute[]): IRoute[] => {
  return routes.filter((route) => route.label !== 'Default');
};

// Function to render top-level navigation
export const renderNavigation = (routes: IRoute[]) => {
  const filteredRoutes = filterChildrenWithDefaultLabel(routes); // Filter only children with 'Default'

  return (
    <ul>
      {filteredRoutes.map((route) => (
        <li key={route.path}>
          <NavLink
            to={route.path}
            style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
