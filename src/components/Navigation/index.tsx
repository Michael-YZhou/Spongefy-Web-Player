import { memo, FC, ReactNode } from 'react';
import { IRoute } from '@/services/routing/RoutingService';
import { renderNavigation } from '@/services/navigation/NavigationService';

interface INavigation {
  children?: ReactNode;
  routes: IRoute[];
}

const Navigation: FC<INavigation> = ({ routes }) => {
  return <nav>{renderNavigation(routes)}</nav>;
};

export default memo(Navigation);
