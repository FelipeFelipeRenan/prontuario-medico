import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';

export default function EditUser({route, navigation }: any): JSX.Element {
  const {id} = route.params;

  // const [user, setUser] = useState<any>(null);
  // const [accessLevel, setAccessLevel] = useState<any>(null);
  const [username, setUsername] = useState<any>(null)
  const [email, setEmail] = useState<any>(null)
  const [phoneNumber, setPhoneNumber] = useState<any>(null)


  // load user data
  useEffect(() => {
    const loadDataUser = async () => {
       try {
        const res: any = await axioS.get(`/api/users/${id}`)
        .then(async (response) => {
          setUsername(response.data.username)
          setEmail(response.data.email)
          setPhoneNumber(response.data.phoneNumber)

          // Informações extras de para cada tipo de usuário
          if(response.data.accessLevel === 1){
            const medico = await strapi.find('medicos', {
              filters: {
                idUser: {
                  $eq: response.data.id
                }
              }
            });
            // se necessário setar informações específicas
            // console.log(medico.data[0].attributes);
            // const crm = medico.data[0].attributes.CRM
          } else if(response.data.accessLevel === 2) {
            const enfermeira = await strapi.find('enfermeiros', {
              filters: {
                idUser: {
                  $eq: response.data.id
                }
              }
            });
            console.log(enfermeira);
          } else if(response.data.accessLevel === 3){
            const paciente = await strapi.find('pacientes', {
              filters: {
                idUser: {
                  $eq: response.data.id
                }
              }
            });
            console.log(paciente);
          }
        })
       } catch (error) {
        console.log(error)
        
       }
    }
    loadDataUser();
  }, []);

  const handleButton = async () => {
    console.log(username)

    try {
      // const user = await strapi.update('users', id ,{username})

      const res: any = await axioS.put(`/api/users/${id}`, {username, email, phoneNumber})
      .then((response) => {
        console.log(response.data)
      })

      // console.log(user.data.username)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View>
      <View>
        <TextInput
          placeholder="Nome de usuário"
          value={username || ' '}
          onChangeText={value => {
            setUsername(value);
          }}
          inputMode="text"
        />

        <TextInput
          placeholder="Email"
          value={email || ' '}
          onChangeText={value => {
            setEmail(value);
          }}
          inputMode="email"
        />

        <TextInput
          placeholder="Numero de telefone"
          value={phoneNumber || ' '}
          onChangeText={value => {
            setPhoneNumber(value);
          }}
          inputMode="numeric"
        />

        <Button title="Editar" onPress={() => handleButton()} />
      </View>
      <TabNavigator/>

    </View>
  );
}
