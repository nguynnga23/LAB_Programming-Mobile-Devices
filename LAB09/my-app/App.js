import { Text, SafeAreaView, StyleSheet } from 'react-native';
import BikeShop from './components/index.js'
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <BikeShop/>
      </SafeAreaView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
