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

const ChooseBank = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [addressData, setAddressData] = React.useState({
    state: '',
    city: '',
    area: '',
  });
  const [value, setValue] = React.useState(0.2);
  const [multiSliderValue, setMultiSliderValue] = React.useState([0, 100]);

  const multiSliderValuesChange = values => setMultiSliderValue(values);
  return (
    <SafeAreaView style={{height: height, backgroundColor: '#fff'}}>
      <Header heading={'Choose Bank'} />
      <SearchInput />
      <TopBank />
      <AllBank />
    </SafeAreaView>
  );
};

export default ChooseBank;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: height * 0.09,
    paddingVertical: 20,
  },
  item: {
    paddingTop: 30,
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingRight: 15,
    paddingBottom: 5,
  },
  momeyText: {
    color: 'rgba(46, 48, 52, 0.6)',
    fontSize: 40,
  },
  headingText: {
    fontSize: 16,
    color: AppSettings.black,
    fontWeight: '700',
    paddingBottom: 10,
  },
  subHeadingText: {
    color: 'rgba(46, 48, 52, 0.4)',
    paddingBottom: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    height: height * 0.55,
    backgroundColor: AppSettings.white,
    width: width * 0.8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modelItem: {
    padding: 20,
    paddingBottom: 0,
    fontSize: 16,
    fontWeight: '400',
    color: AppSettings.black,
  },
});
