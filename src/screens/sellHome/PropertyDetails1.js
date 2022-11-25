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
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import Header from '../../common/Header';
import AppSettings from '../../utils/AppSettings';
import PrimaryButton from '../../common/PrimaryButton';
import {categoryData, state, stateData} from '../../constant/data';
import ProductItem from '../../component/ProductItem';
const {height, width} = Dimensions.get('window');
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const PropertyDetails1 = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [imageModel, setImageModel] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [imageFile, setImageFile] = React.useState('');

  const captureImage = async type => {
    setImageModel(false);
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        // console.log('Response = ', response.assets);

        // if (response.didCancel) {
        //   alert('User cancelled camera picker');
        //   return;
        // } else if (response.errorCode == 'camera_unavailable') {
        //   alert('Camera not available on device');
        //   return;
        // } else if (response.errorCode == 'permission') {
        //   alert('Permission not satisfied');
        //   return;
        // } else if (response.errorCode == 'others') {
        //   alert(response.errorMessage);
        //   return;
        // }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        setImageFile(response.assets[0]);
      });
    }
  };
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = type => {
    setImageModel(false);
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      // if (response.didCancel) {
      //   alert('User cancelled camera picker');
      //   return;
      // } else if (response.errorCode == 'camera_unavailable') {
      //   alert('Camera not available on device');
      //   return;
      // } else if (response.errorCode == 'permission') {
      //   alert('Permission not satisfied');
      //   return;
      // } else if (response.errorCode == 'others') {
      //   alert(response.errorMessage);
      //   return;
      // }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setImageFile(response.assets[0]);
    });
  };

  return (
    <SafeAreaView style={{height: height, backgroundColor: '#fff'}}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modelView}>
            <ScrollView contentContainerStyle={{paddingBottom: 25}}>
              {categoryData.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{paddingTop: 20, paddingHorizontal: 20}}
                    key={index}
                    onPress={() => {
                      setModalVisible(false), setCategory(item.name);
                    }}>
                    <Text style={styles.modelItem}>{item.name}</Text>
                    <Text style={styles.modelItemCommision}>
                      Commision-{' '}
                      <Text style={{fontWeight: '700'}}>{item.commision}</Text>
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={imageModel}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}>
          <View style={styles.imageModelView}>
            <Text style={styles.imageModelText}>Choose an action</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 30,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center', marginRight: 30}}
                onPress={() => captureImage('photo')}>
                <Image
                  source={require('../../assets/photo.png')}
                  style={{height: 60, width: 60, marginBottom: 10}}
                />
                <Text style={{color: '#000'}}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => chooseFile('photo')}>
                <Image
                  source={require('../../assets/gallery.png')}
                  style={{height: 65, width: 65, marginBottom: 10}}
                />
                <Text style={{color: '#000'}}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
            Add basic property details
          </Text>

          <View style={styles.item}>
            <Text style={styles.headingText}>Property Category</Text>
            <TouchableOpacity
              style={styles.row}
              onPress={() => setModalVisible(true)}>
              {category == '' ? (
                <Text style={styles.subHeadingText}>
                  Select property category
                </Text>
              ) : (
                <Text
                  style={[
                    styles.subHeadingText,
                    {
                      color: AppSettings.black,
                    },
                  ]}>
                  {category}
                </Text>
              )}

              <Image source={require('../../assets/downArrow.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headingText}>
            Property EC(Encumbrace Certificate)
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.headingText,
                {
                  color: AppSettings.primary,
                  top: 2,
                  paddingRight: 5,
                },
              ]}>
              {' '}
              1234ec.jpg
            </Text>
            <Image source={require('../../assets/cross.png')} />
          </View>
          <PrimaryButton
            heading={'+  ADD CERTIFICATE '}
            outline={true}
            width={width * 0.53}
            height={height * 0.05}
            fontsize={16}
          />
          <Text style={[styles.headingText, {paddingTop: 20}]}>
            Property Image
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.imageBox}
              onPress={() => setImageModel(true)}
              // captureImage('photo')}
            >
              {imageFile == '' ? (
                <Text
                  style={[
                    styles.headingText,
                    {
                      color: AppSettings.primary,
                      top: 5,
                    },
                  ]}>
                  {' '}
                  + ADD IMAGES
                </Text>
              ) : (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{uri: imageFile.uri}}
                    style={{
                      width: width * 0.4,
                      height: height * 0.1,
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      paddingRight: 5,
                    }}
                  />
                  <Text
                    style={[
                      styles.headingText,
                      {
                        color: AppSettings.primary,
                        top: 5,
                      },
                    ]}>
                    {' '}
                    + 2
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            {imageFile != '' && (
              <TouchableOpacity
                style={styles.imageBoxSmall}
                onPress={() => setImageModel(true)}
                // onPress={() => captureImage('photo')}
              >
                <Text
                  style={[
                    styles.headingText,
                    {
                      color: AppSettings.primary,
                      top: 5,
                    },
                  ]}>
                  {' '}
                  + ADD IMAGES
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <PrimaryButton heading={'Next'} />
      </View>
    </SafeAreaView>
  );
};

export default PropertyDetails1;
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
    paddingVertical: 25,
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
    fontSize: 14,
  },

  imageBox: {
    height: height * 0.11,
    width: width * 0.52,
    borderWidth: 1,
    borderColor: AppSettings.primary,
    borderRadius: 10,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  imageBoxSmall: {
    height: height * 0.11,
    width: width * 0.25,
    borderWidth: 1,
    borderColor: AppSettings.primary,
    borderRadius: 10,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    top:-height*0.05,
    height: height * 0.25,
    backgroundColor: AppSettings.white,
    width: width * 0.88,
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
    fontSize: 16,
    fontWeight: '400',
    color: '#3A3A3A',
  },
  modelItemCommision: {
    fontSize: 12,
    fontWeight: '400',
    color: '#3A3A3A',
    paddingTop: 5,
  },
  imageModelView: {
    height: height * 0.25,
    backgroundColor: AppSettings.white,
    paddingVertical: 20,
  },
  imageModelText: {
    fontSize: 16,
    color: AppSettings.black,
    textAlign: 'center',
  },
});
