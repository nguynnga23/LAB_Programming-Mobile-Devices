import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native" 
const Login = () =>{
    return (
        <View style={styles.container}>
          
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
        </View>
      );
}
    
const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor : "#00CCF9",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logo:{
    width: 140,
    height: 140,
    borderWidth: 15,
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
  }
});



export default Login
