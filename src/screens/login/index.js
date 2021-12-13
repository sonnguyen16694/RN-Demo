import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, View, Button, Alert, TextInput} from 'react-native';
import Typography from '../../components/Typography';
import {setItemAsync} from '../../helpers/storage';

const Login: () => Node = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (username === 'testuser' && password === 'password@1') {
      setItemAsync('user', 'true');
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid user or password!');
    }
  };
  return (
    <View
      style={{
        height: 400,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Typography style={{flex: 1}}>Username</Typography>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            color: '#000000',
            flex: 3,
          }}
          onChangeText={setUsername}
          value={username}
          placeholder="useless placeholder"
          keyboardType="default"
          textContentType="username"
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Typography style={{flex: 1}}>Password</Typography>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            color: '#000000',
            flex: 3,
          }}
          value={password}
          onChangeText={setPassword}
          placeholder="useless placeholder"
          textContentType="password"
          keyboardType="default"
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          style={{width: '100%', height: 40}}
          title="Login"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default Login;
