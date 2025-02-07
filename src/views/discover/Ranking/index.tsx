import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IRanking {
  children?: ReactNode;
  // TODO
}

const Ranking: FC<IRanking> = () => {
  return <div>Ranking</div>;
};

export default memo(Ranking);
