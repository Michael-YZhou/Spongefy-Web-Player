import { memo } from 'react';
import { FC, ReactNode } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
// import Navigation from '@/components/Navigation';
// import { IRoute } from '@/services/routing/RoutingService';
// import { rootRoute } from '../routes';

import { Link, NavLink } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import headerTitles from '@/assets/data/header-titles.json';

interface IProps {
  children?: ReactNode;
  // TODO
}

const Header: FC<IProps> = () => {
  // Get the children of the root route
  // const routes: IRoute[] = rootRoute.children ? rootRoute.children : [];

  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      );
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* <Navigation routes={routes} /> */}
          <Link className="logo" to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="title-item" key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="music/video/radio/user"
            prefix={<SearchOutlined />}
          />
          <div className="centre">Creator Centre</div>
          <div className="login">Login</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
};

export default memo(Header);
