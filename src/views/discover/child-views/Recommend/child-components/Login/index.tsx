import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { LoginWrapper } from './style';
import { Link } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
  // TODO
}

const Login: FC<IProps> = () => {
  return (
    <LoginWrapper className="sprite_02">
      <p>Already have an account?</p>
      <p>Log in here.</p>
      <Link to="#/login" className="sprite_02">
        User Login
      </Link>
    </LoginWrapper>
  );
};

export default memo(Login);
