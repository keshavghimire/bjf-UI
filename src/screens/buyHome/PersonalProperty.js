import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../common/Header';
import DoubleButton from '../../common/DoubleButton';
import Property from '../../component/Property';
import LineGraph from '../../component/StatusGraph';
const {height, width} = Dimensions.get('window');

const PersonalProperty = () => {
  const [left, setLeft] = React.useState(true);
  return (
    <SafeAreaView style={{height: height, backgroundColor: '#fff'}}>
      <Header heading={'Mr. Sunny Kumar Pandey'} />
      <DoubleButton
        leftText="Verification Timeline"
        rightText="Property Details"
        onPressLeft={() => {
          setLeft(true);
        }}
        onPressRight={() => {
          setLeft(false);
        }}
        active={left}
      />
      {left ? (
        <LineGraph/>
      ) : (
        <Property/>
      )}
    </SafeAreaView>
  );
};

export default PersonalProperty;

