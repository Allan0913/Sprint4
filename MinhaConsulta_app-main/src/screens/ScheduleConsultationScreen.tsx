import React, { useState } from 'react'; // Importando useState
import { NativeBaseProvider, Box, Button, Input, Center, Select, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta
import { ImageBackground } from 'react-native';

type ScheduleConsultationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScheduleConsultation'
>;

type Props = {
  navigation: ScheduleConsultationScreenNavigationProp;
};

const ScheduleConsultationScreen = ({ navigation }: Props) => {
  const [name, setName] = useState(''); // Estado para o nome
  const [email, setEmail] = useState(''); // Estado para o email
  const [note, setNote] = useState(''); // Estado para a nota
  const [feedback, setFeedback] = useState(''); // Estado para o feedback
  const [error, setError] = useState(''); // Estado para mensagens de erro

  const handleSubmit = () => {
    // Resetar erro
    setError('');

    // Verificando campos vazios
    if (!name || !email || !note || !feedback) {
      setError('Por favor, preencha todos os campos.'); // Mensagem de erro
      return; // Não prosseguir se houver erro
    }

    // Navegar para a tela de confirmação
    navigation.navigate('ConfirmAppointment');
  };

  return (
    <NativeBaseProvider>
      <ImageBackground 
        source={require('../../assets/planodefundoazul.jpg')} 
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
            <Text style={{ paddingBottom: 20, textAlign: 'center', fontSize: 24 }}>Avaliação</Text>

            {error ? <Text color="red.500" textAlign="center" mb={4}>{error}</Text> : null} {/* Exibe a mensagem de erro */}

            <Text style={{ paddingBottom: 10, textAlign: 'left', fontSize: 12 }}>Nome Completo:</Text>
            <Input 
              placeholder="Coloque o Nome Completo" 
              mb={4} 
              value={name}
              onChangeText={setName} // Atualiza o estado
            />

            <Text style={{ paddingBottom: 10, textAlign: 'left', fontSize: 12 }}>E-mail:</Text>
            <Input 
              placeholder="Coloque o E-mail" 
              mb={4} 
              value={email}
              onChangeText={setEmail} // Atualiza o estado
            />

            <Text style={{ paddingBottom: 10, textAlign: 'left', fontSize: 12 }}>Nota:</Text>
            <Select 
              placeholder="Escolha uma nota" 
              mb={4} 
              selectedValue={note}
              onValueChange={(value) => setNote(value)} // Atualiza o estado
            >
              <Select.Item label="0" value="nota0" />
              <Select.Item label="1" value="nota1" />
              <Select.Item label="2" value="nota2" />
              <Select.Item label="3" value="nota3" />
              <Select.Item label="4" value="nota4" />
              <Select.Item label="5" value="nota5" />
              <Select.Item label="6" value="nota6" />
              <Select.Item label="7" value="nota7" />
              <Select.Item label="8" value="nota8" />
              <Select.Item label="9" value="nota9" />
              <Select.Item label="10" value="nota10" />
            </Select>

            <Text style={{ paddingBottom: 10, textAlign: 'left', fontSize: 12 }}>Feedback:</Text>
            <Input 
              placeholder="Feedback" 
              mb={4} 
              value={feedback}
              onChangeText={setFeedback} // Atualiza o estado
            />

            <Button onPress={handleSubmit}>
              Avaliar
            </Button>
          </Box>
        </Center>
      </ImageBackground>
    </NativeBaseProvider>
  );
};

export default ScheduleConsultationScreen;
