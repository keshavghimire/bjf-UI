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
import ProductItem from '../../component/ProductItem';
const {height, width} = Dimensions.get('window');

const ProductScreen = () => {
  const [modalSortBy, setModalSortBy] = React.useState(false);
  const [sortItem, setSortItem] = React.useState('');
  const [modalFilter, setModalFilter] = React.useState(false);
  const [addressData, setAddressData] = React.useState({
    state: '',
    city: '',
    area: '',
  });
  return (
    <SafeAreaView style={{height: height,backgroundColor:"white"}}>
      <Header heading={'Properties in Hyderabad, chandigad'} />
      <Modal animationType="fade" transparent={true} visible={modalSortBy}>
        <View style={styles.modal}>
          <View style={styles.modelView}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
                marginBottom: 10,
              }}>
              Sort By
            </Text>
            {['Price', 'Popular', 'Newest First', 'Most Searched'].map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 15,
                    }}
                    onPress={() => {
                      setSortItem(item);
                      setModalSortBy(false);
                    }}>
                    <Text style={styles.modelItem}>{item}</Text>
                    {sortItem === item && (
                    <Image source={require('../../assets/tick.png')} />
                    )}
                  </TouchableOpacity>
                );
              },
            )}
            {/* <ScrollView contentContainerStyle={{paddingBottom: 25}}>
              
            </ScrollView> */}
          </View>
        </View>
      </Modal>
      

      <ScrollView style={styles.main}>
        {[1, 2, 3].map((item, index) => {
          return (
            <ProductItem
              key={index}
              image={
                'data:image/jpeg;base64,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'
              }
              type="Owner"
              name="Mr. Sunny Kumar Pandey"
              location="Near Hussain Sagar Lake, Hyderabad"
              favorite={true}
              verifyBatch={true}
            />
          );
        })}
        <View style={{height: 100}} />
      </ScrollView>
      <View style={styles.buttomView}>
        <TouchableOpacity
          style={styles.buttomItem}
          onPress={() => setModalSortBy(true)}>
          <Image source={require('../../assets/sort.png')} />
          <Text style={styles.buttomText}>Sort By</Text>
        </TouchableOpacity>

        <View
          style={{
            width: 1,
            backgroundColor: '#DEDEDE',
            height: 20,
          }}
        />
        <TouchableOpacity style={styles.buttomItem}>
          <Image source={require('../../assets/filter.png')} />
          <Text style={styles.buttomText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 20,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modelView: {
    backgroundColor: AppSettings.white,
    width: width,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  modelItem: {
    fontSize: 18,
    fontWeight: '400',
    color: AppSettings.black,
  },

  buttomView: {
    height: height * 0.08,
    width: width,
    position: 'absolute',
    bottom: 22,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#DEDEDE',
    borderTopWidth: 0.5,
    backgroundColor: AppSettings.white,
  },
  buttomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "red",
    width: width * 0.4,
    padding: 20,
  },
  buttomText: {
    color: AppSettings.black,
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 10,
  },
});
