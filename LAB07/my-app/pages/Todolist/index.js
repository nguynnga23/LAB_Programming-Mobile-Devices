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
    return (
       <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component= {props => <Login {...props} setName={setName}/>}
                options={{
                    headerShown: false,
                    // params: {setName}
                }}
            />
            <Stack.Screen 
                name="AddTodo" 
                component={AddTodo}
                options={{
                    headerTitle: () => <Header title={name}/>
                }}
            />
            <Stack.Screen 
                name="ListTodo" 
                component={ListTodo}  
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