import FormLogin_1_d from "@/components/login/FormLogin_1_d";
import Login_1_a from "@/components/login/Login_1_a";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import Login from "@/components/login/login";
export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Login_1_a/> */}
      <FormLogin_1_d/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
