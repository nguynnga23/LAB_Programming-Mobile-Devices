import { Text, View, Image, StyleSheet } from "react-native";
import { useSelector } from 'react-redux'; // Import useSelector từ redux

const Header = () => {
    // Lấy tên người dùng từ Redux store
    const title = useSelector((state) => state.users.name) || "Default Title"; // Giả sử bạn có state.user.name trong store

    return (
        <View style={styles.container}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar} source={require("../assets/Rectangle.png")} />
            </View>

            <View style={styles.usernameWrapper}>
                <Text style={styles.username}>Hi {title}</Text> {/* Sử dụng title từ Redux */}
                <Text style={styles.greeting}>Have a great day ahead</Text> {/* Sửa lỗi chính tả */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    avatarWrapper: {
        backgroundColor: '#D9CBF6',
        borderRadius: 100,
        width: 52,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        borderRadius: 100,
        width: '100%',  // Đảm bảo hình ảnh chiếm toàn bộ không gian
        height: '100%', // Đảm bảo hình ảnh chiếm toàn bộ không gian
    },
    usernameWrapper: {
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    username: {
        fontSize: 20,
        fontWeight: '700',
        color: "#171A1F",
    },
    greeting: {
        fontSize: 14,
        fontWeight: '700',
        color: "#9095A0",
    },
});

export default Header;
