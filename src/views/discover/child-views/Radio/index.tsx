import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IRadio {
  children?: ReactNode;
  // TODO
}

const Radio: FC<IRadio> = () => {
  return <div>Radio</div>;
};

export default memo(Radio);
