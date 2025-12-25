'use client';

import { store } from '@/redux/store';
import { Children } from '@/types';
import { Provider } from 'react-redux';

const ReduxProvider = ({ children }: Children) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
