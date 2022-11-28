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

const SearchInput = props => {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: 20,
      marginVertical: 25,
      
      
    },
    main: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: AppSettings.white,
      height: 45,
      borderRadius: 48,
      paddingHorizontal: 18,
      borderWidth: 0.1,
      borderColor: 'rgba(0, 0, 0, 0.12)',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    input: {
      color: AppSettings.black,
    },
    knowText: {
      color: '#2E3034',
      fontSize: 16,
      fontWeight: '700',
      paddingBottom: 12,
      paddingLeft: 3,
    },
  });
  return (
    <View style={styles.container}>
      {props.heading && <Text style={styles.knowText}>{props.heading}</Text>}

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Search Bank"
          placeholderTextColor={'rgba(46, 48, 52, 0.4)'}
        />
        <Image
          source={require('../assets/search.png')}
          style={{height: 18, width: 18}}
        />
      </View>
    </View>
  );
};

export default SearchInput;
