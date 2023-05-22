import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Menu from './src/screens/Menu/Menu';
import CreateMedico from './src/screens/CreateMedico/CreateMedico';
import CreateEnfermeira from './src/screens/CreateEnfermeira/CreateEnfermeira';
import CreatePaciente from './src/screens/CreatePaciente/CreatePaciente';
import ShowUsers from './src/screens/ShowUsers/ShowUsers';
// import EditUsers from './src/screens/EditUsers/EditUsers';
// import EditUser from './src/screens/EditUser/EditUser';
import EditUser from './src/screens/EditUser/EditUser'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="CreateMedico" component={CreateMedico} />
        <Stack.Screen name="CreateEnfermeira" component={CreateEnfermeira} />
        <Stack.Screen name="CreatePaciente" component={CreatePaciente} />
        <Stack.Screen name="ShowUsers" component={ShowUsers} />
        <Stack.Screen name="EditUser" component={EditUser}/>
        {/* <Stack.Screen name="EditUsers" component={EditUsers} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
