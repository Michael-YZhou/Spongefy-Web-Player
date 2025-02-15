import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useAppDispach';
import { changeMassageAction } from './store/modules/counter';

function App() {
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
      <RouterProvider router={router} />
      <h2>Test Redux</h2>
      <p>count:{count}</p>
      <p>message:{message}</p>
      <button onClick={handleChangeMessage}>change message</button>
    </div>
  );
}

export default App;
