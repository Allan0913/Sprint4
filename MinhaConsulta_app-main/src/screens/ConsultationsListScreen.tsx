import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { NativeBaseProvider, Box, Center, VStack, ScrollView ,  Image, Divider, Button } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de importar isso
import { ImageBackground } from 'react-native';

type ScheduleConsultationScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScheduleConsultation'
>;


type Props = {
  navigation: ScheduleConsultationScreenProp;
};

const ConsultationsListScreen = ({ navigation }: Props) => {


  return (
        <NativeBaseProvider>
          <ScrollView flex={1} bg="white">
            {/* Seção superior para a imagem */}
            <Box height={300}>
              <ImageBackground 
                source={require('../../assets/sanofifundo.jpg')} // Insira o caminho da sua imagem
                style={{ flex: 1, width: '100%', height: '100%' }}
              />
            </Box>
    
            {/* Seção inferior para o texto */}
            <Box p={5} bg="white">
              <VStack space={4}>
                {/* Título em negrito */}
                <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold" }}>
                  Objetivo e Problema
                </Text>
    
                {/* Texto justificado */}
                <Text style={{ fontSize: 12, textAlign: "justify" }}>
                  A Sanofi está enfrentando desafios com seu processo de Avaliação de Desempenho devido à escassez de computadores.
                  Como resultado, os operadores estão sendo obrigados a realizar essas avaliações manualmente em papel. Isso tem
                  levado a um aumento significativo no tempo necessário para processar essas informações, resultando em inspeções
                  menos eficientes.
                </Text>
    
                <Text style={{ fontSize: 12, textAlign: "justify" }}>
                  Contudo, ao observar esses problemas, o grupo Banoffe decidiu criar soluções para resolvê-los. Durante o período
                  desse desafio, estaremos produzindo um aplicativo para otimizar, aprimorar e até resolver os obstáculos vivenciados
                  pela Sanofi.
                </Text>
    
                <Text style={{ fontSize: 12, textAlign: "justify" }}>
                  Além disso, optamos por inovar e aprimorar permanentemente a empresa, planejando criar uma inteligência artificial
                  completamente nova para lidar sozinha com os desafios presentes.
                </Text>
              </VStack>
            </Box>
    
            {/* Divider para separar seções */}
            <Divider my={5} />
    
            {/* Seção para a Solução */}
            <Box p={5} bg="white">
              <VStack space={4}>
                {/* Título em negrito */}
                <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold" }}>
                  Solução
                </Text>
    
                {/* Card com imagem e texto */}
                <Box 
                  borderWidth={1} 
                  borderColor="gray" 
                  borderRadius="md" 
                  overflow="hidden" 
                  mt={5}
                >
                  <Image 
                    source={require('../../assets/aplicativo (1).jpg')} // Substitua pela URL da sua imagem
                    alt="Imagem do Card"
                    width="100%"
                    height={150}
                    resizeMode="cover"
                  />
                  <Box p={4}>
                    <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold", paddingBottom: 20 }}>Aplicativo</Text>
                    <Text style={{ fontSize: 12, textAlign: "justify" }}>
                    Nosso aplicativo vai possuir uma solução possibilita a análise direta dos
                     dispositivos móveis dos funcionários, facilitando e agilizando os processos,
                      especialmente diante da escassez de computadores enfrentada pela empresa. O
                       aplicativo estará prontamente acessível e será simples de baixar para o seu
                        celular, diretamente da loja online incorporada a ele.
                    </Text>
                  </Box>
                </Box>

                <Box 
                  borderWidth={1} 
                  borderColor="gray" 
                  borderRadius="md" 
                  overflow="hidden" 
                  mt={5}
                >
                  <Image 
                    source={require('../../assets/inteligencia.png')} // Substitua pela URL da sua imagem
                    alt="Imagem do Card"
                    width="100%"
                    height={150}
                    resizeMode="cover"
                  />
                  <Box p={4}>
                    <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold", paddingBottom: 20 }}>Inteligencia Artificial</Text>
                    <Text style={{ fontSize: 12, textAlign: "justify" }}>
                    Nossa solução também vai ter a inteligência artificial, considerando a
                     tendência atual de otimização tecnológica nas empresas. Essa IA realizara
                      tarefas que geralmente consomem muito tempo para os funcionários, permitindo
                       assim uma execução rápida e eficiente assim reduzindo o tempo de trabalho.
                    </Text>
                  </Box>
                </Box>

                <Box 
                  borderWidth={1} 
                  borderColor="gray" 
                  borderRadius="md" 
                  overflow="hidden" 
                  mt={5}
                >
                  <Image 
                    source={require('../../assets/avaliacao.jpg')} // Substitua pela URL da sua imagem
                    alt="Imagem do Card"
                    width="100%"
                    height={150}
                    resizeMode="cover"
                  />
                  <Box p={4}>
                    <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: "bold", paddingBottom: 20 }}>Material & Linguagens</Text>
                    <Text style={{ fontSize: 12, textAlign: "justify" }}>
                    As linguagens de programação utilizadas serão JavaScript e Python,
                     em Python utilizaremos Pandas e a biblioteca Flask. Enquanto a
                      marcação será feita em HTML. Pesquisamos sobre as bibliotecas 
                      de Python e decidimos usar Flask por ter um framework web simples
                       e flexível que futuramente pode ser expandido conforme as nossas necessidades
                    </Text>
                  </Box>
                </Box>
              </VStack>
            </Box>

            <Divider my={10} />
            

            <Box position="absolute" bottom="10" width="100%" px="5">
            <Button onPress={() => navigation.navigate('ScheduleConsultation')}
              colorScheme='blue'>
              Avaliar nosso aplicativo!
            </Button>
          </Box>

          </ScrollView>
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
