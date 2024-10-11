import {View, Text, StyleSheet} from 'react-native'
import Login from "./Login.js"
import AddTodo from './AddTodo.js';
import ListTodo from './ListTodo.js';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Header from "../../components/Todolist/Header.js"
const Stack = createNativeStackNavigator();
const TodoApp = () => {
    return (
       <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerShown: false 
                }}
            />
            <Stack.Screen 
                name="AddTodo" 
                component={AddTodo}
                options={{
                    headerTitle: () => <Header/>
                }}
            />
            <Stack.Screen 
                name="ListTodo" 
                component={ListTodo}  
                options={{
                        headerTitle: () => <Header/>
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