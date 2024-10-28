import {Text, View, Image, StyleSheet} from "react-native"
const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} source={require("../assets/Rectangle.png")}/>
            </View>

            <View style={styles.usernameWrapper}>
                <Text style={styles.username}>Hi {title || "Default Title"}</Text>
                <Text style={styles.greeting}>Have agrate day a head</Text>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    avatarWrapper:{
        backgroundColor: '#D9CBF6',
        borderRadius: 100,
        width: 52,
        height: 52,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        borderRadius: 100,
    },
    usernameWrapper:{
        justifyContent: "space-around",
        paddingHorizontal: 10
    },
    username:{
        fontSize: 20,
        fontWeight: 700,
        color: "#171A1F"
    },
    greeting:{
        fontSize: 14,
        fontWeight: 700,
        color: "#9095A0"
    },
})
export default Header;