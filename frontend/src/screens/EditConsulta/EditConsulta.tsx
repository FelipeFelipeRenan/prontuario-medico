import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch } from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';

export default function EditConsulta({route, navigation }: any): JSX.Element {
  const {id} = route.params;

  // const [user, setUser] = useState<any>(null);
  // const [accessLevel, setAccessLevel] = useState<any>(null);
  const [paciente, setPaciente] = useState<any>(null)
  const [anamnesis, setAnamnesis] = useState<any>(null)
  const [comment, setComment] = useState<any>(null)


  // load consulta data
  useEffect(() => {
    const loadConsultaUser = async () => {
       try {
        const res = await strapi.findOne('consultas', `${id}`)
        if(res){
          // setIdPaciente(res.data.attributes.idPaciente);
          setAnamnesis(res.data.attributes.anamnesis);
          setComment(res.data.attributes.comment);

          const res2 = await axioS.get(`/api/users/${res.data.attributes.idPaciente}`)
          .then((response) => {
            setPaciente(response.data)
          })

        }
       } catch (error) {
        console.log(error)
       }
    }
    loadConsultaUser();
  }, []);

  const handleButton = async () => {
    try {
      const res = await strapi.update('consultas', `${id}`, {anamnesis, comment});
      
      if(res){
        console.log('Consulta editada com sucesso');
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View>
      <View>
        {paciente && 
          <Text>
            {paciente.username}
          </Text>
        }

        <TextInput
          placeholder="Anamnesis"
          value={anamnesis || ' '}
          onChangeText={value => {
            setAnamnesis(value);
          }}
          inputMode="text"
        />

        <TextInput
          placeholder="Comentário"
          value={comment || ' '}
          onChangeText={value => {
            setComment(value);
          }}
          inputMode="text"
        />

        <Button title="Editar" onPress={() => handleButton()} />
      </View>
      <TabNavigator/>
    </View>
  );
}
