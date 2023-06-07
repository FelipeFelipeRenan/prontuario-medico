import { useState, useEffect } from 'react';
import { Button, Text, View, TextInput, Switch, SafeAreaView, ScrollView } from 'react-native';
import strapi from '../../utils/strapi/strapi';
import axioS from '../../utils/axios/axios';

export default function ShowUsers({ navigation }: any): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const findUsers = async () => {
      const userS = await strapi.find('users');
      setUsers(userS);
      // console.log(users)
    };
    findUsers();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {users && users.map((user : any) => (
            <View>
              <Text>{user.email}</Text>
              <Text>{user.username}</Text>
              <Text>{user.accessLevel}</Text>
              <Button title="Editar" onPress={() => navigation.navigate('EditUser', {id : user.id})} />
            </View>
          ))}
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
