import React from 'react';
import { NativeBaseProvider, Box, Button, Center, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type ConfirmAppointmentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ConfirmAppointment'
>;

type Props = {
  navigation: ConfirmAppointmentScreenNavigationProp;
};

const ConfirmAppointmentScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="gray">
        <Box>
          <Text>Avaliação cadastrada com sucesso!</Text>
          <Button colorScheme="emerald" mt={4} onPress={() => navigation.navigate('ConsultationsList')}>
            Voltar para tele inicial
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ConfirmAppointmentScreen;
