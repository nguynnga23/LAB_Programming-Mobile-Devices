import { Text, SafeAreaView, StyleSheet } from 'react-native';
import BikeShop from './components/index.js'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddBike from './components/AddBike.js';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <BikeShop/>
        {/* <AddBike/> */}
      </SafeAreaView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
