import {useState, useEffect} from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import strapi from '../../utils/strapi/strapi';
import TabNavigator from '../../components/TabNavigator';
import {Box, Stack} from 'native-base';

const styles = StyleSheet.create({
  items: {
    backgroundColor: 'white',
    padding: 20,

    marginBottom: 10,
  },
});

export default function ShowUsers({navigation}: any): JSX.Element {
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
        <Stack space={6} w="100%" alignItems="center" marginTop={30}>
          <View>
            {users &&
              users.map((user: any) => (
                <View style={styles.items} key={user.id}>
                  <Text>Email: {user.email}</Text>
                  <Text>Nome: {user.username}</Text>
                  <Text>Nivel de acesso: {user.accessLevel}</Text>
                  <Box marginTop={6}>
                    <Button
                      title="Editar"
                      onPress={() =>
                        navigation.navigate('Editar Usuário', {id: user.id})
                      }
                    />
                  </Box>
                </View>
              ))}
          </View>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
}
