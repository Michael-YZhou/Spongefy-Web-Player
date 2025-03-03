import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  // TODO
}

const Player: FC<IProps> = () => {
  return <div>Player</div>;
};

export default memo(Player);
