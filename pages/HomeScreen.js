import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import logo from '../assets/logo.png';
import bckImg from '../assets/firstBck.jpg';
import carWashImg from '../assets/carWash.png';
import vanWashImg from '../assets/vanWash.png';
import clientsImg from '../assets/clients.png';
import Card from '../Components/Card';
import Button from '../Components/Button';
import SignUpModal from '../Components/SignUpModal';
import LogInModal from '../Components/LoginInModal';

const HomeScreen = ({ navigation }) => {
  const [openLoginModal, setLoginModal] = useState(false);
  const [openSignupModal, setSignupModal] = useState(false);

  const loginClick = () => {
    setLoginModal(true);
  };
  const signUpClick = () => {
    setSignupModal(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.frontContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImg} />
        </View>
        {openLoginModal && (
          <LogInModal setLoginModal={setLoginModal} navigation={navigation} />
        )}
        {openSignupModal && <SignUpModal setSignupModal={setSignupModal} />}

        <View style={styles.contentContainer}>
          <Text style={styles.heading}>
            Ready to schedule your next cleaning?
          </Text>
          <View style={styles.cardsContainer}>
            <Card img={clientsImg} text1={'54+'} text2={'Trusted Clients'} />
            <Card img={vanWashImg} text1={'14208+'} text2={'Washed Trucks'} />
            <Card img={carWashImg} text1={'10000+'} text2={'Washed Cars'} />
          </View>
          <View>
            <Button text='Log in' onPress={loginClick} />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 10,
                color: '#bebebe',
              }}
            >
              Or
            </Text>
            <Button onPress={signUpClick} text='Sign in' />
          </View>
        </View>
      </View>
      <View style={styles.overlay}>
        <View style={styles.overlayColor}></View>
        <Image source={bckImg} style={styles.bckImg} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontContainer: {
    zIndex: 2,
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logoContainer: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 30,
  },
  logoImg: {
    width: 225,
    height: 50,
    alignSelf: 'center',
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    top: 0,
    width: '100%',
  },
  overlayColor: {
    position: 'absolute',
    height: '100%',
    top: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(48, 104, 170, 0.9)',
  },
  bckImg: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  cardsContainer: {
    paddingLeft: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 50,
  },
});

export default HomeScreen;
