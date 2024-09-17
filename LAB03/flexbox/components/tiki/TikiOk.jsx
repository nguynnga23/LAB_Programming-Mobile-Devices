import React from "react";
import {useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';


const TikiOk = () => {
    const [counter, setCounter] = useState(0);
    const [voucher, setVoucher] = useState("");
    const randomVoucher = () =>{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let voucher = "";
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            voucher += characters[randomIndex] || '';  // Đảm bảo ký tự hợp lệ
        }
        return voucher;
    }

    const handleGenerateVoucher = () =>{
        const newVoucher = randomVoucher();
        setVoucher(newVoucher);
    }

    const [price, setPrice] = useState(141800);
    const calculateTotalPrice = () =>{
        return counter * price;
    }
    return (
        <View style = {styles.container}>
            {/* product detail */}
            <View style = {styles.productDetailWrapper}>
                {/* product */}
                <View style = {styles.product}>
                    <View style = {styles.imageProduct}>
                        <Image 
                        style={styles.eyeballLogo}
                        source={require('../../assets/images/book.png')}
                        />
                    </View>

                    <View style = {styles.inforProduct}>
                        <Text style = {styles.name}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style = {styles.name}>Cung cấp bởi Tiki Trading</Text>
                        <Text style = {styles.priceText}>{price.toLocaleString()} đ</Text>
                        <Text style = {styles.subPriceText}>141.800 đ</Text>
                        <View style = {styles.quantityProduct}>
                            <View style = {styles.quantityButton}>
                                <TouchableOpacity style = {styles.buttonReduce}
                                onPress = {() => setCounter(counter - 1)}>
                                    <Text style = {styles.textButton}>-</Text>
                                </TouchableOpacity>
                                <View style = {styles.textQuantityWrapper}>
                                    <Text style = {styles.textQuantity}>{counter}</Text>
                                </View>
                                <TouchableOpacity style = {styles.buttonIncrease}
                                onPress = {() => setCounter(counter + 1)}>
                                    <Text style = {styles.textButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {styles.linkText}>
                                <Text style = {styles.linkText}>Mua sau</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* voucher */}
                <View style = {styles.voucher}>
                    <View style = {styles.savedVoucher}>
                        <Text style = {styles.name}>Mã giảm giá đã lưu</Text>
                        <Text style = {styles.linkText}>Xem tại đây</Text>
                    </View>

                    <View style = {styles.applyVoucher}>
                        <View style = {styles.inputVoucher}>
                            <View style = {styles.yellowBox}></View>
                            <TextInput
                                style={styles.input}
                                placeholder={voucher}
                            />
                        </View>

                        <View style = {styles.buttonVoucherWrapper}>
                            <TouchableOpacity style = {styles.buttonVoucher}
                            onPress={handleGenerateVoucher}>
                                <Text style = {styles.textButtonVoucher}>Áp dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            {/* price */}
            <View style = {styles.priceWrapper}>
                <View style = {styles.giftCode}>
                    <Text style = {styles.name}>
                        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                        <Text style = {styles.linkText}>  Nhập tại đây?</Text>
                    </Text>
                </View>

                <View style = {styles.totalPrice}>
                    <Text style={styles.textTotalPrice}>Tạm tính</Text>
                    <Text style={styles.priceText}>{calculateTotalPrice().toLocaleString()} đ</Text>
                </View>
                
            </View>
            {/* payment */}
            <View style = {styles.paymentWrapper}>
                <View style = {styles.payment}>
                    <Text style={styles.textPayment}>Thành tiền</Text>
                    <Text style={styles.textPrice}>{calculateTotalPrice().toLocaleString()} đ</Text>
                </View>

                <View style = {styles.buttonPaymentWrappper}>
                    <TouchableOpacity style = {styles.buttonPayment}>
                        <Text style = {styles.textButtonPayment}>Tiến hành đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            
    );
}
  
const styles = StyleSheet.create({
container:{
  flex: 1,
  paddingVertical: 25,
  paddingHorizontal: 20
},
// product detail
productDetailWrapper:{
    flex: 2,
    justifyContent: "space-between"
    
},

product:{
    justifyContent: "space-between",
    flexDirection: "row"

},
imageProduct:{
    flex: 1

},
inforProduct:{
    flex: 2,

    justifyContent: "space-between"
},

name:{
    fontWeight: 700,
    fontSize: 12
},
priceText:{
    fontWeight: 700,
    fontSize: 18,
    color: "#EE0D0D"

},
subPriceText:{
    fontWeight: 700,
    fontSize: 12,
    color: "#808080",
    textDecorationLine: "line-through"
},
quantityProduct:{
    flexDirection: "row",
    justifyContent: "space-between"
},
quantityButton:{
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
},
buttonReduce:{
    width: 20,
    height: "100%",
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
},
buttonIncrease:{
    width: 20,
    height: "100%",
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
},
textButton:{
    textAlign: "center",
    paddingBottom: 4,
    fontWeight: 800,
},
textQuantityWrapper:{
    justifyContent: "center",
    alignItems: "center"
},
textQuantity:{
    fontSize: 15,
    fontWeight: 700
},
linkText:{
    fontSize: 12,
    fontWeight: 700,
    color: "#134FEC"
},

voucher: {
    justifyContent: "space-around",
    height: "40%"
},
savedVoucher:{
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between"
},

applyVoucher:{
    flexDirection: "row",
    justifyContent: "space-between"
},
inputVoucher:{
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 2,
    width: 208,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
},
input:{
    fontSize: 18,
    fontWeight: 700,
    width: "80%",
    paddingVertical: 10,
    paddingHorizontal: 5
},
yellowBox:{
    height: 16,
    width: 32,
    backgroundColor: "#F2DD1B",
},
buttonVoucherWrapper:{
},
buttonVoucher:{
    width: 99,
    height: 45,
    borderRadius: 2,
    backgroundColor: "#0A5EB7",
    justifyContent: "center",
    alignItems: "center",
},
textButtonVoucher:{
    fontSize: 20,
    fontWeight: 700,
    color: "#fff"
},
// price
priceWrapper:{
    flex: 1,
    justifyContent: "space-around"
},
giftCode:{

},
totalPrice:{
    flexDirection: "row",
    justifyContent: "space-between"
},
textTotalPrice:{
    fontWeight: 700,
    fontSize: 18
},
// payment
paymentWrapper:{
    flex: 2,
    justifyContent: "flex-end",
},

payment:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20
},
textPayment:{
    fontWeight: 700,
    fontSize: 18,
    color: "#808080"
},
textPrice:{
    fontWeight: 700,
    fontSize: 20,
    color: "#EE0D0D"
},
buttonPaymentWrappper:{

},
buttonPayment:{
    width: "100%",
    height: 45,
    backgroundColor: "#E53935",
    justifyContent: "center",
},
textButtonPayment:{
    fontWeight: 700,
    fontSize: 20,
    textTransform: "uppercase",
    color: "#fff",
    textAlign: "center",
    borderRadius: 2
}
});

export default TikiOk