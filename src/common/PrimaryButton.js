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

const PrimaryButton = props => {
  const styles = StyleSheet.create({
    main: {
      width: props.width ? props.width : '99%',
      height: props.height ? props.height : 48,
      backgroundColor: props.outline ? 'white' : AppSettings.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60,
      borderColor: AppSettings.primary,
      borderWidth: props.outline ? 1 : 0,
    },
    heading: {
      fontSize: props.fontsize ? props.fontsize : AppSettings.secondaryFontSize,
      color: props.outline ? AppSettings.primary : AppSettings.white,
      fontWeight: '500',
    },
  });
  return (
    <TouchableOpacity style={styles.main} {...props}>
      <Text style={styles.heading}>{props.heading}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
