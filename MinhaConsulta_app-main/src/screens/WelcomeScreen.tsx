import React from 'react';
import { NativeBaseProvider, Box, Button, Center } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de importar isso
import { ImageBackground, StyleSheet } from 'react-native';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <ImageBackground 
        source={require('../../assets/fundo.jpg')} // Substitua pelo caminho da sua imagem
        style={styles.background}
      >

          <Box position="absolute" bottom="10" width="100%" px="5">
            <Button onPress={() => navigation.navigate('Login')}
              colorScheme='purple'>
              Bem vindo!
            </Button>
          </Box>

      </ImageBackground>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute', // Garante que a imagem ocupe toda a tela
    top: 0,
    left: 0,
  },
});

export default WelcomeScreen;
