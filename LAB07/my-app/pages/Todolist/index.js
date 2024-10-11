import {View, Text, StyleSheet} from 'react-native'
import {useState} from "react"
import Login from "./Login.js"
import AddTodo from './AddTodo.js';
import ListTodo from './ListTodo.js';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Header from "../../components/Todolist/Header.js"
const Stack = createNativeStackNavigator();
const TodoApp = () => {
    const [name, setName] = useState("");
    const [todos, setTodos] = useState([
        { id: '1', job: 'To check email' },
        { id: '2', job: 'UI task web page' },
        { id: '3', job: 'Learn javascript basic' },
        { id: '4', job: 'Learn HTML Advance' },
        { id: '5', job: 'Medical App UI' },
        { id: '6', job: 'Learn Java' },
        { id: '7', job: 'Learn Java' }
    ]);
    const addTodo = (job) =>{
        setTodos(preTodos => [...preTodos, {id: String(preTodos.length + 1), job}]);
    }

    const editTodo = (oldJob, newJob) => {
        setTodos(preTodos => preTodos.map(todo => todo.job === oldJob ? {...todo, job: newJob} : todo));
    }
    return (
       <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component= {props => <Login {...props} setName={setName}/>}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="AddTodo" 
                component= {props => <AddTodo {...props} addTodo={addTodo} editTodo={editTodo} />}
                options={{
                    headerTitle: () => <Header title={name}/>
                }}
            />
            <Stack.Screen 
                name="ListTodo" 
                component={props => <ListTodo {...props} todos={todos} setTodos={setTodos} />}  
                options={{
                        headerTitle: () => <Header title={name}/>
                    }}
            />
        </Stack.Navigator>
       </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default TodoApp;