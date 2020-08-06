import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyPage() {
    navigation.navigate('Study');
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Image source={landingImg} style={styles.banner}/>
        <Text style={styles.title}>
          Seja bem-vindo, {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}>
            <Image source={studyIcon}/>
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>

          <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
            <Image source={giveClasses}/>
            <Text style={styles.buttonText}>Dar Aulas</Text>
          </RectButton>
        </View>

        <Text style={styles.totalConnections}>
          Total de 200 conexões já realizadas {' '}
          <Image source={heartIcon} />
        </Text>

      </View>
    )
  }
}

export default Landing;