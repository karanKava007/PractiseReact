import React from 'react';
// import City from './src/Screens/City';
// import LocationAccsess from './src/Screens/LocationAccsess';
// import OtpReg from './src/Screens/OtpReg';
import OtpVerification from './src/Screens/OtpVerification';
// import SplashScreen from './src/Screens/SplashScreen';
// import HelpList from './src/Screens/HelpList';
import { NavigationContainer } from '@react-navigation/native';
import { ProductStack } from './src/routes/stackNavigation';

function App(): JSX.Element {

  return (
    <>
      {/* <SplashScreen /> */}
      {/* <OtpVerification /> */}
      {/* <OtpReg /> */}
      {/* <LocationAccsess/> */}
      {/* <City/> */}
      {/* <HelpList /> */}
      <NavigationContainer>
        <ProductStack/>
      </NavigationContainer>
    </>
  );
}

export default App;
