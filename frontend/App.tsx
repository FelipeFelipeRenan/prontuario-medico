import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Paciente from './screens/Users/Paciente';
import Medico from './screens/Users/Medico';
import Enfermeiro from './screens/Users/Enfermeiro';

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
        <Stack.Screen name="Paciente" component={Paciente} />
        <Stack.Screen name="Medico" component={Medico} />
        <Stack.Screen name="Enfermeiro" component={Enfermeiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
