import React from "react";
import {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Text, TextInput} from "react-native";

const VerificationForm_1_c = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
              style={styles.background}
            />

            {/* Logo */}
            <View style={styles.logo}>
              <Text style={styles.textLogo}>code</Text>
            </View>
            {/* Title & Subtitle */}
            <View style={styles.slogan}>
              <Text style={styles.title}>verification</Text>
            </View>
            <View style={styles.slogan}>
              <Text style={styles.subtitle}>Enter ontime password sent on ++849092605798</Text>
            </View>

            {/* Input email */}
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input}/>
              <TextInput style={styles.input}/>
              <TextInput style={styles.input}/>
              <TextInput style={styles.input}/>
              <TextInput style={styles.input}/>
              <TextInput style={styles.input}/>
            </View>
            {/* Button Next */}
            <View style={styles.buttonWrapper}>  
              <TouchableOpacity style={styles.button}>
                <Text style={styles.labelButton} >verify code</Text>
              </TouchableOpacity>
            </View>  
          </View>

            
    );
}
  
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor : "#00CCF9",
  alignItems: "center",
  justifyContent: "space-around",
  paddingVertical: 80,
  paddingHorizontal: 30
},
background:{
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  height: "140%"
},
// Logo
logo:{},
textLogo:{
  fontSize: 60,
  fontWeight: 700,
  textTransform: "uppercase"
},

// Title & Subtitle
slogan:{
  width: "100%"
},
title:{
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700,
  textTransform: "uppercase"
},
subtitle:{
  textAlign: "center",
  fontSize: 15,
  fontWeight: 700
},
// Input
inputWrapper:{
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
},
input:{
  paddingVertical: 10,
  paddingHorizontal: 10,
  width: "100%",
  borderWidth: 2,
  fontSize: 20,
  fontWeight: 500,
  textAlign: "center"
},
// Button 
buttonWrapper:{
  justifyContent: "center",
  width: "100%",
},
button:{
  backgroundColor: "#E3C000",
  paddingVertical: 10,
},
labelButton:{
  fontWeight: 700,
  fontSize: 20,
  textTransform: "uppercase",
  textAlign: "center"
},
});

export default VerificationForm_1_c