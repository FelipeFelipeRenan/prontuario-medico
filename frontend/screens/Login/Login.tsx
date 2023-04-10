import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import DropdownSelect from 'react-native-input-select';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default function Login({navigation}: any): JSX.Element {
  const [senha, setSenha] = useState('');
  const [user, setUsuario] = useState('');
  return (
    <View>
      <View style={styles.container}>
        <DropdownSelect
          label="Tipo de usuario"
          placeholder="Selecione o seu tipo de usuario"
          options={[
            {name: 'Médico', code: 'ME'},
            {name: 'Enfermeiro', code: 'EN'},
            {name: 'Paciente', code: 'PA'},
          ]}
          optionLabel={'name'}
          optionValue={'code'}
          selectedValue={user}
          onValueChange={(value: React.SetStateAction<string>) =>
            setUsuario(value)
          }
          primaryColor={'green'}
          // eslint-disable-next-line react-native/no-inline-styles
          labelStyle={{
            color: 'teal',
            fontSize: 15,
            fontWeight: '500',
            alignSelf: 'center',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          dropdownContainerStyle={{
            borderColor: 'red',
            alignContent: 'center',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          modalBackgroundStyle={{backgroundColor: 'rgba(196, 198, 246, 0.5)'}}
          // eslint-disable-next-line react-native/no-inline-styles
          checkboxStyle={{backgroundColor: 'red', borderRadius: 5}}
        />
        <TextInput
          placeholder="Usuário"
          onChangeText={value => {
            setUsuario(value);
          }}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          secureTextEntry
          onChangeText={value => {
            setSenha(value);
          }}
        />
        <Button
          title="Entrar"
          onPress={() => {
            if (user === 'ME') {
              navigation.navigate('Medico');
            } else if (user === 'EN') {
              navigation.navigate('Enfermeiro');
            } else if (user === 'PA') {
              navigation.navigate('Paciente');
            }
          }}
        />
        {user === '' && senha === '' && <Text>ERRO</Text>}
      </View>
    </View>
  );
}
