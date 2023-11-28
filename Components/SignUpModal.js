import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from './Button';

const SignUpModal = ({ setSignupModal }) => {
  return (
    <View style={s.container}>
      <View style={s.container2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={s.heading}>Sign up</Text>
          <Text onTouchEnd={() => setSignupModal(false)}>X</Text>
        </View>
        <View>
          <View style={s.eachInputView}>
            <Text>Name:</Text>
            <TextInput style={s.input} />
          </View>
          <View style={s.eachInputView}>
            <Text>Phone:</Text>
            <TextInput style={s.input} />
          </View>
          <View style={s.eachInputView}>
            <Text>Email:</Text>
            <TextInput style={s.input} />
          </View>
          <View style={s.eachInputView}>
            <Text>Password:</Text>
            <TextInput style={s.input} />
          </View>
          <View style={{ marginTop: 15 }}>
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
  eachInputView: {
    marginBottom: 15,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    height: 25,
    marginTop: 5,
    width: 250,
  },
});

export default SignUpModal;
