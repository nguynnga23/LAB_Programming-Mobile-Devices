import { Text, View, Image, StyleSheet, Button } from "react-native";
import Login from "@/components/login/login";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.slogan}>
        <Text style={styles.title}>GROW <br/> YOUR BUSINESS</Text>
      </View>
      <View style={styles.slogan}>
        <Text style={styles.subtitle}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="LOGIN" color="#E3C000"/>
        <Button title="SIGN UP" color="#E3C000"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : "#00CCF9",
    alignItems: "center",
    justifyContent: "space-around"
  },
  logo:{
    width: 140,
    height: 140,
    borderWidth: 15,
    borderRadius: 100,
    
  },
  slogan:{
    width: "80%",
  },
  title:{
    textAlign: "center",
    fontSize: 25,
    fontWeight: 700
  },
  subtitle:{
    textAlign: "center",
    fontSize: 15,
    fontWeight: 700
  },
  buttonWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
});