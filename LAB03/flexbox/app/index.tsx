import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          justifyContent: 'flex-end'
      </Text>
      <Image source={{uri:"https://picsum.photos/200"}} style={{height:150, width:150}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title:{
    fontSize: 20,
    fontWeight: 500,
  }
});