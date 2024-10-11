import { useNavigation } from '@react-navigation/native';
import {Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'

const Login = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>
            <View style = {styles.imageWrapper}>
                <Image source={require("../../assets/images/Todolist/Logo.png")}/>
            </View>
            <View style = {styles.titleWrapper}>
                <Text style = {styles.textTitle}>manage your</Text>
                <Text style = {styles.textTitle}>task</Text>
            </View>
            <View style = {styles.inputWrapper}>
                <View style = {styles.inputBorder}>
                    <Image source={require("../../assets/images/Todolist/Frame.png")}/>
                    <TextInput style = {styles.input} placeholder = "Enter your name" />
                </View>
            </View>
            <View style = {styles.buttonWrapper}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={()=>navigation.navigate("ListTodo")}
                >
                    <Text style = {styles.textButton}>get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: "#fff"
    },
    imageWrapper:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    titleWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle:{
        fontSize: 30,
        fontWeight: 800,
        color: "#8353E2",
        textTransform: "uppercase",
        paddingVertical: 5
    },
    
    inputWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputBorder:{
        borderWidth: 1,
        borderColor: "gray",
        width: "100%",
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        height: "100%",
        width: "80%",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 600,
        color: "gray",
        padding: 5,
        borderWidth: 0,
    },
    buttonWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button:{
        backgroundColor: "#00BDD6",
        height: 50,
        width: "100%",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton:{
        color : '#fff',
        textTransform: "uppercase",
        fontSize: 20,
        fontWeight: 700
    },
})
export default Login;