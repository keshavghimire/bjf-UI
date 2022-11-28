import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import Search from './src/screens/buyHome/Search';
import AppSettings from './src/utils/AppSettings';
import ProductScreen from './src/screens/buyHome/ProductScreen';
import ApplyFilter from './src/screens/buyHome/ApplyFilter';
import ProductDetails from './src/screens/buyHome/ProductDetails';
import PropertyDetails1 from './src/screens/sellHome/PropertyDetails1';
import PropertyDetails2 from './src/screens/sellHome/PropertyDetails2';
import Congratulation from './src/screens/congratulation/Congratulation';
import MyProperties from './src/screens/myProperty/MyProperties';
import PersonalProperty from './src/screens/buyHome/PersonalProperty';
import ChooseBank from './src/screens/bank/ChooseBank';
import SearchBank from './src/screens/bank/SearchBank';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/* Buy home */}
      {/* <Search /> */}
      {/* <ProductScreen/> */}
      {/* <ApplyFilter/> */}
      {/* <ProductDetails/> */}
      {/* <PersonalProperty/> */}

      {/* Sell Home */}
      {/* <PropertyDetails1 /> */}
      {/* <PropertyDetails2/> */}

      {/* Congratulation     */}
      {/* <Congratulation/> */}

      {/* <MyProperties/> */}

      {/* Bank */}
      <ChooseBank />
      {/* <SearchBank/> */}
    </View>
  );
};

export default App;
