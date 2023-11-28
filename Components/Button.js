import { StyleSheet, Text, View, Image } from 'react-native';

const Button = ({ text, onPress }) => {
  return (
    <View onTouchEnd={onPress} style={styles.bttBck} onPress={onPress}>
      <Text style={styles.bttnTxt}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bttBck: {
    backgroundColor: '#A6CE39',
    alignSelf: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 65,
    paddingRight: 65,
    borderRadius: 10,
  },
  bttnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Button;
