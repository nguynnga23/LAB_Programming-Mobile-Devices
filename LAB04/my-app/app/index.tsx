import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TikiOk from "../components/tiki/TikiOk"
import PasswordGenerator_2_c from "../components/password/PasswordGenerator_2_c"
export default function Index() {
  return (
    <View style={styles.container}>
      <PasswordGenerator_2_c/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
