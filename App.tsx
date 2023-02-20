import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProductStack } from './src/routes/StackNavigation';
import { TabNavigatorStack } from './src/routes/DrawNavigator';

function App(): JSX.Element {

  return (
    <>
      <NavigationContainer>
        {/* <ProductStack /> */}
        <TabNavigatorStack />
      </NavigationContainer>
    </>
  );
}

export default App;
