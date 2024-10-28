import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native'

const Item = ({id, job}) =>{
    const navigation = useNavigation();
    return(
        <View style={styles.itemWrapper}>
            <View style={styles.textWrapper}>
                <View style={styles.done}>
                    <TouchableOpacity>
                        <Image source={require("../assets/Done.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemValue}>
                    <Text style={styles.itemText}>{job}</Text>
                </View>
            </View>
            <View style={styles.edit}>
                <TouchableOpacity  
                    onPress={() => {
                    navigation.navigate('AddTodo', {id: id, job: job, edit: true, title: "edit your job" })}}
                >
                    <Image source={require("../assets/Edit.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const ListTodo = ({todos}) => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredTodos = todos.filter(todo => todo.job.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <View style = {styles.container}>
            <View style={styles.inputWrapper}>
                <View style={styles.inputBorder}>
                    <Image source={require("../assets/Search.png")}/>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Search'
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                    />
                </View>
            </View>
            <View style={styles.listTodo}>
                <ScrollView>
                    <FlatList
                        data={filteredTodos}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <Item id = {item.id} job = {item.job}/>}
                    />
                </ScrollView>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>navigation.navigate("AddTodo")}
                >
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: "#fff"
    },
    inputWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputBorder:{
        borderWidth: 1,
        borderColor: "gray",
        width: "100%",
        height: 50,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        height: "100%",
        width: "80%",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 600,
        color: "gray",
        padding: 5,
        borderWidth: 0,
    },
    listTodo:{
        flex: 4,
        marginBottom: 20
    },
    itemWrapper:{
        width: "100%",
        height: 60,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#DEE1E678",
        marginVertical: 10,
        // Shadow for iOS
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 10 },
        // shadowOpacity: 0.2,
        // shadowRadius: 15,

        // Shadow for Android
        elevation: 5,
    },
    textWrapper:{
        flexDirection: "row"
    },

    done:{
        marginRight: 15,
        width: 30
    },
    itemValue:{

    },
    itemText:{
        fontWeight: 700,
        fontSize: 18,
        width: 200
    },
   
    buttonWrapper:{
        flex: 1,
        alignItems: "center"
    },
    button:{
        backgroundColor: "#00BDD6",
        borderRadius: 100,
        width: 70,
        height: 70,
        alignItems:"center",
        justifyContent: "center"
    },
    textButton:{
        color: "#fff",
        fontSize: 50,
        paddingBottom: 10
    },
})
export default ListTodo;