// TodoApp.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login.js";
import AddTodo from './AddTodo.js';
import ListTodo from './ListTodo.js';
import Header from "./Header.js";

const Stack = createNativeStackNavigator();

const TodoApp = () => {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Login" 
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="AddTodo" 
            component={AddTodo}
            options={{ headerTitle: () => <Header title="Add Todo" /> }}
          />
          <Stack.Screen 
            name="ListTodo" 
            component={ListTodo}
            options={{ headerTitle: () => <Header title="Todo List" /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default TodoApp;
