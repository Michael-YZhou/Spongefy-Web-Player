import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeaderV2Wrapper } from './style';

interface IProps {
  children?: ReactNode;
  title?: string;
  moreText?: string;
  moreLink?: string;
}

const SectionHeaderV2: FC<IProps> = (props) => {
  const { title = 'default title', moreText, moreLink } = props;

  return (
    <SectionHeaderV2Wrapper>
      <h3 className="title">{title}</h3>
      {moreText && moreLink && <Link to="/discover/artist">{moreText}</Link>}
    </SectionHeaderV2Wrapper>
  );
};

export default memo(SectionHeaderV2);
