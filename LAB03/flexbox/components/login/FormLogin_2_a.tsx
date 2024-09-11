import React from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';

const FormLogin_2_a = () =>{
    return (
        <View style = {styles.container}>
             <LinearGradient
              // Background Linear Gradient
              colors={['#FBCB00', '#BF9A00']}
              style={styles.background}
            />
            <View style = {styles.headerTitle}>
                <Text style = {styles.title}>login</Text>
            </View>
            <View style = {styles.loginInput}>
                <View style = {styles.inputContainer}>
                    <FontAwesomeIcon  icon={faUser}  style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                </View>
                <View style = {styles.inputContainer}>
                    <FontAwesomeIcon icon={faLock}  style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View style = {styles.loginArea}>
                <TouchableOpacity style = {[styles.buttonLogin, styles.button]}>
                    <Text style = {[styles.textButton,styles.textButtonLogin ]}>login</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.buttonCreateAccount, styles.button]}>
                    <Text style = {[styles.textButton, styles.textButtonCreateAccount]}>create account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FBCB00",
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    background:{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%"
      },
    // Header
    headerTitle:{ // wrapper
        flex: 1,
        justifyContent: "center"
    },

    title:{
        fontSize: 30,
        fontWeight: 700,
        textTransform: "uppercase"

    },

    // Email, Password input
    loginInput:{ // // wrapper
        flex: 1,
        textAlign: "center",
        paddingBottom: 50
    },

    inputContainer:{
        flexDirection: 'row',
        height: 45,
        marginVertical: 15,
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: 600,
        backgroundColor: "#DCBD3B",
        borderWidth: 2,
        borderColor: "#EFE4B5"
    },
    input:{
        height: "100%",
        width: "100%",
   
    },
  
    icon:{
        marginRight: 10,
        height: "100%",
    },
    // Login Button
    loginArea:{ // wrapper
        flex: 2,
        alignItems: "center",
    },
    textButton:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
        color: "#D8EFDF",
        textTransform: "uppercase",
    },
    textButtonCreateAccount:{
        color: "#000"

    },
    button:{
        height: 45,
        margin: 12,
        padding: 10,
        width: "100%",
        borderRadius: 5
    },
    buttonLogin:{
        backgroundColor: "#000",
    },
  
})

export default FormLogin_2_a