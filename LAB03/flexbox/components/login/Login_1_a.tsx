import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const Login_1_a = () => {
    return (
       
        <View style={styles.container}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
              style={styles.background}
            />
            <View style={styles.logo}></View>
            <View style={styles.slogan}>
              <Text style={styles.title}>GROW</Text>
              <Text style={styles.title}>YOUR BUSINESS</Text>
            </View>
            <View style={styles.slogan}>
              <Text style={styles.subtitle}>We will help you to grow your business using online server</Text>
            </View>
            <View style={styles.buttonWrapper}>  
              <TouchableOpacity style={styles.button}>
                <Text style={styles.labelButton} >LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.labelButton}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.footerTitle}>HOW WE WORK?</Text>
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
  paddingVertical: 30
},
background:{
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  height: "140%"
},
logo:{
  width: 140,
  height: 140,
  borderWidth: 16,
  borderRadius: 100,

},
slogan:{
  width: "85%"
},
title:{
  textAlign: "center",
  fontSize: 25,
  fontWeight: 700
},
subtitle:{
  textAlign: "center",
  fontSize: 15,
  fontWeight: 700
},
buttonWrapper:{
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%",
},
button:{
  backgroundColor: "#E3C000",
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 10
},
labelButton:{
  fontWeight: 700,
  fontSize: 20
},
footerTitle:{
  fontSize: 18,
  fontWeight: 700
}
});

export default Login_1_a