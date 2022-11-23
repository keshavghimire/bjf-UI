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

const ApplyFilter = () => {
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
    <SafeAreaView style={{height: height,backgroundColor:"#fff"}}>
      <Header heading={'Apply Filter'} />
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modelView}>
            <ScrollView contentContainerStyle={{paddingBottom: 25}}>
              {stateData.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setModalVisible(false),
                        setAddressData({...addressData, state: item});
                    }}>
                    <Text style={styles.modelItem}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <View style={styles.main}>
        <View>
          <Text style={styles.headingText}>Price</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../assets/money.png')} />
              <Text style={styles.momeyText}> {multiSliderValue[0]}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'rgba(46, 48, 52, 0.6)'}}>to </Text>

              <Image source={require('../../assets/money.png')} />
              <Text style={styles.momeyText}> {multiSliderValue[1]} </Text>
              <Text style={{color: 'rgba(46, 48, 52, 0.6)'}}>+ Crores</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <MultiSlider
              markerStyle={{
                ...Platform.select({
                  ios: {
                    height: 28,
                    width: 28,
                    shadowColor: '#000000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowRadius: 1,
                    shadowOpacity: 0.1,
                  },
                  android: {
                    height: 28,
                    width: 28,
                    borderRadius: 50,
                    backgroundColor: '#3D3DD9',
                  },
                }),
              }}
              pressedMarkerStyle={{
                ...Platform.select({
                  android: {
                    height: 28,
                    width: 28,
                    borderRadius: 20,
                    backgroundColor: '#3D3DD9',
                  },
                }),
              }}
              selectedStyle={{
                backgroundColor: '#3D3DD9',
              }}
              trackStyle={{
                backgroundColor: '#CECECE',
              }}
              touchDimensions={{
                height: 40,
                width: 40,
                borderRadius: 20,
                slipDisplacement: 40,
              }}
              values={[multiSliderValue[0], multiSliderValue[1]]}
              sliderLength={width - 80}
              onValuesChange={multiSliderValuesChange}
              min={0}
              max={100}
              allowOverlap={false}
              minMarkerOverlapDistance={10}
            />
          </View>

          <View style={styles.item}>
            <Text style={styles.headingText}>Area</Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              {addressData.state == '' ? (
                <Text style={styles.subHeadingText}>Select Area</Text>
              ) : (
                <Text
                  style={[
                    styles.subHeadingText,
                    {
                      color: AppSettings.black,
                    },
                  ]}>
                  {addressData.state}
                </Text>
              )}
              {/* <Text style={styles.subHeadingText}>Select a state</Text> */}
              <Image source={require('../../assets/downArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingText}>Month/Year</Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.subHeadingText}>Select a Month</Text>
              <Image source={require('../../assets/downArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingText}>
              Size of Property
              {/* <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 14,
                  fontWeight: '400',
                }}>
                {' (' + 'Optional' + ' )'}
              </Text> */}
            </Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.subHeadingText}>
                Select a size of Property
              </Text>
              <Image source={require('../../assets/downArrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowBtn}>
          <PrimaryButton
            heading={'Cancel'}
            outline={true}
            width={width / 2.3}
          />

          <PrimaryButton heading={'Search'} width={width / 2.3} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ApplyFilter;
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
