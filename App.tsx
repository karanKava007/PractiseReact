import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ProductStack } from './src/routes/stackNavigation';

function App(): JSX.Element {

  return (
    <>
      <NavigationContainer>
        <ProductStack />
      </NavigationContainer>
    </>
  );
}

export default App;
