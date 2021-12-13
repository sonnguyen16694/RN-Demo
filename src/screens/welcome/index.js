import React, {useState} from 'react';
import {Image, View, Button, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import Typography from '../../components/Typography';
import Login from '../login';

const Welcome: () => Node = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const loginSuccess = value => {
    if (value) {
      setOpenLoginModal(false);
    }
  };
  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          width={150}
          height={150}
          resizeMode="contain"
          source={require('../../assets/aiawhite-logo.png')}
          style={{flex: 2}}
        />
        <View style={{flex: 1}}>
          <Button
            style={{width: '100%'}}
            title="Login"
            onPress={() => setOpenLoginModal(true)}
          />
        </View>
        <Modal isVisible={openLoginModal}>
          <Login loginSuccess={loginSuccess}></Login>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default Welcome;
