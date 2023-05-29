import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';

export default function ShowConsultas({ navigation }: any): JSX.Element {
  const [user, setUser] = useState<any>(null);
  const [consultas, setConsultas] = useState<any>([]);

  // load user
  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem("user");
      

      if(res){
        setUser(JSON.parse(res))
        loadConsulta()
      }
    }
    getUser();
  }, []);

  //load consultas
    async function loadConsulta () {
      //console.log(user)

      try {
        let options;
        if(user && user.accessLevel === 1){
          options = {
            filters: {
              idMedico: {
                $eq : user.id
              }
            }
          }  
        } else if(user && user.accessLevel === 2){
          options = {
            filters: {
              idEnfermeira: {
                $eq : user.id
              }
            }
          }  
        }
        
        const consulta = await strapi.find('consultas', options)
        //console.log(consulta.data[0])
        if(consulta){
          setConsultas(consulta.data)
        }
      } catch (error) {
        console.log(error)
      }
    };

  const handleButton = async () => {
    
  }

  return (
    <View>
      {consultas && consultas.map((consult : any) => (
        <View>
          <Text>
            {consult.attributes.idPaciente}
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
          <Button title='Editar consulta' onPress={() => handleButton()}/>
        </View>
      ))}      
    </View>
  );
}
