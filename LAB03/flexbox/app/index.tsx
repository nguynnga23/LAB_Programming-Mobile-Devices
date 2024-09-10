import Login_1_a from "@/components/login/Login_1_a";
import Login from "@/components/login/Login_FirstScreen";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import Login from "@/components/login/login";
export default function Index() {
  return (
    <View style={styles.container}>
      <Login_1_a/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
