import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from 'react';
import {Button, Text, View} from 'react-native';
import {Select, Box, CheckIcon, Center, Input, Stack} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';

export default function CreateConsulta({navigation}: any): JSX.Element {
  const [user, setUser] = useState<any>(null);

  const [anamnesis, setAnamnesis] = useState('');
  const [comment, setComment] = useState('');

  const [paciente, setPaciente] = useState<any>();
  const [usersPacientes, setUsersPacientes] = useState<any>([]);

  const handleButton = async () => {
    try {
      let enfermeira = -1;
      let medico = -1;
      if (user.accessLevel === 1) {
        medico = user.id;
      } else if (user.accessLevel === 2) {
        enfermeira = user.id;
      }

      const consulta = await strapi.create('consultas', {
        anamnesis,
        comment,
        idPaciente: paciente.id,
        idEnfermeira: enfermeira,
        idMedico: medico,
      });
      if (consulta) {
        console.log('consulta com sucesso');
        navigation.navigate('Menu');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // load user
  useEffect(() => {
    const getUser = async () => {
      const res = await AsyncStorage.getItem('user');

      if (res) {
        setUser(JSON.parse(res));
      }
    };
    getUser();
  }, []);

  //load pacientes
  useEffect(() => {
    const getPacientes = async () => {
      try {
        const pacienteS = await strapi.find('pacientes');
        if (pacienteS) {
          // let pacientUsers = [];
          pacienteS.data.forEach(
            async (pacient: {attributes: {idUser: any}; id: any}) => {
              const res: any = await axioS
                .get(`/api/users/${pacient.attributes.idUser}`)
                .then(response => {
                  const pac = {
                    id: response.data.id,
                    idEnfer: pacient.id,
                    username: response.data.username,
                    phoneNumber: response.data.phoneNumber,
                  };
                  setUsersPacientes((prevUsersPacientes: any) => [
                    ...prevUsersPacientes,
                    pac,
                  ]);
                });
            },
          );
        } else {
          console.log('erro');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPacientes();
  }, []);

  return (
    <View>
      <Center>
        <Box maxW="300" marginTop={20}>
          <Select
            fontSize={15}
            selectedValue={paciente}
            minWidth="200"
            accessibilityLabel="Escolha o paciente"
            placeholder="Escolha o paciente"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setPaciente(itemValue)}>
            {usersPacientes &&
              usersPacientes.map((pacient: any) => (
                <Select.Item label={pacient.username} value={pacient} />
              ))}
          </Select>
        </Box>
      </Center>

      <Stack space={4} w="100%" alignItems="center" marginTop={30}>
        {/* Exibir pacientes */}
        {/* {usersPacientes &&
          usersPacientes.map(
            (pacient: {
              username:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | ReactPortal
                | null
                | undefined;
            }) => (
              <View>
                <Text onPress={() => setPaciente(pacient)}>
                  {pacient.username}
                </Text>
              </View>
            ),
          )} */}
        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          fontSize={15}
          placeholder="Amamnesis"
          value={anamnesis}
          onChangeText={value => {
            setAnamnesis(value);
          }}
        />

        <Input
          w={{
            base: '75%',
            md: '25%',
          }}
          fontSize={15}
          placeholder="Comentário"
          value={comment}
          onChangeText={value => {
            setComment(value);
          }}
        />
        <Button title="Cadastrar" onPress={() => handleButton()} />
      </Stack>
    </View>
  );
}
