import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen04_ProductDetail() {
  return (
    <View style={styles.container}>
        {/* Main image */}
        <View style={styles.mainImageWrapper}>
          <Image style={{borderRadius: 10, backgroundColor: "pink", width: "100%", height: "100%"}}/>
        </View>
        {/* Small image */}
        <View style={styles.smallImageWrapper}>
          <Image/>
        </View>
        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>$2,99</Text>
          <Text style={styles.discount}>Buy 1 get 1</Text>
        </View>
        {/* Product name */}
        <View style={styles.productNameWrapper}>
          <View>
            <Text style={styles.productName}>Product name</Text>
            <Text style={styles.productDescription}>Occaecat est deserunt tempor office</Text>
          </View>
          <View style={styles.rating}>
              <Ionicons/>
              <Text>4.5</Text>
          </View>
        </View>
        {/* Size */}
        <View style={styles.sizeWrapper}>
        </View>
        {/* Quantity */}
        <View style={styles.quantityWrapper}>
          <View style={{flexDirection: "row"}}> 
            <TouchableOpacity style={styles.buttonQuantity}>
              <Text style={{fontSize: 30, fontWeight: 800, color: "#fff", paddingBottom: 10}}>-</Text>
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 20, fontSize: 25}}>2</Text>
            <TouchableOpacity style={styles.buttonQuantity}>
              <Text style={{fontSize: 30, fontWeight: 800, color: "#fff", paddingBottom: 10}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{opacity: 0.4, paddingTop: 10}}>Total: </Text>
            <Text style={{fontSize: 25, fontWeight: 700}}>$4,98</Text>
          </View>
        </View>

        {/* Navigate */}
        <View style={styles.navigateWrapper}>
          <View style={{borderTopWidth: 1, flexDirection: "row", paddingVertical: 20, borderColor: "gray"}}>
            <Text style={{fontSize: 20, fontWeight: 700}}>Size guide</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={{borderTopWidth: 1, borderBottomWidth: 1, flexDirection: "row", paddingVertical: 20, borderColor: "gray"}}>
            <Text style={{fontSize: 20, fontWeight: 700}}>Review</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          
        </View>
        {/* Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.labelButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  // Image
  mainImageWrapper:{
    flex: 2,
  },
  smallImageWrapper:{
    flex: 1,
  },

  // Price
  priceWrapper:{
    flex: 1,
    flexDirection: "row",
  },
  price:{
    fontWeight: 800,
    fontSize: 30,
    color: "#25C3D9"
  },
  discount:{
    backgroundColor: "#F7EFF0",
    padding: 5,
    color: "#EEB8BB",
    height: 30,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 700
  },

  //Product name
  productNameWrapper:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productName:{
    fontSize: 20,
    fontWeight: 700,
  },
  productDescription:{
    fontSize: 15,
    opacity: 0.4
  },
  rating:{
    flexDirection: "row",
  },

  // Size
 

  // Quantity
  quantityWrapper:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonQuantity:{
      borderRadius: 100,
      backgroundColor: "#25C3D9",
      height: 40,
      width: 40,
      justifyContent: "center",
      alignItems: "center"
  },

  //Navigate
  navigateWrapper:{
    flex: 2
  },

  //Button
  buttonWrapper:{
    flex: 1,
  },
  button:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25C3D9",
    width: "100%",
    height: 50,
    borderRadius: 10
  },
  labelButton:{
    fontSize: 20,
    color: "#fff"
  },
})