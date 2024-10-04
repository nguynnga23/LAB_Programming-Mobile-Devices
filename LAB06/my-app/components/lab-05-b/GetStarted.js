import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"

export default function GetStarted(){
    return (
        <View style = {styles.container}>
            <View style={styles.sloganWrapper}>
                <Text style = {styles.slogan}>A premium online store for sporter and their stylish choice</Text>
            </View>
            <View style={styles.wrapperImage}>
                <Image  source={require("../../assets/images/lab05_b/bifour_-removebg-preview.png")}/>
            </View>
            <View style={styles.shopNameWrapper}>
                <Text style={styles.shopName}>power bike</Text>
                <Text style={styles.shopName}>shop</Text>
            </View>
            <View style={styles.buttonGetStartedWrapper}>
                <TouchableOpacity style = {styles.buttonGetStarted}>
                    <Text style = {styles.labelButton}>Get Started</Text>
                </TouchableOpacity>
            </View>
           
        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 15
    },
    sloganWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    slogan:{
        fontSize: 26,
        fontWeight: 500,
        textAlign: "center"
    },
    wrapperImage:{
        flex: 2,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#E941411A',
        borderRadius: 50
    },
    shopNameWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    shopName:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: 700,
        textTransform: "uppercase"
    },
    buttonGetStartedWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonGetStarted:{
        height: 61,
        width: "100%",
        backgroundColor: "#E94141",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    labelButton:{
        textAlign: "center",
        fontSize: 26,
        fontWeight: 700,
        color: "#fff"
    },
  });
