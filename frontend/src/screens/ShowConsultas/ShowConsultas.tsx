import {useState, useEffect} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  Switch,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';
import {Box, Stack} from 'native-base';

const styles = StyleSheet.create({
  items: {
    backgroundColor: "white",
    padding:10 ,
    marginTop: 10,
  },
  button:{
    marginTop: 20,
  }
});

export default function ShowConsultas({navigation}: any): JSX.Element {
  const [user, setUser] = useState<any>(null);
  const [consultas, setConsultas] = useState<any>([]);

  // load user
  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem('user');
      const userData = JSON.parse(res);
      if (userData) {
        setUser(userData);
        loadConsulta(userData);
      }
    };
    getUser();
  }, []);

  //load consultas
  async function loadConsulta(userData) {
    // console.log(userData)

    try {
      let options;
      if (userData && userData.accessLevel === 1) {
        options = {
          filters: {
            idMedico: {
              $eq: userData.id,
            },
          },
        };
      } else if (userData && userData.accessLevel === 2) {
        options = {
          filters: {
            idEnfermeira: {
              $eq: userData.id,
            },
          },
        };
      }

      const consulta = await strapi.find('consultas', options);
      // let consulta;
      // if(user && user.accessLevel === 1){
      //   consulta = await axioS.get(`api/consultas?filters[idMedico][$eq]=${user.id}`)
      // } else if(user && user.accessLevel === 2){
      //   consulta = await axioS.get(`api/consultas?filters[idEnfermeira][$eq]=${user.id}`)
      // }
      // if(consulta){
      //   console.log(consulta.data.data[0].attributes.anamnesis)
      // }

      if (consulta) {
        // console.log(consulta.data.data[0])
        // setConsultas(consulta.data)
        consulta.data.forEach(
          async (consult: {
            attributes: {
              idPaciente: string | number;
              idMedico: any;
              idEnfermeira: any;
              anamnesis: any;
              comment: any;
              createdAt: any;
            };
            id: any;
          }) => {
            const paciente = await strapi.findOne(
              'users',
              consult.attributes.idPaciente,
            );
            // console.log(consult)
            let consulte = {
              id: consult.id,
              idPaciente: paciente.id,
              idMedico: consult.attributes.idMedico,
              idEnfermeira: consult.attributes.idEnfermeira,
              username: paciente.username,
              anamnesis: consult.attributes.anamnesis,
              comment: consult.attributes.comment,
              createdAt: consult.attributes.createdAt,
            };

            // console.log(consulte);
            // if (user && user.accessLevel === 2 && consulte.idMedico === -1) {
            //   return;
            // }
            // if (
            //   user &&
            //   user.accessLevel === 1 &&
            //   consulte.idEnfermeira === -1
            // ) {
            //   return;
            // }

            setConsultas((prevConsultas: any) => [...prevConsultas, consulte]);
          },
        );
        // Pegar paciente e exibir o nome dele
      }
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(consultas)

  return (
    <SafeAreaView>
      <ScrollView>
        <Stack space={6} w="100%" alignItems="center" marginTop={30}>
          <View>
            {consultas &&
              consultas.map((consult: any) => (
                <View key={consult.id} style={styles.items}>
                  <Text>Nome: {consult.username}</Text>
                  <Text>Anamnese: {consult.anamnesis}</Text>
                  <Text>Comentário: {consult.comment}</Text>
                  <Text>Data de criação: {consult.createdAt}</Text>
                  <Box marginTop={5}>
                  <Button
                    
                    title="Editar consulta"
                    onPress={() =>
                      navigation.navigate('Editar Consulta', {id: consult.id})
                    }
                  />
                  </Box>
                </View>
              ))}
          </View>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
}
