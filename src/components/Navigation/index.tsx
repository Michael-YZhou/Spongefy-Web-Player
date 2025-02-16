import { memo, FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { IRoute } from '@/services/routing/RoutingService';
import { filterChildrenWithDefaultLabel } from '@/services/navigation/NavigationService';

interface INavigation {
  children?: ReactNode;
  routes: IRoute[];
}

const Navigation: FC<INavigation> = ({ routes }) => {
  // Filter out children routes with label 'Default'
  const filteredRoutes = filterChildrenWithDefaultLabel(routes);

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

export default memo(Navigation);
