import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { FeaturedChartsWrapper } from './style';
import SectionHeaderV1 from '@/components/SectionHeaderV1';
import { useAppSelector } from '@/hooks/useAppSelector';
import FeaturedChartsItem from '../FeaturedChartsItem';
import { shallowEqual } from 'react-redux';

interface IProps {
  children?: ReactNode;
  // TODO
}

const FeaturedCharts: FC<IProps> = () => {
  const { featuredCharts } = useAppSelector(
    (state) => ({
      featuredCharts: state.recommend.featuredCharts,
    }),
    shallowEqual,
  );

  return (
    <FeaturedChartsWrapper>
      <SectionHeaderV1 title="Featured Charts" moreLink="/discover/ranking" />
      <div className="content">
        {featuredCharts.map((item) => {
          return <FeaturedChartsItem key={item.id} itemData={item} />;
        })}
      </div>
    </FeaturedChartsWrapper>
  );
};

export default memo(FeaturedCharts);
