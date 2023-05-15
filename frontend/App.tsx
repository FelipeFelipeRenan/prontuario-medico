import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Menu from './screens/Menu/Menu';
import CreateUser from './screens/CreateUser/CreateUser';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
