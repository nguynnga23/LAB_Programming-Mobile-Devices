import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Screen_01_GetStarted from './components/Screen_01_GetStarted';
import Screen_02_Register from './components/Screen_02_Register';
import Screen03_Login from './components/Screen_03_Login';
import Screen04_ProductDetail from './components/Screen_04_ProductDetail';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name='GetStarted' component={Screen_01_GetStarted}/>
          <Stack.Screen name='Register' component={Screen_02_Register}/>
          <Stack.Screen name='Login' component={Screen03_Login}/>
          <Stack.Screen name='ProductDetail' component={Screen04_ProductDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
