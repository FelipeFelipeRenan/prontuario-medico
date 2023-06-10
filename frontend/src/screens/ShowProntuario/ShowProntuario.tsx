import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';
import { Stack } from 'native-base';

const styles = StyleSheet.create({

  items:{
    marginTop: 5,
    marginBottom: 10,

  }
})

export default function ShowProntuario({ navigation }: any): JSX.Element {
  const [user, setUser] = useState<any>(null);
  const [consultas, setConsultas] = useState<any>([]);

  // load user
  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem("user");

      if(res){
        setUser(JSON.parse(res));
        loadConsulta();
      }
    }
    getUser();
  }, []);

  //load consultas
  async function loadConsulta () {

    try {
      let options;
      if(user){
        options = {
          filters: {
            idPaciente: {
              $eq : user.id
            }
          },
          sort: 'name.asc'
        }  
      } 
      const consulta = await strapi.find('consultas', options)
      //console.log(consulta.data[0])
      if(consulta){
        // setConsultas(consulta.data)
        let profissional;
        consulta.data.forEach(async (consult) => {
          if(consult.attributes.idMedico !== -1){
            profissional = await strapi.findOne('users', consult.attributes.idMedico);
          } else {
            profissional = await strapi.findOne('users', consult.attributes.idEnfermeira);
          }
          // console.log(profissional.username)
          if(profissional) {
            const professional = {
              idMedico : consult.attributes.idMedico,
              idEnfermeira : consult.attributes.idEnfermeira,
              anamnesis : consult.attributes.anamnesis,
              comment : consult.attributes.comment,
              createdAt : consult.attributes.createdAt,
              username : profissional.username
            }
            setConsultas((prevConsulta: any) => [...prevConsulta, professional])
          }
        })
        // Pegar paciente e exibir o nome dele
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <Stack space={4} w="100%" alignItems="center" marginTop={30}>
        <View>
          {consultas && consultas.map((consult : any) => (
            <View>
              <Text style={styles.items}>
                {consult.idMedico !== -1 &&
                  <Text>
                    Medico:
                    {consult.username}
                  </Text>
                }
                {consult.idEnfermeira !== -1 &&
                  <Text>
                    Enfermeiro(a):
                    {consult.username}
                  </Text>
                }
              </Text>
              <Text>
                {consult.anamnesis}
              </Text>
              <Text>
                {consult.comment}
              </Text>
              <Text>
                {consult.createdAt}
              </Text>
            </View>
          ))}
        </View>
        </Stack>
        <TabNavigator/>
      </ScrollView>
    </SafeAreaView>
  );
}
