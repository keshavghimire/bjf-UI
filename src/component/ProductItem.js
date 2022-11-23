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

const ProductItem = props => {
  const styles = StyleSheet.create({
    main: {
      marginHorizontal: 20,
      marginBottom: 20,
    },
    heading: {
      fontSize: AppSettings.primaryFontSize,
      color: AppSettings.black,
      fontWeight: '500',
      width: width * 0.7,
    },
    logo: {
      height: height * 0.2,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    headingText: {
      color: AppSettings.black,
      fontSize: 16,
      fontWeight: '700',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    knowMoreBtn: {
      width: width * 0.25,
      height: height * 0.03,
      borderColor: '#3E3ED9',
      borderWidth: 1,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor:  props.verify?'#3E3ED9':"white",
    },
    body: {
      padding: 12,
      borderColor: 'rgba(0, 0, 0, 0.15)',
      borderWidth: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    knowText: {
      color: props.verify?"white":'#3E3ED9',
      fontSize: 11,
    },
  });
  return (
    <View style={styles.main}>
      {props.favorite && (
        <Image
          source={require('../assets/heart.png')}
          style={{
            position: 'absolute',
            height: 30,
            width: 30,
            zIndex: 1,
            right: 0,
            margin: 10,
          }}
        />
      )}

      <Image
        source={{
          uri: props.image,
        }}
        // resizeMode="cover"
        style={styles.logo}
      />
      <View style={styles.body}>
        <Text style={{color: 'rgba(46, 48, 52, 0.6)', fontSize: 10}}>
          {props.type}
        </Text>
        <Text style={styles.headingText}>{props.name}</Text>
        <View style={styles.row}>
          <Image source={require('../assets/location.png')} />
          <Text
            style={{
              fontSize: 12,
              color: '#000',
              marginLeft: 5,
            }}>
            {props.location}
          </Text>
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <TouchableOpacity style={styles.knowMoreBtn}>
            <Text style={styles.knowText}>
              {props.buttonText ? props.buttonText : 'Know More'}
            </Text>
          </TouchableOpacity>
          {props.verifyBatch && <Image source={require('../assets/verify.png')} />}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
