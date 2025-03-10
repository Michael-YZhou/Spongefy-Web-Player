import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface ICollection {
  children?: ReactNode;
  // TODO
}

const Collection: FC<ICollection> = () => {
  return <div>Collection</div>;
};

export default memo(Collection);
