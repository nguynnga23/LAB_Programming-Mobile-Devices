import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
export default function Screen_01_GetStarted() {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      {/* Banner wrapper */}
      <View style={styles.bannerWrapper}>
        <Image style={styles.image} source={require("../assets/banner.png")}/>
      </View>
      {/* Title & Subtitle */}
      <View style={styles.titleNSubtitleWrapper}>
        <Text style={styles.title}>Boost Productivity</Text>
        <Text style={styles.subTitle}>Simplify tasks, boost productivity</Text>
      </View>
      {/* Button Wrapper */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}
          onPress={()=>{
            navigation.navigate("Register")
          }}
        >
            <Text style={styles.labelButton}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor:"#fff"}]}
          onPress={()=>{
            navigation.navigate("Login")
          }}
        >
            <Text style={[styles.labelButton, {color:"#000"}]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 25
    },
    // Banner wrapper
    bannerWrapper:{
        flex: 6,
        justifyContent: "space-around",
        alignItems: "center"
    },
    image:{
       height: "90%",
       width: "100%",
       borderRadius: 20
    },
    // Title and Subtitle Wrapper
    titleNSubtitleWrapper:{
        flex: 1,
        justifyContent: "space-around",
        paddingVertical: 15
    },
    title:{
        fontWeight: 700,
        fontSize: 20,
    },
    subTitle:{
        fontSize: 18,
        opacity: 0.4
    },

    // Button Wrapper
    buttonWrapper:{
        flex: 2,
    },
    button:{
        backgroundColor: "#25C3D9",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10

    },
    labelButton:{
        fontSize: 20,
        fontWeight: 600,
        color: "#fff",
    }
});