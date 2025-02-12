import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootStateType } from '../store';

// Export a hook that can be reused to get the state of the store with the correct type
// so you don't have to type the state every time you use the useSelector hook.
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
