import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import Button from './Button';
import Option from './Option';
import MapView from 'react-native-maps';
import DateTimePicker from '@react-native-community/datetimepicker';
import exteriorCleaning from '../assets/exteriorCleaning.png';
import interiorCleaning from '../assets/interiorCleaning.png';
import conditioning from '../assets/conditioning.png';
import carOption from '../assets/carOption.png';
import truckOption from '../assets/truckOption.png';
import successImg from '../assets/success.png';
import SubmitModal from './SubmitModal';

const ScheduleModal = ({ show, setShowModal }) => {
  const scrollViewRef = useRef();
  const date = new Date();
  const [options, setOptions] = useState({
    need: null,
    vehicle: {
      type: null,
      make: '',
      model: '',
    },
    location: '',
    date: {
      date: null,
      time: null,
    },
  });
  const [openSubmitModal, setModal] = useState(false);

  const showModal = () => {
    if (
      options.need !== null &&
      options.vehicle.type !== null &&
      options.vehicle.make !== '' &&
      options.vehicle.make !== '' &&
      options.location !== ''
    ) {
      setModal(true);
      setTimeout(() => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  const st = {
    position: 'absolute',
    top: show ? '0%' : '100%',
    // top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    zIndex: 4,
    backgroundColor: '#245281',
    paddingLeft: 10,
    paddingTop: show ? 40 : 0,
    paddingRight: 10,
  };

  return (
    <ScrollView style={st} ref={scrollViewRef}>
      <View>
        <Text onPress={() => setShowModal(!show)} style={styles.heading}>
          Close the modal
        </Text>
      </View>
      <View style={styles.appointContainer}>
        <View style={styles.eachStep}>
          <Text style={styles.optionHeading}>What is your need?</Text>
          <ScrollView
            horizontal={true}
            style={{ paddingTop: 20, paddingBottom: 20 }}
          >
            <Option
              setOptions={setOptions}
              options={options}
              tag='1'
              text='Interior cleaning'
              img={interiorCleaning}
            />
            <Option
              options={options}
              setOptions={setOptions}
              tag='2'
              text='Exterior cleaning'
              img={exteriorCleaning}
            />
            <Option
              setOptions={setOptions}
              options={options}
              tag='3'
              text='Conditioning'
              img={conditioning}
            />
          </ScrollView>
        </View>
        <View style={styles.eachStep}>
          <Text style={styles.optionHeading}>What is your vehicle type?</Text>
          <View
            style={{
              height: 70,
              width: 180,
              borderWidth: 2,
              borderColor: options.vehicle.type == 'Car' ? 'green' : 'black',
              borderRadius: 5,
              marginBottom: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              position: 'relative',
            }}
            onTouchEnd={() =>
              setOptions({
                ...options,
                vehicle: { ...options.vehicle, type: 'Car' },
              })
            }
          >
            {options.vehicle.type == 'Car' && (
              <Image
                source={successImg}
                style={{
                  height: 30,
                  width: 30,
                  position: 'absolute',
                  top: -15,
                  right: -15,
                }}
              />
            )}
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              Car
            </Text>
            <Image source={carOption} style={{ height: 60, width: 60 }} />
          </View>
          <View
            style={{
              height: 70,
              width: 180,
              borderWidth: 2,
              borderColor: options.vehicle.type == 'Truck' ? 'green' : 'black',
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: 15,
            }}
            onTouchEnd={() =>
              setOptions({
                ...options,
                vehicle: { ...options.vehicle, type: 'Truck' },
              })
            }
          >
            {options.vehicle.type == 'Truck' && (
              <Image
                source={successImg}
                style={{
                  height: 30,
                  width: 30,
                  position: 'absolute',
                  top: -15,
                  right: -15,
                }}
              />
            )}
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              Truck
            </Text>
            <Image source={truckOption} style={{ height: 60, width: 60 }} />
          </View>
          <View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <TextInput
                onChangeText={text => {
                  setOptions({
                    ...options,
                    vehicle: {
                      ...options.vehicle,
                      make: text,
                    },
                  });
                }}
                placeholder="Add vehicle's make"
                style={styles.inputs}
              />
              {options.vehicle.make !== '' && (
                <Image source={successImg} style={{ height: 30, width: 30 }} />
              )}
            </View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <TextInput
                onChangeText={text => {
                  setOptions({
                    ...options,
                    vehicle: {
                      ...options.vehicle,
                      model: text,
                    },
                  });
                }}
                style={styles.inputs}
                placeholder="Add vehicle's model"
              />
              {options.vehicle.model !== '' && (
                <Image source={successImg} style={{ height: 30, width: 30 }} />
              )}
            </View>
          </View>
        </View>
        <View style={styles.eachStep}>
          <Text style={styles.optionHeading}>Where are you locating?</Text>
          <View>
            <TextInput
              onChangeText={text => {
                setOptions({
                  ...options,
                  location: text,
                });
              }}
              style={styles.inputs}
              placeholder='Add location'
            />
          </View>
          <View>
            <MapView
              style={{
                flex: 1,
                height: 200,
                width: '100%',
                marginTop: 20,
                marginBottom: 20,
              }}
              region={{
                latitude: 41.8835672,
                longitude: -87.62555,
                latitudeDelta: 0.09,
                longitudeDelta: 0.05,
              }}
              showsUserLocation={true}
            />
          </View>
          <View>
            <Text style={styles.selectedOption}>Selected adress:</Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Text style={styles.opt}>
                {options.location ? options.location : 'Not selected'}
              </Text>
              {options.location !== '' && (
                <Image source={successImg} style={{ height: 30, width: 30 }} />
              )}
            </View>
          </View>
        </View>
        <View style={styles.eachStep}>
          <Text style={styles.optionHeading}>Appoint the service</Text>
          <View>
            <Text style={{ color: 'white' }}>Click to select date</Text>
            <DateTimePicker
              style={styles.datePickers}
              value={options.date.date ? new Date(options.date.date) : date}
              minimumDate={date}
              mode='date'
              onChange={(e, date) => {
                const d = new Date(date);
                setOptions({
                  ...options,
                  date: { ...options.date, date: d },
                });

                console.log(options);
              }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: 'white', marginTop: 20 }}>
              Clcik to select time
            </Text>
            <DateTimePicker
              style={styles.datePickers}
              value={options.date.time ? new Date(options.date.time) : date}
              mode='time'
              onChange={(e, date) => {
                const d = new Date(date);
                setOptions({
                  ...options,
                  date: { ...options.date, time: d },
                });

                console.log(options);
              }}
            />
          </View>
          <View>
            <Text style={styles.selectedOption}>Selected date:</Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            >
              <Text style={styles.opt}>
                {options.date.data !== null && options.date.time !== null
                  ? new Date(options.date.date).toLocaleDateString() +
                    ' at ' +
                    new Date(options.date.time).getHours() +
                    ':' +
                    new Date(options.date.time).getMinutes()
                  : 'Not selected'}
              </Text>
              {options.date.data !== null && options.date.time !== null && (
                <Image source={successImg} style={{ height: 30, width: 30 }} />
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 80 }}>
        {!openSubmitModal && <Button text='Submit' onPress={showModal} />}
      </View>
      <View>
        {openSubmitModal && <SubmitModal setModal={setModal} data={options} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 50,
  },
  appointContainer: {
    paddingBottom: 40,
  },
  eachStep: {
    marginBottom: 50,
  },
  optionHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },
  selectedOption: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  opt: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'semibold',
  },
  datePickers: {
    alignSelf: 'start',
  },
});

export default ScheduleModal;
