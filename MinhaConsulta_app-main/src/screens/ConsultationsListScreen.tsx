import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { NativeBaseProvider, Box, Center, VStack, ScrollView ,  Image } from 'native-base';
import { ImageBackground } from 'react-native';

interface Consultation {
  id: number;
  date: string;
  doctor: string;
  specialty: string;
  status: string;
  username: string;
}

const ConsultationsListScreen = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  useEffect(() => {
    // Fetch consultations from the backend
    axios.get('http://localhost:3000/api/consultations')
      .then((response) => {
        setConsultations(response.data.consultations);
      })
      .catch((error) => {
        console.error('Erro ao buscar consultas:', error);
      });
  }, []);
  

  const renderItem = ({ item }: { item: Consultation }) => (
    <View style={styles.consultationItem}>
      <Text>Paciente: {item.username}</Text>
      <Text>Data: {item.date}</Text>
      <Text>Médico: {item.doctor}</Text>
      <Text>Especialidade: {item.specialty}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <NativeBaseProvider>
 
        {/* Seção superior para a imagem */}
        <Box flex={1}>
          <ImageBackground 
            source={require('../../assets/sanofifundo.jpg')} // Insira o caminho da sua imagem
            style={{ flex: 1, width: '100%', height: '100%' }}
          />
        </Box>

        {/* Seção inferior para o texto */}
        <Box flex={1} p={5} bg="white">
        <VStack space={4}>
          {/* Título em negrito */}
          <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold" }} >
            Objetivo e Problema
            </Text>

          {/* Texto justificado */}
          <Text style={{fontSize: 12, textAlign: "justify"}}>
            A Sanofi está enfrentando desafios com seu processo de Avaliação de Desempenho devido à escassez de computadores.
            Como resultado, os operadores estão sendo obrigados a realizar essas avaliações manualmente em papel. Isso tem
            levado a um aumento significativo no tempo necessário para processar essas informações, resultando em inspeções
            menos eficientes.
          </Text>

          <Text style={{fontSize: 12, textAlign: "justify"}}>
            Contudo, ao observar esses problemas, o grupo Banoffe decidiu criar soluções para resolvê-los. Durante o período
            desse desafio, estaremos produzindo um aplicativo para otimizar, aprimorar e até resolver os obstáculos vivenciados
            pela Sanofi.
          </Text>

          <Text style={{fontSize: 12, textAlign: "justify"}}>
            Além disso, optamos por inovar e aprimorar permanentemente a empresa, planejando criar uma inteligência artificial
            completamente nova para lidar sozinha com os desafios presentes.
          </Text>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  consultationItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});

export default ConsultationsListScreen;
