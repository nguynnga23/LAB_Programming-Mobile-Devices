import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import ChatHome from "../components/ChatHome.js"
import ProductList from "../components/ProductList.js"
import Header from "../components/common/Header.js"
export default function Page() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1BA9FF', // Màu nền của tabBar
          borderTopWidth: 0, // Bỏ viền trên của tabBar
          height: 45
        },
        tabBarActiveTintColor: 'black', // Màu khi tab được chọn
        tabBarInactiveTintColor: '#fff', // Màu khi tab không được chọn
      }}>
        <Tab.Screen 
          name = "Home"
          component={ChatHome}
          options={({navigation})=>({
            header: () => <Header navigation={navigation} title="Chat"/>,
            tabBarLabel: '', // Tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={require('../assets/images/lab04_a/Group 10.png')}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
            tabBarBadge: 3, // Hiển thị số thông báo trên tab
           })}
        />

        <Tab.Screen 
          name = "ProductList"
          component={ProductList}
          options={({navigation})=>({
            header: () => <Header navigation={navigation} title="Chat"/>,
            tabBarLabel: '', // Tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={require('../assets/images/lab04_a/Vector (Stroke).png')}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
           })}
        />

        <Tab.Screen 
          name = "Box"
          component={ProductList}
          options={({navigation})=>({
            header: () => <Header navigation={navigation} title="Chat"/>,
            tabBarLabel: '', // Tên của tab
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={require('../assets/images/lab04_a/Vector 1 (Stroke).png')}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),

           })}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
