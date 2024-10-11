import {View, Text, StyleSheet} from 'react-native'
import TodoList from '../pages/Todolist/index.js'
const App = () => {
    return (
        <View style={styles.container}>
            {/* <Login/> */}
            {/* <AddTodo/> */}
            {/* <ListTodo/> */}
            {/* <ListDonuts/> */}
            {/* <DonutDetail/> */}
            <TodoList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default App;