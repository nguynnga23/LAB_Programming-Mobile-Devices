import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Screen03_Login() {
  return (
    <View style={styles.container}>
      {/* Header Image */}
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../assets/header.png")}/>
        </View>
      {/* Login wrapper */}
      <View style={styles.loginWrapper}>
        {/* Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Welcome !</Text>
        </View>
        {/* Input */}
        <View style={styles.inputWrapper}>
          <Text style={{fontSize: 18, fontWeight: 700}}>Email</Text>
          <View style={styles.inputBorder}>
            <Ionicons name="mail-outline" size={20} color="black" />
            <TextInput style={styles.input} placeholder='Enter your email address'/>
          </View>
          <Text style={{fontSize: 18, fontWeight: 700}}>Password</Text>
          <View style={styles.inputBorder}>
            <Ionicons name="lock-closed-outline" size={20} color="black" />
            <TextInput style={styles.input} placeholder='Enter your password'/>
          </View>
        </View>
        {/* Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.labelButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  // Image header
  imageWrapper:{
    flex: 1,
    backgroundColor: "pink",
  },
  image:{
    width: "100%",
    height: "100%"
  },

  // Login area
  loginWrapper:{
    flex: 4,
    paddingHorizontal: 20
  },
  // Title
  titleWrapper:{
    flex: 1,
    paddingTop: 10
  },
  title:{
    fontSize: 40,
    fontWeight: 800
  },
  // Input
  inputWrapper:{
    flex: 2,
    marginVertical: 5
  },
  inputBorder:{
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    padding: 5,
    marginVertical: 10,
    borderColor: "#C5C8CD",
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    width: "100%",
    height: 50,
    marginLeft: 5
  },
  termNCondition:{
    marginVertical: 10,
  },
  labelTermNCondition:{},

  // Button
  buttonWrapper:{
    flex: 2,
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