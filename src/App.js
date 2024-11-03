import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from './screens/Home/HomeScreen';
import BillingScreen from './screens/Billing/BillingScreen';
import AccountScreen from './screens/Account/AccountScreen';
import LoginScreen from './screens/Auth/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Billing" component={BillingScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
