import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import GetStarted from "../components/lab-05-b/GetStarted.js"
import ListBikes from "../components/lab-05-b/ListBikes.js"
import BikeDetail from "../components/lab-05-b/BikeDetail.js"

export default function Page() {
  return (
    <View style={{flex: 1}}>
      {/* <GetStarted/> */}
      <ListBikes/>
      {/* <BikeDetail/> */}
    </View>
  );
}
