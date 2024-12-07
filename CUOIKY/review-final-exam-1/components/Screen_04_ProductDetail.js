import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen04_ProductDetail() {
  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150/F7EFF0',
      name: 'Sản phẩm 1',
      price: '100,000 VND',
      rating: 4
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150/AFD3E2',
      name: 'Sản phẩm 2',
      price: '200,000 VND',
      rating: 5
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150/F7C4CD',
      name: 'Sản phẩm 3',
      price: '300,000 VND',
      rating: 3
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150/DD9034',
      name: 'Sản phẩm 4',
      price: '400,000 VND',
      rating: 4
    },
  
  ];
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const handleImageSelect = (product) => {
    setSelectedProduct(product);
  }
  
  const [quantity, setQuantity] = useState(0);
  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrease = () => {
    setQuantity(quantity - 1)
  }
  return (
    <View style={styles.container}>
        {/* Main image */}
        <View style={styles.mainImageWrapper}>
          <Image style={{borderRadius: 10, width: "100%", height: "100%"}} source={{uri: selectedProduct.image}}/>
        </View>
        {/* Small image */}
        <View style={styles.smallImageWrapper}>
          {products.map((product) => (
            <TouchableOpacity style={{borderRadius: 10,width: "22%"}} key={product.id} onPress={() => handleImageSelect(product)}>
              <Image style={{borderRadius: 10, width: "100%", height: "100%"}} source={{ uri: product.image }}/>
            </TouchableOpacity>
          ))}
        </View>
        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>{selectedProduct.price}</Text>
          <Text style={styles.discount}>Buy 1 get 1</Text>
        </View>
        {/* Product name */}
        <View style={styles.productNameWrapper}>
          <View>
            <Text style={styles.productName}>{selectedProduct.name}</Text>
            <Text style={styles.productDescription}>Occaecat est deserunt tempor office</Text>
          </View>
          <View style={styles.rating}>
              <Ionicons/>
              <Text>{selectedProduct.rating}</Text>
          </View>
        </View>
        {/* Size */}
        <View style={styles.sizeWrapper}>
          <View style={styles.sizeBox}> 
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <TouchableOpacity style={styles.sizeButton}>
                  <Text style={{textAlign: "center"}}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Quantity */}
        <View style={styles.quantityWrapper}>
          <View style={{flexDirection: "row"}}> 
            <TouchableOpacity style={styles.buttonQuantity} onPress={handleDecrease}>
              <Text style={{fontSize: 20, fontWeight: 800, color: "#fff"}}>-</Text>
            </TouchableOpacity>
            <Text style={{paddingHorizontal: 20, fontSize: 20}}>{quantity}</Text>
            <TouchableOpacity style={styles.buttonQuantity} onPress={handleIncrease}>
              <Text style={{fontSize: 20, fontWeight: 800, color: "#fff"}}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{opacity: 0.4, paddingTop: 4}}>Total: </Text>
            <Text style={{fontSize: 20, fontWeight: 700}}>$4,98</Text>
          </View>
        </View>

        {/* Navigate */}
        <View style={styles.navigateWrapper}>
          <View style={{borderTopWidth: 1, flexDirection: "row", paddingVertical: 15, borderColor: "gray"}}>
            <Text style={{fontSize: 18, fontWeight: 700}}>Size guide</Text>
            <TouchableOpacity></TouchableOpacity>
          </View>
          <View style={{borderTopWidth: 1, borderBottomWidth: 1, flexDirection: "row", paddingVertical: 15, borderColor: "gray"}}>
            <Text style={{fontSize: 18, fontWeight: 700}}>Review</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  // Image
  mainImageWrapper:{
    flex: 3,
  },
  smallImageWrapper:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8
  },

  // Price
  priceWrapper:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  price:{
    fontWeight: 800,
    fontSize: 25,
    color: "#25C3D9"
  },
  discount:{
    backgroundColor: "#F7EFF0",
    padding: 5,
    color: "#EEB8BB",
    height: 25,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 10,
    fontSize: 10,
    fontWeight: "bold"
  },

  //Product name
  productNameWrapper:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productName:{
    fontSize: 18,
    fontWeight: 700,
  },
  productDescription:{
    fontSize: 14,
    opacity: 0.4
  },
  rating:{
    flexDirection: "row",
  },

  // Size
  sizeWrapper:{
    flex: 1,
  },
  sizeBox:{
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    width: "60%",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "gray"

  },
  sizeButton:{
    borderRightWidth: 1,
    padding: 10,
    width: "20%",
    borderColor: "gray"
  },
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
      height: 30,
      width: 30,
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
    justifyContent: "flex-end"
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
    fontSize: 18,
    fontWeight: 700,
    color: "#fff"
  },
})