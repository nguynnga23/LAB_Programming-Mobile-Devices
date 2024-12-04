import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from 'expo-router';
  export default function ProductDetail() {
    const navigation = useNavigation();
    return (
      
      <SafeAreaView style={styles.container}>
        <View style={styles.imageProductWrapper}>
          <Image
            style={styles.imageProduct}
            source={require('../assets/images/vs_blue.png')}
          />
        </View>
        <View style={styles.productDescWrapper}>
          <View style={styles.productName}>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          </View>
          <View style={styles.productRate}>
            <View style={styles.star}>
              <Image
                style={styles.imageStar}
                source={require('../assets/images/star.png')}
              />
              <Image
                style={styles.imageStar}
                source={require('../assets/images/star.png')}
              />
              <Image
                style={styles.imageStar}
                source={require('../assets/images/star.png')}
              />
              <Image
                style={styles.imageStar}
                source={require('../assets/images/star.png')}
              />
              <Image
                style={styles.imageStar}
                source={require('../assets/images/star.png')}
              />
            </View>
            <View>
              <Text>(Xem 828 đánh giá)</Text>
            </View>
          </View>
          <View style={styles.productPrice}>
            <Text style={styles.priceNew}>1.790.000 đ</Text>
            <Text style={styles.priceOld}>1.790.000 đ</Text>
          </View>
          <View style={styles.productNavigation}></View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.buttonSelectColor}
          onPress={() => navigation.navigate('ProductFilter')}>
            <Text style={styles.textButtonSelectColor}>4 MÀU - CHỌN MÀU</Text>
            <Image
              style={styles.imageVector}
              source={require('../assets/images/Vector.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSelectBuy}>
            <Text style={styles.textButtonSelectBuy}>Chọn mua</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 30,
    },
    imageProductWrapper: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageProduct: {
      width: 251,
      height: 311,
    },
    productDescWrapper: {
      flex: 1,
      justifyContent: 'space-between',
    },
    productName: {},
    productRate: {
      flexDirection: 'row',
    },
    star: {
      flexDirection: 'row',
    },
    imageStar: {},
    productPrice: {
      flexDirection: 'row',
      justifyContent: "space-between",
  
    },
    priceNew: {
      fontWeight: 700,
      fontSize: 18
    },
    priceOld: {
      textDecorationLine: "line-through",
      color: "#00000094",
      marginRight: 100,
      fontWeight: 700,
      fontSize: 18
    },
  
    productNavigation: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    buttonWrapper: {
      flex: 2,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    buttonSelectBuy: {
      width: "100%",
      height: 50,
      borderRadius: 10,
      backgroundColor: '#CA1536',
      justifyContent: 'center',
    },
    buttonSelectColor: {
      borderWidth: 2,
      width: "100%",
      height: 40,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textButtonSelectColor: {
      fontSize: 15,
      fontWeight: 500,
      textTransform: 'uppercase',
      justifyContent: 'center',
      textAlign: 'center',
    },
    imageVector: {
      marginLeft: 30,
    },
    textButtonSelectBuy: {
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'uppercase',
      textAlign: 'center',
      color: 'white',
    },
  });