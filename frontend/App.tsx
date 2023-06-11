import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Menu from './src/screens/Menu/Menu';
import CreateMedico from './src/screens/CreateMedico/CreateMedico';
import CreateEnfermeira from './src/screens/CreateEnfermeira/CreateEnfermeira';
import CreatePaciente from './src/screens/CreatePaciente/CreatePaciente';
import ShowUsers from './src/screens/ShowUsers/ShowUsers';
import CreateConsulta from './src/screens/CreateConsulta/CreateConsulta';
// import EditUsers from './src/screens/EditUsers/EditUsers';
// import EditUser from './src/screens/EditUser/EditUser';
import EditUser from './src/screens/EditUser/EditUser';
import ShowConsultas from './src/screens/ShowConsultas/ShowConsultas';
import EditConsulta from './src/screens/EditConsulta/EditConsulta';
import ShowProntuario from './src/screens/ShowProntuario/ShowProntuario';
import {NativeBaseProvider} from 'native-base';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Cadastrar Médico" component={CreateMedico} />
          <Stack.Screen name="Cadastrar Enfermeira" component={CreateEnfermeira} />
          <Stack.Screen name="Cadastrar Paciente" component={CreatePaciente} />
          <Stack.Screen name="Mostrar Usuários" component={ShowUsers} />
          <Stack.Screen name="Editar Usuário" component={EditUser} />
          <Stack.Screen name="Cadastrar Consulta" component={CreateConsulta} />
          <Stack.Screen name="Mostrar Consultas" component={ShowConsultas} />
          <Stack.Screen name="Editar Consulta" component={EditConsulta} />
          <Stack.Screen name="Mostrar Prontuario" component={ShowProntuario} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
