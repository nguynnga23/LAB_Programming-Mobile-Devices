import { useNavigation } from 'expo-router';
import { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  
  export default function ProductFilter() {
    const navigation = useNavigation();
    // const {setSelectedColor} = route.params;
    // const [color, setColor] = useState('blue');
    const colors = ['#ADD8E6', '#FF0000', '#000000', '#0000FF'];
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.productWrapper}>
          <Image
            style={styles.imageProduct}
            source={require('../assets/images/vs_blue.png')}
          />
          <Text style={styles.descProduct}>
            <View><Text>Điện Thoại Vsmart Joy 3</Text></View>
            
            <View><Text>Hàng chính hãng</Text></View>
          </Text>
        </View>
        <View style={styles.colorChooserWrapper}>
          <Text>Chọn một màu bên dưới:</Text>
          {/* {colors.map((c, index)=>(
            <TouchableOpacity
            style={[styles.button, styles.buttonColor1]}
            onPress={()=>{
              setSelectedColor(color);
              navigation.goBack();
            }}></TouchableOpacity>
          ))} */}
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      marginHorizontal: 30
    },
    productWrapper: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'space-between',
      justifyContent: 'space-around',
    },
    imageProduct: {
      height: 132,
      width: 112,
    },
    descProduct: {},
  
    colorChooserWrapper: {
      flex: 4,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    button: {
      width: 65,
      height: 60,
    },
  
    buttonColor1: {
      backgroundColor: '#C5F1FB',
    },
  
    buttonColor2: {
      backgroundColor: '#F30D0D',
    },
  
    buttonColor3: {
      backgroundColor: '#000000',
    },
  
    buttonColor4: {
      backgroundColor: '#234896',
    },
  
    buttonWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: "#fff"
    },
    buttonDone: {
      width: "100%",
      height: 44,
      backgroundColor: '#1952E294',
      borderRadius: 5,
      justifyContent: 'center',
    },
    textButtonDone: {
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'white',
    },
  });
  