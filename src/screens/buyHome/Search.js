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

const Search = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [addressData, setAddressData] = React.useState({
    state: '',
    city: '',
    area: '',
  });
  return (
    <SafeAreaView style={{height: height,backgroundColor:"#fff"}}>
      <Header heading={'Buying a new home'} />
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
          <View style={styles.item}>
            <Text style={styles.headingText}>State</Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              {addressData.state == '' ? (
                <Text style={styles.subHeadingText}>Select State</Text>
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
            <Text style={styles.headingText}>City</Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.subHeadingText}>Select a city</Text>
              <Image source={require('../../assets/downArrow.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingText}>
              Area
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 14,
                  fontWeight: '400',
                }}>
                {' (' + 'Optional' + ' )'}
              </Text>
            </Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.subHeadingText}>Select a city</Text>
              <Image source={require('../../assets/downArrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <PrimaryButton heading={'Search'} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: height * 0.09,
  },
  item: {
    paddingTop: 30,
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
