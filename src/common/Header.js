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
import PrimaryButton from './PrimaryButton';
const {height, width} = Dimensions.get('window');

const Header = props => {
  const styles = StyleSheet.create({
    main: {
      height: height * 0.07,
      width: width ,
      backgroundColor: AppSettings.white,
      alignItems: 'center',
      flexDirection: 'row',

      paddingHorizontal: 20,
      shadowColor: '#000',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    shadow: {},
    heading: {
      fontSize: AppSettings.primaryFontSize,
      color: AppSettings.black,
      fontWeight: '500',
      width: width * 0.7,
    },
    logo: {
      marginRight: 15,
    },
  });
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <Image
          source={
            props.logo
              ? require('../assets/logo.png')
              : require('../assets/back.png')
          }
          style={styles.logo}
        />
      </TouchableOpacity>
      {props.button ? (
        <View style={{
          paddingLeft:width*0.25
        }}>
          <PrimaryButton
            heading={'Join BJF Family'}
            outline={true}
            width={width / 2.3}
            height={height * 0.04}
            fontsize={15}
          />
        </View>
      ) : (
        <Text numberOfLines={1} style={styles.heading}>
          {props.heading}
        </Text>
      )}

      <View style={styles.shadow} />
    </View>
  );
};

export default Header;
