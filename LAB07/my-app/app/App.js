import {View, Text, StyleSheet} from 'react-native'
import Login from "../pages/Todolist/Login.js"
import AddTodo from '../pages/Todolist/AddTodo.js';
import ListTodo from '../pages/Todolist/ListTodo.js';
import ListDonuts from '../pages/Donut/ListDonuts.js';
import DonutDetail from '../pages/Donut/DonutDetail.js';
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