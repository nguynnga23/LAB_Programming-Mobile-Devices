import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native"
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
</style>
const DATA = [
    {
        id: "1",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "2",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "3",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "4",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "5",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "6",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "7",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "8",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "9",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
    {
        id: "10",
        imgPath: require("../../assets/images/lab05_b/bifour_small_-removebg-preview.png"),
        name: "Pinarello",
        price: "1800"
    },
]

const Item = ({imgPath, name, price}) =>{
    return(
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F7BA8326",
            borderRadius: 10,
            margin: 7,
            width: 200,
        }}>
            <Image style={{
                position: "absolute",
                top: 5,
                left: 15
            }} source={require("../../assets/images/lab05_b/heart.png")}/>
            <Image style={{
                margin: 15
            }} source = {imgPath}/>
            <Text style={{
                padding: 10,
                fontSize: 20,
                fontWeight: 400,
                color: "#00000099"
            }}>{name}</Text>
            <Text style={{
                  padding: 10,
                  fontSize: 20,
                  fontWeight: 400,
                //   fontFamily: "Ubuntu"
            }}>
                <Image source={require("../../assets/images/lab05_b/$.png")}/>
                {price}
            </Text>
        </View>
    )
}
export default function ListBikes(){
        return (
            <View style={{
                flex: 1,
                padding: 20
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: "space-around",

                }}>
                    <View style={{

                    }}>
                        <Text style={{
                            fontSize: 25,
                            fontWeight: 700,
                            color: "#E94141"
                        }}>The world’s Best Bike</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity style={styles.buttonFilter}>
                            <Text style={styles.labelButton}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonFilter}>
                            <Text style={styles.labelButton}>Roadbike</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonFilter}>
                            <Text style={styles.labelButton}>Mountain</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                    <View style={{
                        flex: 5,
                    }}>
                        <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item imgPath={item.imgPath} name={item.name} price={item.price}/>}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        contentContainerStyle={{alignItems: "center"}}
                        />
                    </View>
            </View>
        )
    
}

const styles = StyleSheet.create({
    buttonFilter:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#E9414187",
        width: 99,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    labelButton:{
        fontSize: 20,
        fontWeight: 400,
        color: "#E94141"
    }
})
