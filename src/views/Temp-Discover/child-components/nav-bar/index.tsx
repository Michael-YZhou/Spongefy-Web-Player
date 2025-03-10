import { memo } from 'react';
import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarWrapper } from './style';
import { discoverMenu } from '@/assets/data/local-data';

interface INavBar {
  children?: ReactNode;
  // TODO
}

const NavBar: FC<INavBar> = () => {
  return (
    <NavBarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div key={item.link} className="item">
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          );
        })}
      </div>
    </NavBarWrapper>
  );
};

export default memo(NavBar);
