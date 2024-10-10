import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView} from "react-native"
const Item = () => {
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.imageDonut}>
                <Image source={require('../../assets/images/Donut/donut_yellow.png')}/>
            </View>
            <View style={styles.donutInfo}>
                <Text style={styles.donutName}>Tasty Donut</Text>
                <Text style={styles.donutDesc}>Spicy tasty donut family</Text>
                <Text style={styles.donutPrice}>$10.00</Text>
            </View>
            <View style={styles.buttonWapper}>
                <TouchableOpacity style={styles.addButton}>
                    <Image source={require('../../assets/images/Donut/plus_button.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const ListDonuts = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTitleWrapper}>
                <Text style={styles.titleNormal}>Welcome, Jala!</Text>
                <Text style={styles.titleBold}>Choice you Best food</Text>
            </View>

            <View style={styles.inputWapper}>
                <TextInput style={styles.input} placeholder="Search food"/>
            </View>
            <View style={styles.filterButtonWrapper}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Pink Donut</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Floating</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listItemsWrapper}>
                <ScrollView>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>

                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    headerTitleWrapper:{
        flex: 1,
    },
    titleNormal:{
        fontSize: 16,
        fontWeight: 700,
        color: "#000000A6"
    },
    titleBold:{
        fontSize: 20,
        fontWeight: 700,
    },
    inputWapper:{
        flex: 1,
        width: "100%",
    },
    input:{
        height: 60,
        borderColor: "#C4C4C4",
        borderWidth: 1,
        backgroundColor: "#C4C4C41A",
        padding: 10,
        fontWeight: 700,
        fontSize: 18,
        color: "#C4C4C4"
    },
    filterButtonWrapper:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    button:{
        borderWidth: 1,
        height: 50,
        width: "30%",
        borderColor: "#C4C4C4",
        backgroundColor: "#C4C4C41A",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    textButton:{
        fontWeight: 700,
        fontSize: 18,
    },
    listItemsWrapper:{
        flex: 8,
    },
    itemWrapper:{
        flexDirection: "row",
        // justifyContent: "space-between",
        backgroundColor: "#F4DDDD",
        padding: 10,
        marginVertical: 10,
        borderRadius: 15
    },
    imageDonut:{
        marginRight: 30
    },
    donutInfo:{
        justifyContent: "space-around"
    },
    donutName:{
        fontWeight: 700,
        fontSize: 20,
    },
    donutDesc:{
        fontWeight: 700, 
        fontSize: 15,
        color: "#0000008A"
    },
    donutPrice:{
        fontWeight: 700,
        fontSize: 20,
    },
    buttonWapper:{
        position: "absolute",
        bottom: 0,
        right: 0
    },
    addButton:{
       
    }
})
export default ListDonuts;