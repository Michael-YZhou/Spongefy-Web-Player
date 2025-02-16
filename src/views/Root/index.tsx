import { memo, Suspense, FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../../components/Footer';

import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispach';
import { changeMassageAction } from '../../store/modules/counter';

interface IRoot {
  children?: ReactNode;
  // TODO
}

const Root: FC<IRoot> = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqual,
  );

  const dispatch = useAppDispatch();
  const handleChangeMessage = () =>
    dispatch(changeMassageAction('Hello Redux Toolkit'));

  return (
    <div>
      <Header />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <Footer />
      <div>
        <h2>Test Redux</h2>
        <p>count:{count}</p>
        <p>message:{message}</p>
        <button onClick={handleChangeMessage}>change message</button>
      </div>
    </div>
  );
};

export default memo(Root);
