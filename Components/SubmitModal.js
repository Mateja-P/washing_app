import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import Button from './Button';

const SubmitModal = ({ setModal, data }) => {
  return (
    <View style={{ marginBottom: 70 }}>
      <View style={s.container2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        >
          <Text style={s.heading}>Confirm Appointment</Text>
          <Text style={{ fontSize: 16 }} onTouchEnd={() => setModal(false)}>
            X
          </Text>
        </View>
        <View>
          <View style={s.eachView}>
            <Text style={s.eachOpt}>Service:</Text>
            <Text style={s.eachAns}>
              {data.need == 1 && 'Interior cleaning'}
              {data.need == 2 && 'Exterior cleaning'}
              {data.need == 3 && 'Conditioning'}
            </Text>
          </View>
          <View style={s.eachView}>
            <Text style={s.eachOpt}>Vehicle type:</Text>
            <Text style={s.eachAns}>{data.vehicle.type}</Text>
            <Text style={s.eachAns}>make: {data.vehicle.make}</Text>
            <Text style={s.eachAns}>model: {data.vehicle.model}</Text>
          </View>
          <View style={s.eachView}>
            <Text style={s.eachOpt}>Location:</Text>
            <Text style={s.eachAns}>{data.location}</Text>
          </View>
          <View style={s.eachView}>
            <Text style={s.eachOpt}>Date:</Text>
            <Text style={s.eachAns}>
              {new Date(data.date.date).toLocaleDateString() +
                ' at ' +
                new Date(data.date.time).getHours() +
                ':' +
                new Date(data.date.time).getMinutes()}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginBottom: 15,
                marginTop: 15,
              }}
            >
              Price: 99$
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Button text='Submit' />
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    // top: '50%',
    top: 0,
    // left: '50%',
    left: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  heading: {
    color: '#0B3778',
    fontWeight: '600',
    fontSize: 22,
  },

  eachOpt: {
    fontSize: 18,
    fontWeight: '600',
  },
  eachView: {
    marginTop: 17,
    marginBottom: 17,
  },
  eachAns: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default SubmitModal;
