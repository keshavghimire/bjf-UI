import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');

const AllBank = props => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 10,
    },

    knowText: {
      color: '#2E3034',
      fontSize: 16,
      fontWeight: '700',
      paddingBottom: 12,
      paddingLeft: 3,
    },

    bankName: {
      color: 'rgba(40, 40, 40, 0.6)',

      fontSize: 14,
      fontWeight: '500',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.knowText}>All Banks</Text>
      <ScrollView>
        {[1, 1, 2, 2, 2, 2, 2, 2, 22, 2, 2, 2].map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              <Text style={styles.bankName}>Abhyudaya Cooperative Bank</Text>
              <Image source={require('../assets/rightArrow.png')} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AllBank;
