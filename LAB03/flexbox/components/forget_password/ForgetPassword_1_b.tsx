import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';


const ForgetPassword_1_b = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
              style={styles.background}
            />

            {/* Logo */}
            <View style={styles.logo}>
              <FontAwesomeIcon icon={faLock} size= {100}/>
            </View>
            {/* Title & Subtitle */}
            <View style={styles.slogan}>
              <Text style={styles.title}>forget</Text>
              <Text style={styles.title}>password</Text>
            </View>
            <View style={styles.slogan}>
              <Text style={styles.subtitle}>Provide your account’s email for which you want to reset your password</Text>
            </View>

            {/* Input email */}
            <View style={styles.inputEmailWrapper}>
              <FontAwesomeIcon icon={faEnvelope} size= {20}/>
              <TextInput style = {styles.inputEmail} placeholder="Email"/>
            </View>
            {/* Button Next */}
            <View style={styles.buttonWrapper}>  
              <TouchableOpacity style={styles.button}>
                <Text style={styles.labelButton} >next</Text>
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
  paddingVertical: 50,
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
logo:{

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
// Input email
inputEmailWrapper:{
  backgroundColor: "#C4C4C4",
  flexDirection: "row",
  paddingHorizontal: 10,
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
},
inputEmail:{
  paddingVertical: 10,
  paddingHorizontal: 10,
  width: "100%"
},
// Button Next
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

export default ForgetPassword_1_b