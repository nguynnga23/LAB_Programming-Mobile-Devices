import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Screen_02_Register() {
  const navigation = useNavigation();

  // Các state để lưu giá trị của username, email, password
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  // Hàm xử lý khi nhấn nút "Continue"
  const handleContinue = async () =>{
      // Tạo đối tượng chứa thông tin người dùng
      const userData = { username, email, password };
      try{
        // Gửi dữ liệu user tới API (sử dụng fetch)
        const response = await fetch("https://6731c1d97aaf2a9aff11e61b.mockapi.io/users",{
          method: 'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userData)
        });
        if(!response.ok){
          throw new Error("Đã xảy ra lỗi khi gửi dữ liệu");
        }
        navigation.navigate("Login")
      } catch(error){
        console.error("Lỗi: ", error);
      }
  }

  return (
    <View style={styles.container}>
      {/* Logo and title wrapper */}
      <View style={styles.logoNTitleWrapper}>
        <Text style={styles.logo}></Text>
        <Text style={styles.title}>Nice to see you !</Text>
        <Text style={styles.subTitle}>Create your account</Text>
      </View>
      {/* Input wrapper */}
      <View style={styles.inputWrapper}>
        <View style={styles.inputBorder}>
          <Ionicons name="person-outline" size={20} color="black" />
          <TextInput 
            style={styles.input} placeholder='Enter your user name'
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputBorder}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <TextInput 
            style={styles.input} placeholder='Enter your email address'
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputBorder}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput 
            style={styles.input} placeholder='Enter your password'
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.termNCondition}>
          <Text style={styles.labelTermNCondition}>I agree with Terms & Conditions</Text>
        </View>
      </View>
      {/* Button wrapper */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}
          onPress={handleContinue}
        >
          <Text style={styles.labelButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  // Logo and title
  logoNTitleWrapper:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "#25C3D9"
  },
  title:{
    fontWeight: 800,
    fontSize: 30,
    paddingVertical: 15
  },
  subTitle:{
    opacity: 0.4
  },

  // Input
  inputWrapper:{
    flex: 2,
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
    flex: 1,
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
