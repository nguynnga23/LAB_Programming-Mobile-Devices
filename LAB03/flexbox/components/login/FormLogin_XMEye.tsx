import React from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faUser, faUserPlus, faLock, faWifi } from '@fortawesome/free-solid-svg-icons';
// import { faUser, faLock } from '@fortawesome/free-regular-svg-icons';


const FormLogin_XMEye = () =>{
    return (
        <View style = {styles.container}>
            {/* Header */}
            <View style = {styles.headerTitle}>
                <Image 
                    style={styles.eyeballLogo}
                    source={require('../../assets/images/eyeball.svg')}
                />
            </View>

            {/* Email, Password input */}
            <View style = {styles.loginInput}>
                <View style = {styles.inputContainer}>
                    <FontAwesomeIcon  icon={faUser}  style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Please input user name"
                    />
                </View>
                <View style = {styles.inputContainer}>
                    <FontAwesomeIcon icon={faLock}  style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Please input password"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            {/* Login Button, Link forget password */}
            <View style = {styles.loginArea}>
                <TouchableOpacity style = {styles.buttonLogin}>
                    <Text style = {styles.textButton}>login</Text>
                </TouchableOpacity>
                <View style = {styles.textWrapper}>
                    <TouchableOpacity>
                        <Text style = {styles.text}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.text}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Other login methods */}
            <View style = {styles.textOtherWrapper}>
                <View style = {styles.line}></View>
                <Text style = {styles.textOther}>Other Login Methods</Text>
                <View style = {styles.line}></View>

            </View>

            {/* Social button */}
            <View style = {styles.socialButton}>
                <TouchableOpacity style = {[styles.buttonUser, styles.button]}>
                        <FontAwesomeIcon  icon={faUserPlus} color= {"#fff"} size= {35} />
                </TouchableOpacity>

                <TouchableOpacity style = {[styles.buttonWifi, styles.button]}>
                    <FontAwesomeIcon  icon={faWifi} color= {"#fff"} size= {35} />
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.buttonFacebook, styles.button]}>
                    <FontAwesomeIcon  icon={faFacebookF} color= {"#fff"} size= {35} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 30,
    },
   
    // Header
    headerTitle:{ // wrapper
        flex: 1,
    },

    eyeballLogo:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [
          { translateX: "-50%" }, // Dịch ngược lại một nửa chiều rộng
          { translateY: "-40%" }, // Dịch ngược lại một nửa chiều cao
        ],
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
        borderBottomWidth: 2,
        borderColor: "#DADADA",
    },
    input:{
        height: "100%",
        width: "100%",
        color: "#DADADA",
        fontSize: 17,
        fontWeight: 500
    },
  
    icon:{
        color: "#769CFD",
        marginRight: 10,
        height: "100%",
    },
    // Login Button, Link forget password
    loginArea:{ // wrapper
        flex: 1,
        // justifyContent: "space-around",
        alignItems: "center",
    },
    textButton:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: 500,
        color: "#fff",
        textTransform: "uppercase"
    },
    buttonLogin:{
        height: 45,
        // margin: 12,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#386FFC",
        width: "100%",
        borderRadius: 10
    },
    textWrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    text:{
        fontSize: 16,
        fontWeight: 500
    },

    // Other login methods
    textOtherWrapper:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textOther:{
        fontSize: 15,
        fontWeight: 600,
        textAlign: "center"
    },
    line:{
        borderWidth: 1,
        width: 70,
        height:0,
        marginTop: 10,
        borderColor: "#0E18F5"
    },
    //Social button
    socialButton:{ // wrapper
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    button:{
        width: 70,
        height: 70,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    buttonUser:{
        backgroundColor: "#3AB4FF",

    },
    buttonWifi:{
        backgroundColor: "#F4AA47",
    },
    buttonFacebook:{
        backgroundColor: "#3A579C",

    }
   
})

export default FormLogin_XMEye