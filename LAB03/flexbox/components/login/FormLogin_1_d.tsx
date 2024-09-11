import React from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

const FormLogin_1_d = () =>{
    return (
        <View style = {styles.container}>
            <View style = {styles.headerTitle}>
                <Text style = {styles.title}>login</Text>
            </View>
            <View style = {styles.loginInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <View style = {styles.loginArea}>
                <TouchableOpacity style = {styles.buttonLogin}>
                    <Text style = {styles.textButton}>login</Text>
                </TouchableOpacity>
                <Text style = {styles.textInstrution}>When you agree to terms and conditions</Text>
                <TouchableOpacity>
                    <Text style = {styles.textForgetPassword}>Forgot your password?</Text>
                </TouchableOpacity>
               
                <Text style = {styles.textInstrution}>Or login with</Text>


            </View>
            <View style = {styles.socialButton}>
                <TouchableOpacity style = {[styles.buttonFacebook, styles.button]}>

                        <FontAwesomeIcon  icon={faFacebookF} color= {"#fff"} size= {30} />
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.buttonZalo, styles.button]}>
                    <Image 
                        style={styles.zLogo}
                        source={require('../../assets/images/z.png')}
                    />
                        
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.button]}>
                    <Image 
                        style={styles.googleLogo}
                        source={require('../../assets/images/google-logo.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#D8EFDF"
    },
    // Header
    headerTitle:{ // wrapper
        flex: 1,
        justifyContent: "center"
    },

    title:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: 700,
        textTransform: "uppercase"

    },

    // Email, Password input
    loginInput:{ // // wrapper
        flex: 2,
        justifyContent: "space-around",
        textAlign: "center",
        marginVertical: 20
    },
    input:{
        height: 45,
        marginHorizontal: 20,
        padding: 15,
        fontSize: 18,
        backgroundColor: "#CAE1D1"
    },
    // Login Button, Link forget password
    loginArea:{ // wrapper
        flex: 2,
        justifyContent: "space-around",
        alignItems: "center",
    },
    textButton:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: 700,
        color: "#D8EFDF",
        textTransform: "uppercase"
    },
    buttonLogin:{
        height: 45,
        margin: 12,
        padding: 10,
        backgroundColor: "#C34E3B",
        width: "90%"
    },
    textInstrution:{
        padding: 10,
    },
    textForgetPassword:{
        color: "#5D25FA",
        padding: 10,
    },
    //Social button
    socialButton:{ // wrapper
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    button:{
        borderWidth: 1,
        borderColor: "#1593C6",
        width: "30%",
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonFacebook:{
        backgroundColor: "#275A8E",

    },
    buttonZalo:{
        backgroundColor: "#1593C6",
    },
    zLogo:{
        width: 30,
        height: 30
    },
    googleLogo:{
        width: 30,
        height: 30
    },
   
})

export default FormLogin_1_d