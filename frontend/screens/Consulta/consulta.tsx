import {useState} from 'react';
import {Button, Text, View, TextInput, Switch} from 'react-native';
import strapi from '../../strapi/strapi';
import axioS from '../../axios/axios';

export default function CreateConsulta({navigation}: any): JSX.Element {
  const [paciente, setPaciente] = useState('');
  const [medico, setMedico] = useState('');
  const [enfermeira, setEnfermeira] = useState('');
  const [clinica, setClinica] = useState('');
  const [amnese, setAmnese] = useState('');
  const [data, setData] = useState('');
  const [comentario, setComentario] = useState('');
  
  /*
    id
    Identificação do paciente (vem de usuário com nível 3)
    identificação da clínica (vem de clínica)
    Anamnese (texto livre)
    identificação enfermeira (vem de usuário com nível 2)
    consulta (vem de usuário com nível 1)
    data (automático)
    comentário (texto livre)
  */


  const handleButton = async () => {
    if(amnese === '' || paciente === '' || medico === ''){
      console.log('Alguns dados não foram completados');
      return;
    }

    // register consulta
    const res : any = await axioS.post('api/', {
      paciente,
      clinica,
      medico,
      enfermeira,
      amnese,
      data,
      comentario
    }).then(async (response) => {

      /*
      consultar infos no banco ?

      const paciente =
      const clinica = 
      const medico = 
      const enfermeira = 
      */
     
      //const data = 

       // specific infos
       const consulta = await strapi.create('consultas', {idUser : response.data.id})
       if(consulta) {
         console.log('consulta criada com sucesso');
       }
    });

  }

  return (
    <View>
      <TextInput
          placeholder="Paciente"
          value={paciente}
          onChangeText={value => {
            setPaciente(value);
          }}
      />
      <TextInput
          placeholder="Clinica"
          value={clinica}
          onChangeText={value => {
            setClinica(value);
          }}
          inputMode="clinica"
      />
      <TextInput
        placeholder="Medico"
        value={medico}
        secureTextEntry
        onChangeText={value => {
          setMedico(value);
        }}
      />
      <TextInput
        placeholder="Enfermeira"
        value={enfermeira}
        onChangeText={value => {
          setEnfermeira(value);
        }}
        inputMode="numeric"
      />
      <TextInput
        placeholder="Amnese"
        value={amnese}
        onChangeText={value => {
          setAmnese(value);
        }}
      />
      <TextInput
        placeholder="Comentario"
        value={comentario}
        onChangeText={value => {
          setComentario(value);
        }}
      />
      <Button title="Cadastrar" onPress={() => handleButton()} />
    </View>
  );
}
