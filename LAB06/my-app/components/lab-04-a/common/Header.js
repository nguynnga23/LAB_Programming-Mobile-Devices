import {View, Text, TouchableOpacity, Image} from "react-native"
export default function Header({navigation, title}){
    return(
        <View style={{
            backgroundColor: "#1BA9FF",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 45,
            paddingHorizontal: 15
        }}>
            <TouchableOpacity style={{}}>
                <Image source={require("../../../assets/images/lab04_a/ant-design_arrow-left-outlined.png")}/>
            </TouchableOpacity>
            <Text style={{
                color: "#fff",
                fontWeight: 600
            }}>
                {title}
            </Text>
            <TouchableOpacity onPress={()=> alert("Cart Pressed")}>
                <Image source={require("../../../assets/images/lab04_a/bi_cart-check.png")}/>
            </TouchableOpacity>
        </View>

    )
}