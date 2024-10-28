import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../redux/todosSlice.js'; // Đảm bảo đường dẫn này chính xác

const AddTodo = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {id, job, edit, title } = route.params || {};
    const [inputJob, setInputJob] = useState(job || '');
    const dispatch = useDispatch(); // Khởi tạo useDispatch

    const handleFinish = () => {
        if (edit) {
            dispatch(editTodo({ id: id, job: inputJob })); // Cập nhật logic để truyền id
        } else {
            dispatch(addTodo({ id: new Date().getTime().toString(), job: inputJob })); // Thêm id mới cho todo
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title || 'Add your job'}</Text>
            </View>

            <View style={styles.inputWrapper}>
                <View style={styles.inputBorder}>
                    <Image source={require("../assets/List.png")} />
                    <TextInput
                        style={styles.input}
                        placeholder='Input your job'
                        value={inputJob}
                        onChangeText={setInputJob}
                    />
                </View>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleFinish}
                >
                    <Text style={styles.textButton}>Finish</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.image}>
                <Image source={require("../assets/Logo.png")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: "#fff"
    },
    titleWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textTransform: "uppercase",
        fontSize: 30,
        fontWeight: '700'
    },
    inputWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputBorder: {
        borderWidth: 1,
        borderColor: "gray",
        width: "100%",
        height: 50,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: "100%",
        width: "80%",
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '600',
        color: "gray",
        padding: 5,
        borderWidth: 0,
    },
    buttonWrapper: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        backgroundColor: "#00BDD6",
        borderRadius: 12,
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 25,
        fontWeight: '700',
        paddingBottom: 10,
        textTransform: "uppercase"
    },
    image: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default AddTodo;
