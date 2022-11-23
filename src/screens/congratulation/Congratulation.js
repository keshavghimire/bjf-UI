import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import AppSettings from '../../utils/AppSettings';
import PrimaryButton from '../../common/PrimaryButton';
const {height, width} = Dimensions.get('window');

const Congratulation = props => {
  const styles = StyleSheet.create({
    main: {
      height: height,
      width: width,
      backgroundColor: AppSettings.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 30,
      fontWeight: '700',
      color: 'white',
      paddingTop: 30,
    },
    subHeading: {
      fontSize: 14,

      color: 'white',
      textAlign: 'center',
      marginTop: 8,
      lineHeight: 20,
    },
  });
  return (
    <View style={styles.main}>
      <StatusBar
        backgroundColor={AppSettings.primary}
        barStyle="light-content"
      />
      <Image source={require('../../assets/Progress.png')} />
      <Text style={styles.heading}>Congratulations!</Text>
      <Text style={styles.subHeading}>
        You have successfully added a {'\n'}property to sell.{'\n'}We will
        verify the documents and {'\n'}get back to you within 48 hrs
      </Text>
      <View
        style={{
          width: width,
          paddingHorizontal: 30,
          top: height * 0.22,
        }}>
        <PrimaryButton heading={'Check Status'} outline={true} fontsize={14} />
      </View>
    </View>
  );
};

export default Congratulation;
