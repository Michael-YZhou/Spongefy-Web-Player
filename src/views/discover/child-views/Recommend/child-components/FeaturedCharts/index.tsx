import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { FeaturedChartsWrapper } from './style';
import SectionHeaderV1 from '@/components/SectionHeaderV1';

interface IProps {
  children?: ReactNode;
  // TODO
}

const FeaturedCharts: FC<IProps> = () => {
  return (
    <FeaturedChartsWrapper>
      <SectionHeaderV1 title="Featured Charts" moreLink="/discover/ranking" />
      <div className="content">Content</div>
    </FeaturedChartsWrapper>
  );
};

export default memo(FeaturedCharts);
