import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const StyledComponent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to React Native</Text>
            <Text style={styles.subtitle}>Adding styles to elements</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: "#333"
    },
    subtitle:{
        fontSize: 16,
        color: '#666',
    }


})

export default StyledComponent