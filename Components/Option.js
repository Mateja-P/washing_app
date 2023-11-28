import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import successImg from '../assets/success.png';

const Option = ({ img, setOptions, options, text, onPress, tag }) => {
  return (
    <View
      onTouchEnd={() => {
        setOptions({ ...options, need: tag });
      }}
      style={{
        height: 70,
        width: 190,
        borderWidth: 2,
        borderColor: tag == options.need ? 'green' : 'black',
        marginRight: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        gap: 5,
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {tag == options.need && (
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
      <Image source={img} style={{ height: 50, width: 50 }} />
      <Text tag={tag} style={{ color: 'white' }}>
        {text}
      </Text>
    </View>
  );
};

export default Option;
