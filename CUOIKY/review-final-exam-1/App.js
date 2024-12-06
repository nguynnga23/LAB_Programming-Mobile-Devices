import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Screen_01_GetStarted from './components/Screen_01_GetStarted';
import Screen_02_Register from './components/Screen_02_Register';
import Screen03_Login from './components/Screen_03_Login';
import Screen04_ProductDetail from './components/Screen_04_ProductDetail';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Screen_02_Register />
    </SafeAreaView>
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
