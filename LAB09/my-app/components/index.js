import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from "./GetStarted.js"
import ListBikes from "./ListBikes.js"
import BikeDetail from "./BikeDetail.js"
import AddBike from "./AddBike.js";
export default function index() {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName = "GetStarted"
       screenOptions={{
        tabBarStyle: { display: 'none' }, // Ẩn tab bar
        headerShown: false, // Ẩn header
      }}>
          <Tab.Screen
              name = "GetStarted"
              component={GetStarted}
          />
          <Tab.Screen
              name = "ListBikes"
              component={ListBikes}
          />
          <Tab.Screen
              name = "BikeDetail"
              component={BikeDetail}
          />
          <Tab.Screen
              name = "AddBike"
              component={AddBike}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
