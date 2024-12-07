import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import {React, useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const userData = [
  { username: 'john_doe', email: 'john@example.com', password: '123456' },
  { username: 'jane_doe', email: 'jane@example.com', password: '654321' },
  // Các user khác
]
export default function Screen03_Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý khi nhấn nút "Login"
  const handleLogin = async () =>{
    try{
      // Gửi yêu cầu GET đến API để kiểm tra người dùng
      const response = await fetch("https://6731c1d97aaf2a9aff11e61b.mockapi.io/users");
      const users = await response.json();

      // Kiểm tra người dùng
      const user = users.find((user) => user.email === email && user.password === password);
      if(user) {
        navigation.navigate("ProductDetail");
      }else{
        alert("Thông tin đăng nhập không hợp lệ!");
      }
    }catch(error){
      console.error("Lỗi khi đăng nhập : ", error)
    }
  };
  return (
    <View style={styles.container}>
      {/* Header Image */}
        <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require("../assets/header.png")}/>
        </View>
      {/* Login wrapper */}
      <View style={styles.loginWrapper}>
        {/* Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Welcome !</Text>
        </View>
        {/* Input */}
        <View style={styles.inputWrapper}>
          <Text style={{fontSize: 18, fontWeight: 700}}>Email</Text>
          <View style={styles.inputBorder}>
            <Ionicons name="mail-outline" size={20} color="black" />
            <TextInput style={styles.input} placeholder='Enter your email address' value={email} onChangeText={setEmail}/>
          </View>
          <Text style={{fontSize: 18, fontWeight: 700}}>Password</Text>
          <View style={styles.inputBorder}>
            <Ionicons name="lock-closed-outline" size={20} color="black" />
            <TextInput style={styles.input} placeholder='Enter your password' value={password} onChangeText={setPassword}/>
          </View>
        </View>
        {/* Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.labelButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  },
  // Image header
  imageWrapper:{
    flex: 1,
    backgroundColor: "pink",
  },
  image:{
    width: "100%",
    height: "100%"
  },

  // Login area
  loginWrapper:{
    flex: 4,
    paddingHorizontal: 20
  },
  // Title
  titleWrapper:{
    flex: 1,
    paddingTop: 10
  },
  title:{
    fontSize: 40,
    fontWeight: 800
  },
  // Input
  inputWrapper:{
    flex: 2,
    marginVertical: 5
  },
  inputBorder:{
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    padding: 5,
    marginVertical: 10,
    borderColor: "#C5C8CD",
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    width: "100%",
    height: 50,
    marginLeft: 5
  },
  termNCondition:{
    marginVertical: 10,
  },
  labelTermNCondition:{},

  // Button
  buttonWrapper:{
    flex: 2,
  },
  button:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25C3D9",
    width: "100%",
    height: 50,
    borderRadius: 10
  },
  labelButton:{
    fontSize: 20,
    color: "#fff"
  },
})