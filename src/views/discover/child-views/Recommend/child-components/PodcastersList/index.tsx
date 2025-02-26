import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { PodcastersListWrapper } from './style';

interface IProps {
  children?: ReactNode;
  // TODO
}

const PodcastersList: FC<IProps> = () => {
  return <PodcastersListWrapper>Popular Podcasters</PodcastersListWrapper>;
};

export default memo(PodcastersList);
