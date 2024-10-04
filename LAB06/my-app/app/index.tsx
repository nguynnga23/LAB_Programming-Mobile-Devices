import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListBikes from "../components/lab-05-b/ListBikes.js"
import BikeDetail from "../components/lab-05-b/BikeDetail.js"

import Index1 from "../components/lab-04-a/Index.js"
import Index2 from "../components/lab-05-b/Index.js"

import GetStarted from "../components/lab-05-b/GetStarted.js"
import { useNavigation } from "expo-router";


const Stack = createStackNavigator();
const DefaultScreen = () =>{
  const navigation = useNavigation();
  return(
    <View style={{
      flex: 1,
      alignItems: "center",
      padding: 15,
      justifyContent: "center"
    }}>
        <TouchableOpacity style={{
          backgroundColor: "pink",
          height: 40,
          width: "100%",
          borderRadius: 30,
          justifyContent: "center",
          marginVertical: 10
        }} onPress={()=>navigation.navigate('lab04')}>
          <Text style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
            color: "#fff"
          }}>Lab_04_a</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: "pink",
          height: 40,
          width: "100%",
          borderRadius: 30,
          justifyContent: "center",
          marginVertical: 10

        }} onPress={()=>navigation.navigate('lab05')}>
          <Text style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 700,
            color: "#fff"
          }}>Lab_05_b</Text>
      </TouchableOpacity>
    </View>
  )
}
export default function Page() {
  return (
    <NavigationContainer  independent={true} >
      <Stack.Navigator>
        <Stack.Screen
          name="menu"
          component={DefaultScreen}>
        </Stack.Screen>

        <Stack.Screen
          name="lab04"
          component={Index1}>
        </Stack.Screen>

        <Stack.Screen
          name="lab05"
          component={Index2}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
