import { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import scheduleImg from '../assets/scheduleImg.png';
import ScheduleModal from '../Components/ScheduleModal';

const ScheduleScreen = () => {
  const [show, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.firstHeading}>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Hey, Mateja</Text>
        <Text>Log out</Text>
      </View>
      <View style={styles.heroContainer}>
        <Text
          style={{
            color: '#1A365F',
            fontWeight: 'bold',
            fontSize: 30,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Ready to schedule your next cleaning?
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <Image style={styles.heroImg} source={scheduleImg} />
      </View>
      <View style={styles.openModalBttn} onTouchEnd={() => setShowModal(!show)}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Make an appointment
        </Text>
      </View>
      <ScheduleModal show={show} setShowModal={setShowModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 40,
    position: 'relative',
  },
  firstHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 40,
  },
  heroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },
  heroImg: {
    width: 350,
    height: 350,
  },
  openModalBttn: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 15,
    backgroundColor: '#1A365F',
    borderRadius: 5,
  },
});

export default ScheduleScreen;
