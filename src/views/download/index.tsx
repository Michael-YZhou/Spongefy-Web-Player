import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IDownload {
  children?: ReactNode;
  // TODO
}

const Download: FC<IDownload> = () => {
  return <div>Download</div>;
};

export default memo(Download);
