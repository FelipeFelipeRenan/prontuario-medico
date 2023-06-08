import { useState, useEffect} from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function TabNavigator(): JSX.Element {
  const navigation = useNavigation()
  const [user, setUser] = useState<any>(null)


  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  }


  // load user
  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem("user");

      if(res){
        setUser(JSON.parse(res))
      }
    }
    getUser();
  }, []);

  return (
    <View>
      {user && user.accessLevel === 0 &&
        <View>
          <Text onPress={() => navigation.navigate('CreateMedico')}>Cadastrar médico</Text>
          <Text onPress={() => navigation.navigate('CreateEnfermeira')}>Cadastrar enfermeira(o)</Text>
          <Text onPress={() => navigation.navigate('CreatePaciente')}>Cadastrar paciente</Text>
          <Text onPress={() => navigation.navigate('ShowUsers')}>Ver usuários do sistema</Text>
        </View>
      }

      {user && (user.accessLevel === 1 || user.accessLevel === 2) &&
        <View>
          <Text onPress={() => navigation.navigate('CreateConsulta')}>Cadastrar consulta</Text>
          <Text onPress={() => navigation.navigate('ShowConsultas')}>Ver consultas</Text>
        </View>
      }

    {user && user.accessLevel === 3 &&
      <View>
        <Text onPress={() => navigation.navigate('ShowProntuario')}>Consultar prontuário</Text>
      </View>
    }

    {user && 
      <View>
        <Text onPress={() => navigation.navigate('Menu')}>Menu</Text>
        <Text onPress={() => logout()}>Sair</Text>
      </View>
    }
    </View>
  );
}
