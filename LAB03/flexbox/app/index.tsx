import ForgetPassword_1_b from "@/components/forget_password/ForgetPassword_1_b";
import FormLogin_1_d from "@/components/login/FormLogin_1_d";
import FormLogin_2_a from "@/components/login/FormLogin_2_a";
import FormLogin_XMEye from "@/components/login/FormLogin_XMEye";
import Login_1_a from "@/components/login/Login_1_a";
import RegisterForm_1_e from "@/components/register/RegisterForm_1_e";
import VerificationForm_1_c from "@/components/verification/VerificationForm_1_c";
import TikiOk from "@/components/tiki/TikiOk";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import Login from "@/components/login/login";
export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Login_1_a/> */}
      {/* <FormLogin_XMEye/> */}
      {/* <ForgetPassword_1_b/> */}
      {/* <RegisterForm_1_e/> */}
      {/* <VerificationForm_1_c/> */}
      <TikiOk/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
