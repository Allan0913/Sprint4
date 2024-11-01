import React, { useState } from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 
import { login } from '../api/auth'; 
import { ImageBackground } from 'react-native';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      console.log('Token:', token);
      setErrorMessage(null); 
      
      navigation.navigate('ConsultationsList'); 
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message); 
      } else {
        setErrorMessage('Erro ao tentar realizar login.'); 
      }
    }
  };

  return (
    <NativeBaseProvider>
      <ImageBackground 
        source={require('../../assets/login.jpeg')} 
        style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      >

      <Center flex={1}>
      <Box 
            width="80%" // Largura menor para o centro
            bg="white" 
            p={6} 
            borderRadius="lg" // Bordas arredondadas para o efeito de cartão
            shadow={2} // Sombra para dar destaque
          >
            <Text style={{paddingBottom: 20, textAlign: 'center', fontSize: 24}}>Login</Text>
          <Input
            placeholder="Usuário"
            mb={4}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            placeholder="Senha"
            mb={4}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button onPress={handleLogin}
          colorScheme="purple">
            Entrar
          </Button>
          {errorMessage && (
            <Text color="red.500" mt={4}>
              {errorMessage}
            </Text>
          )}
          <Button onPress={() => navigation.navigate('SignUp')} mt={4}
            colorScheme="purple">
            Cadastrar
          </Button>
        </Box>
      </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
};



export default LoginScreen;
