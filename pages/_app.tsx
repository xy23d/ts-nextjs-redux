import React from "react";
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { createWrapper } from 'next-redux-wrapper'
import { initStore } from '../store'

const wrapper = createWrapper(initStore)

const app = ({Component, ...rest}: AppProps) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default app
