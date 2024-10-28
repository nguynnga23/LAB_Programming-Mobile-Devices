import { Text, SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './components/index.js'
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TodoList/>
      </SafeAreaView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
