import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import AppSettings from '../utils/AppSettings';
const {height, width} = Dimensions.get('window');

const TopBank = props => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 10,
      paddingBottom: 15,
      borderBottomColor: '#E0E0E0',
      borderBottomWidth: 1,
    },

    knowText: {
      color: '#2E3034',
      fontSize: 16,
      fontWeight: '700',
      paddingBottom: 12,
      paddingLeft: 3,
    },
    logo: {
      width: width * 0.12,
      height: height * 0.07,
    },
    bankName: {
      color: '#2E3034',
      paddingTop: 5,
      fontSize: 12,
      fontWeight: '500',
    },
    bank: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 20,
    },
  });
  const dataBank = [
    {name: 'HDFC', logo: require('../assets/hdfc.png')},
    {name: 'ICICI', logo: require('../assets/icici.png')},
    {name: 'SBI', logo: require('../assets/sbi.png')},
    {name: 'AXIS', logo: require('../assets/axis.png')},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.knowText}>Top Banks</Text>
      <View style={{flexDirection: 'row',justifyContent:"space-between",paddingHorizontal:10}}>
        {dataBank.map((item, index) => {
          return (
            <View style={styles.bank}>
              {/* <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1024px-SBI-logo.svg.png',
                }}
                resizeMode="center"
                style={styles.logo}
              /> */}
              <Image source={item.logo}  />

              <Text style={styles.bankName}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TopBank;
