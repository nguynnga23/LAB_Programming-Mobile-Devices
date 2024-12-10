import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default function BikeDetail(){
 const navigation = useNavigation();
 const item = useSelector((state) => state.bikes?.currentItem);
 if(!item){
   return <Text>No item</Text>
 }
 return(
   <ScrollView>
    <View style={{
      flex: 1,
      margin: 15

    }}> 
      <View style={{
         flex: 1,
         backgroundColor: "#E941411A",
         justifyContent: "center",
         alignItems: "center",
         borderRadius: 10,
      }}>
         {/* <Image source={require("../assets/bione-removebg-preview.png")}/> */}
         <Image style={{width: 300, height: 350}} source={{uri:item.imgPath}}/>
      </View>
      <View style={{
         flex: 1,
         // justifyContent: "space-between"
      }}>
         {/* Name & price */}
         <View style={{
         }}>
            <Text style={{
               fontSize: 35,
               fontWeight: 500,
               paddingVertical: 15
            }}>{item.name}</Text>

            <Text style={{
               fontSize: 25,
               color: "#00000096",
               fontWeight: 600
            }}>15% OFF I {item.price} <Text style={{
               color: "#000",
               textDecorationLine: "line-through",
               paddingLeft: 30
            }}>449$</Text></Text>
         </View>
         {/* Description */}
         <View style={{
         }}>
            <Text style={{
               fontSize: 25,
               fontWeight: 500,
               marginVertical: 20
            }}>Description</Text>
            <Text style={{
               fontSize: 22,
               fontWeight: 400,
               color: "#00000091",
               marginVertical: 20

            }}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
         </View>
         {/* Cart button */}
         <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30
         }}>
            <Image source={require("../assets/akar-icons_heart.png")}/>
            <TouchableOpacity style={{
               backgroundColor: "#E94141",
               height: 60,
               borderRadius: 30,
               justifyContent: "center",
               width: "80%"
            }}
               onPress={()=>{
                  navigation.navigate("ListBikes");
               }}
            
            >
               <Text style={{
                  color: "#fff",
                  fontSize: 25,
                  textAlign: "center"
               }}>Add to card</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
    </ScrollView>
 )
}

