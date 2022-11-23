import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Header from '../../common/Header';
import AppSettings from '../../utils/AppSettings';
import PrimaryButton from '../../common/PrimaryButton';
import ProductItem from '../../component/ProductItem';
const {height, width} = Dimensions.get('window');
const PropertyDetails2 = () => {
  const [secuure, setSecure] = React.useState(true);

  return (
    <SafeAreaView style={{height: height, backgroundColor: '#fff'}}>
      <Header heading={'Sell/Rent  home'} />
      <View style={styles.main}>
        <View>
          <Text style={styles.subHeadingText}>STEP 1 OF 2</Text>
          <Text
            style={[
              styles.headingText,
              {
                fontSize: 22,
              },
            ]}>
            Add personal & price details
          </Text>

          <View style={styles.item}>
            <Text style={styles.headingText}>Property Owner Name</Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Enter the property owner name"
              placeholderTextColor={'rgba(46, 48, 52, 0.4)'}
            />
          </View>

          <View style={styles.item}>
            <Text style={styles.headingText}>Property Owner Mobile No.</Text>
            <View style={styles.row}>
              <TextInput
                style={{
                  fontSize: 14,
                  height: 40,
                  color: AppSettings.black,
                  paddingLeft: 10,
                  width: '90%',
                }}
                secureTextEntry={secuure}
                placeholder="1234-1234-1234"
                placeholderTextColor={'rgba(46, 48, 52, 0.4)'}
              />
              <TouchableOpacity>
                <Image
                  source={require('../../assets/hidden.png')}
                  style={{height: 15, width: 15}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingText}>Property Owner Mobile No.</Text>
            <View style={styles.row}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'rgba(46, 48, 52, 0.4)',
                    paddingRight: 3,
                  }}>
                  +91
                </Text>
                <Image source={require('../../assets/downSmall.png')} />
              </TouchableOpacity>

              <View
                style={{
                  width: 1,
                  height: 15,
                  backgroundColor: '#8F92A1',
                  marginLeft: 5,
                }}
              />
              <TextInput
                style={{
                  fontSize: 14,
                  height: 40,
                  color: AppSettings.black,
                  paddingLeft: 10,
                  width: '80%',
                }}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Enter the mobile number "
                multiline={true}
                placeholderTextColor={'rgba(46, 48, 52, 0.4)'}
              />
            </View>
          </View>
          <View style={styles.item}>
            <Text style={styles.headingText}>Add Property Description</Text>
            <TextInput
              style={[
                styles.input,
                {
                  height: 80,
                  textAlignVertical: 'top',
                },
              ]}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Add the proprty description "
              multiline={true}
              placeholderTextColor={'rgba(46, 48, 52, 0.4)'}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.headingText}>Property Price</Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Enter the property price"
              multiline={true}
              placeholderTextColor={'rgba(46, 48, 52, 0.4)'}
            />
          </View>
        </View>
        <PrimaryButton heading={'Next'} />
      </View>
    </SafeAreaView>
  );
};

export default PropertyDetails2;
const styles = StyleSheet.create({
  main: {
    // backgroundColor:"red"
    marginTop: 20,
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: height * 0.09,
  },
  subHeading: {
    color: '#000',
  },
  item: {
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',

    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    // paddingVertical: 8,
    paddingTop: 8,
  },
  headingText: {
    fontSize: 16,
    color: AppSettings.black,
    fontWeight: '700',
  },
  subHeadingText: {
    color: 'rgba(46, 48, 52, 0.4)',
    paddingBottom: 5,
    fontSize: 14,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    fontSize: 14,
    // backgroundColor:"red",
    height: 40,
    color: AppSettings.black,
    paddingLeft: 0,
  },
});
