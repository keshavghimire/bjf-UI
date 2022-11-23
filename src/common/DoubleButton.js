import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppSettings from '../utils/AppSettings';
const {height, width} = Dimensions.get('window');

const DoubleButton = props => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    main: {
      width: width * 0.5,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',

      borderBottomColor: AppSettings.primary,
    },
    line: {
      height: 35,
      width: 0.2,
      backgroundColor: '#2E3034',
    },
    heading: {
      fontSize: 16,
      color: '#2E3034',
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.main,
          {
            borderBottomWidth: props.active ? 3 : 0,
          },
        ]}
        onPress={props.onPressLeft}>
        <Text style={styles.heading}>{props.leftText}</Text>
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity
        style={[
          styles.main,
          {
            borderBottomWidth: props.active ? 0 : 3,
          },
        ]}
        onPress={props.onPressRight}>
        <Text style={styles.heading}>{props.rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoubleButton;
