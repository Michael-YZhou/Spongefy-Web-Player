import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeaderV1Wrapper } from './style';

interface IProps {
  children?: ReactNode;
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
}

const SectionHeaderV1: FC<IProps> = (props) => {
  const {
    title = 'Defalut Title',
    keywords = [],
    moreText = 'more',
    moreLink = '/',
  } = props;

  return (
    <SectionHeaderV1Wrapper className="sprite_02">
      <div className="left">
        <div className="circle"></div>
        <h2 className="title">{title}</h2>
        <div className="keywords">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <span className="link">{item}</span>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <Link className="more" to={moreLink}>
          {moreText}
        </Link>
        <i className="icon">
          <strong>&gt;</strong>
        </i>
      </div>
    </SectionHeaderV1Wrapper>
  );
};

export default memo(SectionHeaderV1);
