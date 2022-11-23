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

const LineGraph = props => {
  const styles = StyleSheet.create({
    main: {
      margin: 40,
      flexDirection: 'row',
    },
    line: {
      height: height * 0.29,
      width: 1,
      backgroundColor: '#DBDBFF',
    },
    heading: {
      fontSize: 16,
      color: '#2E3034',
      fontWeight: '700',
    },
    subHeading: {
      fontSize: 14,
      paddingTop: 8,
      color: '#AAAAAA',
      lineHeight: 20,
    },
    circle1: {
      height: 18,
      width: 18,
      borderRadius: 9,
      backgroundColor: '#3EAE51',
      position: 'absolute',
      top: height * 0.001,
      left: -8,
      zIndex: 1,
    },
    circle2: {
      height: 18,
      width: 18,
      borderRadius: 9,
      backgroundColor: '#3D3DD9',
      position: 'absolute',
      top: height * 0.129 ,
      left: -8,
      zIndex: 1,
    },
    circle3: {
      height: 18,
      width: 18,
      borderRadius: 9,
      backgroundColor: '#DFDFDF',
      position: 'absolute',
      top: height * 0.275 ,
      left: -8,
    },
  });
  return (
    <View style={styles.main}>
      <View style={styles.circle1}/>
      <View style={styles.circle2}/>
      <View style={styles.circle3}/>
      <View style={styles.line} />
      <View>
        <View style={{paddingLeft: 20,paddingBottom:50}}>
          <Text style={styles.heading}>Property Documents Submitted</Text>
          <Text style={styles.subHeading}>At 12:34 pm on 12-01-2022</Text>
        </View>
        <View style={{paddingLeft: 20,paddingBottom:50}}>
          <Text style={styles.heading}>Property Documents Verification</Text>
          <Text style={styles.subHeading}>Under Verification{"\n"}*Expected verification by 14-01-2022</Text>
        </View>
        <View style={{paddingLeft: 20}}>
          <Text style={[styles.heading,{color:"#DADADA"}]}>Property listed for sell</Text>
        </View>
      </View>
    </View>
  );
};

export default LineGraph;
