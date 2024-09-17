import react from "react"
import {useState} from "react"
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import { CheckBox } from 'react-native-elements';
const PasswordGenerator_2_c = () =>{
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(0);
    const generatePassword = (lengthh) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex] || '';  // Đảm bảo ký tự hợp lệ
        }
        return password;
    }

    const handleGeneratePassword = () =>{
        const newPassword = generatePassword(Number(length));
        setPassword(newPassword);
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                {/* Header Title */}
                <View style = {styles.header}>
                    <Text style = {styles.textHeader}>password</Text>
                    <Text style = {styles.textHeader}>generate</Text>
                </View>
                {/* Show Password */}
                <View style = {styles.showPassword}>
                    <TextInput style={styles.inputPassword} placeholder={password} editable={false}/>
                </View>
                {/* Condition fields */}
                <View style = {styles.conditionFields}>
                    <View style = {styles.field}>
                        <Text style = {styles.text}>Password length</Text>
                        <TextInput style={styles.inputLength}
                        value={String(length)}
                        onChangeText={text => setLength(text)}
                        keyboardType="numeric"
                        />
                    </View>
                    <View style = {styles.field}>
                        <Text style = {styles.text}>Include lower case letters</Text>
                        <CheckBox
                            containerStyle={styles.checkBox} // Màu nền của container
                            checked={checked}
                            onPress={toggleCheckbox}
                            checkedIcon="check-square" // Thay đổi biểu tượng đã chọn
                            uncheckedIcon="square-o" // Thay đổi biểu tượng chưa chọn
                            checkedColor="pink" // Màu của biểu tượng khi được chọn
                            uncheckedColor="grey" // Màu của biểu tượng khi chưa được chọn
                        />
                    </View>
                    <View style = {styles.field}>
                        <Text style = {styles.text}>Include upcase letters</Text>
                        <CheckBox
                            containerStyle={styles.checkBox} // Màu nền của container
                            checked={checked}
                            onPress={toggleCheckbox}
                            checkedIcon="check-square" // Thay đổi biểu tượng đã chọn
                            uncheckedIcon="square-o" // Thay đổi biểu tượng chưa chọn
                            checkedColor="pink" // Màu của biểu tượng khi được chọn
                            uncheckedColor="grey" // Màu của biểu tượng khi chưa được chọn
                        />
                    </View>
                    <View style = {styles.field}>
                        <Text style = {styles.text}>Include number</Text>
                        <CheckBox
                            containerStyle={styles.checkBox} // Màu nền của container
                            checked={checked}
                            onPress={toggleCheckbox}
                            checkedIcon="check-square" // Thay đổi biểu tượng đã chọn
                            uncheckedIcon="square-o" // Thay đổi biểu tượng chưa chọn
                            checkedColor="pink" // Màu của biểu tượng khi được chọn
                            uncheckedColor="grey" // Màu của biểu tượng khi chưa được chọn
                        />
                    </View>
                    <View style = {styles.field}>
                        <Text style = {styles.text}>Include special symbol</Text>
                        <CheckBox
                            containerStyle={styles.checkBox} // Màu nền của container
                            checked={checked}
                            onPress={toggleCheckbox}
                            checkedIcon="check-square" // Thay đổi biểu tượng đã chọn
                            uncheckedIcon="square-o" // Thay đổi biểu tượng chưa chọn
                            checkedColor="pink" // Màu của biểu tượng khi được chọn
                            uncheckedColor="grey" // Màu của biểu tượng khi chưa được chọn
                        />
                    </View>

                </View>
                {/* Button Generate */}
                <View style = {styles.buttonGenerateWrapper}>
                <TouchableOpacity style = {styles.buttonGenerate}
                onPress={handleGeneratePassword}>
                        <Text style = {styles.textButtonGenerate}>generate password</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#3B3B98"
    },
    wrapper:{
        flex: 1,
        backgroundColor: "#23235B",
        margin: 20,
        borderRadius: 15,
        padding: 15
    },
    // Header Title
    header:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textHeader:{
        fontSize: 25,
        fontWeight: 700,
        color: "#fff",
        textAlign: "center",
        textTransform: "uppercase"
    },
    // Show Password
    showPassword:{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        // alignItems: "center"
    },
    inputPassword:{
        height: 55,
        backgroundColor: "#151537",
        fontSize: 18,
        fontWeight: 700,
        textAlign: "center",
        color: "green",
        borderRadius: 5

    },
    // Condition fields
    conditionFields:{
        flex: 3,
        justifyContent: "space-between"
    },
    field:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text:{
        fontSize: 18,
        fontWeight: 700,
        color: "#fff",
        // paddingTop: 10
    }, 
    checkBox:{
        backgroundColor: 'transparent', 
        padding: 0, 
        margin: 0, 
        marginRight: -5 
    },
    inputLength:{
        backgroundColor: "#fff",
        width: "40%",
        fontSize: 15,
        fontWeight: 500,
        textAlign: "center",
        borderRadius: 5
    },
    
    // Button Generate
    buttonGenerateWrapper:{
        flex: 1,
        justifyContent: "center"
    },
    buttonGenerate:{
        height: 55,
        backgroundColor: "#3B3B98",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    textButtonGenerate:{
        fontSize: 18,
        fontWeight: 700,
        color: "#fff",
        textTransform: "uppercase"
    },

});

export default PasswordGenerator_2_c
