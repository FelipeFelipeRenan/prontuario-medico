import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';

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
        setConsultas(consulta.data)
        // Pegar paciente e exibir o nome dele
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <View>
      {consultas && consultas.map((consult : any) => (
        <View>
          <Text>
            {consult.attributes.idMedico !== -1 && 
              <Text>
                Medico
                {consult.attributes.idMedico}
              </Text>
            }
            {consult.attributes.idEnfermeira !== -1 && 
              <Text>
                Enfermeiro(a)
                {consult.attributes.idEnfermeira}
              </Text>
            }
          </Text>
          <Text>
            {consult.attributes.anamnesis}
          </Text>
          <Text>
            {consult.attributes.comment}
          </Text>
          <Text>
            {consult.attributes.createdAt}
          </Text>
        </View>
      ))}      
    </View>
  );
}
