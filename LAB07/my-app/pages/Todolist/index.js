import {View, Text, StyleSheet} from 'react-native'
import {useState, useEffect} from "react"
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
        // { id: '1', job: 'To check email' },
        // { id: '2', job: 'UI task web page' },
        // { id: '3', job: 'Learn javascript basic' },
        // { id: '4', job: 'Learn HTML Advance' },
        // { id: '5', job: 'Medical App UI' },
        // { id: '6', job: 'Learn Java' },
        // { id: '7', job: 'Learn Java' }
    ]);
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://6710f8e94eca2acdb5f30372.mockapi.io/api/todo');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []); // Chạy chỉ một lần khi component mount
    
    // const addTodo = (job) =>{
    //     setTodos(preTodos => [...preTodos, {id: String(preTodos.length + 1), job}]);
    // }

    // const editTodo = (oldJob, newJob) => {
    //     setTodos(preTodos => preTodos.map(todo => todo.job === oldJob ? {...todo, job: newJob} : todo));
    // }
    const addTodo = async (newJob) => {
        try {
          const response = await fetch('https://6710f8e94eca2acdb5f30372.mockapi.io/api/todo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ job: newJob }),
          });
          const data = await response.json();
          setTodos([...todos, data]);
          setNewJob('');
        } catch (error) {
          console.error(error);
        }
      };
    
      const editTodo = async (id, oldJob, newJob) => {
        try {
          const response = await fetch('https://6710f8e94eca2acdb5f30372.mockapi.io/api/todo/${id}', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newJob: newJob }),
          });
          const data = await response.json();
          console.log(data);
          // Cập nhật danh sách todos sau khi chỉnh sửa
          const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, job: newJob } : todo
          );
          setTodos(updatedTodos);
        } catch (error) {
          console.error(error);
        }
      };
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