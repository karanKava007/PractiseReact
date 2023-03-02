import React from 'react';
import { Provider } from 'react-redux';
import Counter from './src/container/Counter';
import Post from './src/post/Post';
import { configStore } from './src/redux/Store';

function App(): JSX.Element {
  const storeData = configStore();
  return (
    <>
      {/* <NavigationContainer>
        <ProductStack />
        <TabNavigatorStack />
      </NavigationContainer> */}

      <Provider store={storeData}>
        <Post />
      </Provider>
    </>
  );
}

export default App;
