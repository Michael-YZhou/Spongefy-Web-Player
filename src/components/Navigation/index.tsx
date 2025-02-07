import { Link } from 'react-router-dom';
import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface INavigation {
  children?: ReactNode;
  // TODO
}

const Navigation: FC<INavigation> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/collection">Collection</Link>
        </li>
        <li>
          <Link to="/follow">Follow</Link>
        </li>
        <li>
          <Link to="/download">Download</Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Navigation);
