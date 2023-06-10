import { useState, useEffect} from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Box, HamburgerIcon, CloseIcon, HStack } from 'native-base';


const styles = StyleSheet.create({
  container:{
    marginBottom: 0,
    display: "flex",
    flexDirection:"row",
    flexWrap:"nowrap",
  },
  items:{

  }

})

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
    <View style={styles.container}>
      {user && user.accessLevel === 0 &&
        <Box  maxW="40">
          <Text onPress={() => navigation.navigate('CreateMedico')}>Cadastrar médico</Text>
          <Text onPress={() => navigation.navigate('CreateEnfermeira')}>Cadastrar enfermeira(o)</Text>
          <Text onPress={() => navigation.navigate('CreatePaciente')}>Cadastrar paciente</Text>
          <Text onPress={() => navigation.navigate('ShowUsers')}>Ver usuários do sistema</Text>
        </Box>
      }

      {user && (user.accessLevel === 1 || user.accessLevel === 2) &&
        <Box  maxW="40">
          <Text onPress={() => navigation.navigate('CreateConsulta')}>Cadastrar consulta</Text>
          <Text onPress={() => navigation.navigate('ShowConsultas')}>Ver consultas</Text>
        </Box>
      }

    {user && user.accessLevel === 3 &&
      <Box  maxW="40">
        <Text onPress={() => navigation.navigate('ShowProntuario')}>Consultar prontuário</Text>
      </Box>
    }

    {user && 
      <Box>
        <HStack>
          <HamburgerIcon size="5" onPress={() => navigation.navigate('Menu')}/>
          <Text>Menu</Text>
        </HStack>
        <HStack>
          <CloseIcon size="5" onPress={() => logout()}/>
          <Text>Sair</Text>
        </HStack>
      </Box>
    }
    </View>
  );
}
