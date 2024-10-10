import {Text, View, Image, TouchableOpacity, StyleSheet} from "react-native"
const DonutDetail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageDonutWrapper}>
                <Image source={require("../../assets/images/Donut/pink_donut.png")}/>
            </View>
            <View style={styles.donutInfoWrapper}>
                <Text style={styles.donutName}>Pink Donut</Text>
                <Text style={styles.donutDesc}>Spicy tasty donut family</Text>
                <Text style={styles.donutPrice}>$20.00</Text>
            </View>
            <View style={styles.donutDeliveryWrapper}>
                <View style={styles.donutDelivery}>
                    <View style={{
                        flexDirection: "row"
                    }}>
                        <Image style={styles.clock} source={require("../../assets/images/Donut/Clock.png")}/>
                        <Text style={styles.donutDesc}>
                            Delivery in
                        </Text>
                    </View>
                    <Text style={styles.minute}>
                        30 min
                    </Text>
                </View>

                <View style={styles.quantity}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require("../../assets/images/Donut/button1.png")}/>
                    </TouchableOpacity>
                    <Text style={styles.numberQuantity}> 1 </Text>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require("../../assets/images/Donut/button2.png")}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.donutRestaurantWrapper}>
                <Text style={styles.donutName}>Restaurants info</Text>
                <Text style={styles.restaurantDes}>
                Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
                </Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textButton}>Add to card</Text>
                </TouchableOpacity>
            </View>
        </View>
      
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    imageDonutWrapper:{
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    donutInfoWrapper:{
        flex: 1,
    },
    donutName:{
        fontSize: 20,
        fontWeight: 700,
        paddingVertical: 10
    },
    donutDesc:{
        fontSize: 15,
        fontWeight: 700,
        color: "#0000008A"
    },
    donutPrice:{
        fontSize: 20,
        fontWeight: 700,
        position: "absolute",
        right: 0,
        top: 10,
        color: "red"
    },
    donutDeliveryWrapper:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    clock:{
        marginRight: 10
    },
    donutDelivery:{
        fontSize: 15,
        fontWeight: 700,
        color: "#0000008A",
    },
    minute:{
        fontSize: 20,
        fontWeight: 700,
        marginTop: 10,
        margin: 20
    },
    quantity:{
        flexDirection: "row",
        position: "absolute",
        right: 0,
        top: 15

    },
    button:{
    },
    numberQuantity:{
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: 700
    },
    donutRestaurantWrapper:{
        flex: 1,

    },
    restaurantDes:{
        fontSize: 15,
        fontWeight: 700,
        color: "#000000AB"
    },
    buttonWrapper:{
        flex: 1,
        justifyContent: "center"
    },
    buttonAdd:{
        backgroundColor: "#F1B000",
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    textButton:{
        fontSize: 25,
        fontWeight: 700,
        color: "#fff"
    },
})
export default DonutDetail;