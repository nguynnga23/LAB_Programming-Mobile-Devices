import React from "react"
import { useMemo, useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import RadioGroup from 'react-native-radio-buttons-group';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const RegisterForm_1_e = () =>{
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'female'
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();
    return (
        <View style = {styles.container}>

            {/* Header content */}
            <View style = {styles.headerTitle}>
                <Text style = {styles.title}>register</Text>
            </View>

            {/* Register information input */}
            <View style = {styles.loginInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Birthday"
                />

                <RadioGroup 
                    radioButtons={radioButtons} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout='row'
                />
            </View>
      
            {/* Register button */}
            <View style = {styles.registerButtonWrapper}>
                <TouchableOpacity style = {[styles.registerButton]}>
                    <Text style = {[styles.labelRegisterButton]}>register</Text>
                </TouchableOpacity>

            </View>

            {/* Footer content */}
            <View style = {styles.footerContentWrapper}>
                <Text style = {styles.footerContent}>When you agree to terms and conditions</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#D8EFDF",
        paddingHorizontal: 20
    },
   
    // Header content
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

    // Register information input
    loginInput:{ // // wrapper
        flex: 6,
        justifyContent: "space-around",
        textAlign: "center",
    },
    input:{
        height: 45,
        padding: 15,
        fontSize: 18,
        backgroundColor: "#CAE1D1"
    },
    // Register button
    registerButtonWrapper:{
        flex : 1
    },
    registerButton:{
        height: 45,
        backgroundColor: "#C34E3B",
        alignItems: "center",
        justifyContent: "center"
    },
    labelRegisterButton:{
        fontSize: 20,
        fontWeight: 700,
        color: "#D8EFDF",
        textTransform: "uppercase"
    },
    // Footer content
    footerContentWrapper:{
        flex: 1,
        alignItems: "center"
    },
    footerContent:{

    },
})

export default RegisterForm_1_e