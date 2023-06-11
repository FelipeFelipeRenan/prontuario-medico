import {useState, useEffect} from 'react';
import {Button, Text, View, TextInput, Switch} from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';
import TabNavigator from '../../components/TabNavigator';
import {Input, Stack} from 'native-base';

export default function EditConsulta({route, navigation}: any): JSX.Element {
  const {id} = route.params;

  // const [user, setUser] = useState<any>(null);
  // const [accessLevel, setAccessLevel] = useState<any>(null);
  const [paciente, setPaciente] = useState<any>(null);
  const [anamnesis, setAnamnesis] = useState<any>(null);
  const [comment, setComment] = useState<any>(null);

  // load consulta data
  useEffect(() => {
    const loadConsultaUser = async () => {
      try {
        const res = await strapi.findOne('consultas', `${id}`);
        if (res) {
          // setIdPaciente(res.data.attributes.idPaciente);
          setAnamnesis(res.data.attributes.anamnesis);
          setComment(res.data.attributes.comment);

          const res2 = await axioS
            .get(`/api/users/${res.data.attributes.idPaciente}`)
            .then(response => {
              setPaciente(response.data);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadConsultaUser();
  }, []);

  const handleButton = async () => {
    try {
      const res = await strapi.update('consultas', `${id}`, {
        anamnesis,
        comment,
      });

      if (res) {
        console.log('Consulta editada com sucesso');
        navigation.navigate('Mostrar Consultas')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Stack space={4} w="100%" alignItems="center" marginTop={30}>
        {paciente && <Text>{paciente.username}</Text>}

        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          fontSize={15}
          placeholder="Anamnesis"
          value={anamnesis || ' '}
          onChangeText={value => {
            setAnamnesis(value);
          }}
          inputMode="text"
        />

        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          fontSize={15}
          placeholder="Comentário"
          value={comment || ' '}
          onChangeText={value => {
            setComment(value);
          }}
          inputMode="text"
        />

        <Button title="Editar" onPress={() => handleButton()} />
      </Stack>
    </View>
  );
}
