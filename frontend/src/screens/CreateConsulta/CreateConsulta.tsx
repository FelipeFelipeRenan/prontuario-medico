import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';

export default function CreateConsulta({ navigation }: any): JSX.Element {
  const [user, setUser] = useState<any>(null)

  const [anamnesis, setAnamnesis] = useState('');
  const [comment, setComment] = useState('');

  const [enfermeiros, setEnfermeiros] = useState<any>([]);
  const [usersEnfermeiros, setUsersEnfermeiros] = useState<any>([]);

  const [medicos, setMedicos] = useState<any>([]);
  const [usersMedicos, setUsersMedicos] = useState<any>([]);

  const [pacientes, setPacientes] = useState<any>([]);
  const [usersPacientes, setUsersPacientes] = useState<any>([]);

  const handleButton = async () => {

  };

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

  //load enfermeiras
  useEffect(() => {
    const getEnfermeiras = async () => {

      try {
        const enfermeiras = await strapi.find('enfermeiros');
        if(enfermeiras){
          setEnfermeiros(enfermeiras.data)
          // console.log(enfermeiros)
          enfermeiros.map(async enfer => {
            // console.log(enfer.attributes.idUser)
            const res: any = await axioS.put(`/api/users/${enfer.attributes.idUser}`)
            .then((response) => {
              // console.log(response.data)
              const enf = {
                id: response.data.id,
                idEnfer: enfer.id,
                username : response.data.username,
                phoneNumber: response.data.phoneNumber,
              }
              // console.log(enf)
              setUsersEnfermeiros((prevUsersEnfermeiros) => [...prevUsersEnfermeiros, enf]) 
            });
          });
        } else {
          console.log('erro');
        }

      } catch (error) {
        console.log(error);
      }

    };
    getEnfermeiras();
  }, []);

  //load medicos
  useEffect(() => {
    const getMedicos = async () => {

      try {
        const medicoS = await strapi.find('medicos');
        if(medicoS){
          setMedicos(medicoS.data);
          // let medicUsers = [];
          medicos.forEach(async medic => {
            const res: any = await axioS.put(`/api/users/${medic.attributes.idUser}`)
            .then((response) => {
              // console.log(response.data)  
              const med = {
                id: response.data.id,
                idMedic: medic.id,
                username : response.data.username,
                phoneNumber: response.data.phoneNumber,
              }
              // console.log(med)
              setUsersMedicos((prevUsersMedicos) => [...prevUsersMedicos, med])
            });

          });
        } else {
          console.log('erro');
        }

      } catch (error) {
        console.log(error);
      }

    };
    getMedicos();
  }, []);

  //load pacientes
  useEffect(() => {
    const getPacientes = async () => {

      try {
        const pacienteS = await strapi.find('pacientes');
        if(pacienteS){
          setPacientes(pacienteS.data);
          // let pacientUsers = [];
          pacientes.forEach(async pacient => {
            const res: any = await axioS.put(`/api/users/${pacient.attributes.idUser}`)
            .then((response) => {
              const pac = {
                id: response.data.id,
                idEnfer: pacient.id,
                username : response.data.username,
                phoneNumber: response.data.phoneNumber,
              }

              setUsersPacientes((prevUsersPacientes) => [...prevUsersPacientes, pac])
            });
          });
        } else {
          console.log('erro');
        }

      } catch (error) {
        console.log(error);
      }

    };
    getPacientes();
  }, []);

  console.log(usersMedicos)
  console.log(usersEnfermeiros)
  console.log(usersPacientes)
  return (
    <View>
      {user && user.accessLevel === 1 &&
        <View>
          {/* Exibir enfermeiras para seleção */}
          {usersEnfermeiros && usersEnfermeiros.map((enfer) => (
            <View>
              <Text>{enfer.username}</Text>
            </View>
          ))}
        </View>
      }

      {user && user.accessLevel === 2 &&
        <View>
          {/* Exibir medicos para seleção */}
          {usersMedicos && usersMedicos.map((medic) => (
            <View>
              <Text>{medic.username}</Text>
            </View>
          ))}
        </View>
      }

      {/* Exibir pacientes */}
      {usersPacientes && usersPacientes.map((pacient) => (
        <View>
          <Text>{pacient.username}</Text>
        </View>
      ))}

      <TextInput
        placeholder="Amamnesis"
        value={anamnesis}
        onChangeText={value => {
          setAnamnesis(value);
        }}
      />

      <TextInput
        placeholder="Comentário"
        value={comment}
        onChangeText={value => {
          setComment(value);
        }}
      />
      <Button title="Cadastrar" onPress={() => handleButton()} />
    </View>
  );
}
