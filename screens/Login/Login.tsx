import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import DropdownSelect from 'react-native-input-select';

export default function Login({navigation}: any): JSX.Element {
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  return (
    <View>
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
        onValueChange={(value: React.SetStateAction<string>) => setUser(value)}
        primaryColor={'green'}
        // eslint-disable-next-line react-native/no-inline-styles
        labelStyle={{
          color: 'teal',
          fontSize: 15,
          fontWeight: '500',
          alignSelf: 'center',
          marginTop: '20%',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        dropdownContainerStyle={{
          borderColor: 'red',
          alignContent: 'center',
        }}
        modalBackgroundStyle={{backgroundColor: 'rgba(196, 198, 246, 0.5)'}}
        checkboxStyle={{backgroundColor: 'red', borderRadius: 5}}
      />
      <Text>{user}</Text>
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
    </View>
  );
}
