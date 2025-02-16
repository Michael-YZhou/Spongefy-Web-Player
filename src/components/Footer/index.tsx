import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  // TODO
}

const Footer: FC<IProps> = () => {
  return <div>Footer</div>;
};

export default memo(Footer);
