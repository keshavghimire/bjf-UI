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
import AppSettings from '../../utils/AppSettings';
import PrimaryButton from '../../common/PrimaryButton';
import {state, stateData} from '../../constant/data';
const {height, width} = Dimensions.get('window');
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import SearchInput from '../../component/SearchInput';
import TopBank from '../../component/TopBank';
import AllBank from '../../component/AllBank';

const SearchBank = () => {
  return (
    <SafeAreaView style={{height: height, backgroundColor: '#fff'}}>
      <Header heading={'Search Branch'} />
      <SearchInput heading={'Axis Bank'} />
      <View style={styles.body}>
        <View style={styles.line} />
        <Text style={styles.textHeading}>Search Results</Text>
        <View style={styles.box}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.textHeading, {paddingVertical: 10}]}>
              Naranpura (ahemdabad)
            </Text>
            <Image source={require('../../assets/rightArrow.png')} />
          </View>
          <Text style={styles.subHeading}>
            UTIB0000298 | Ahemdabad, Gujarat{'\n'}Sthapana, Opp: G.H.B Complex,
            {'\n'}Ankur Road,Narayanpua
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchBank;
const styles = StyleSheet.create({
  body: {
    marginHorizontal: 20,
  },
  line: {
    height: 1,
    width: width * 0.9,
    backgroundColor: '#E0E0E0',
    marginTop: 20,
  },
  box: {
    padding: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  textHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    paddingVertical: 30,

  },
  subHeading: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(40, 40, 40, 0.6)',
    lineHeight: 30,
  },
});
