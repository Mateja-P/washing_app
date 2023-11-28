import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({ img, text1, text2 }) => {
  return (
    <View style={styles.infoView}>
      <View style={styles.img}>
        <Image source={img} style={{ width: 40, height: 40 }} />
      </View>
      <View>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  text: {
    marginTop: 5,
    color: 'white',
    fontWeight: 'semibold',
    fontSize: 14,
  },
  text2: {
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  img: {
    marginRight: 7,
  },
});

export default Card;
