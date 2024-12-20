import React, { use, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes, setCurrentItem } from "../redux/bikesSlice"; // Import action fetchBikes từ bikesSlice

const Item = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () =>{
      dispatch(setCurrentItem(item));
      navigation.navigate("BikeDetail");
  }
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7BA8326",
        borderRadius: 10,
        margin: 7,
        width: 200,
      }}
      onPress={handlePress}
    >
      <Image
        style={{
          position: "absolute",
          top: 5,
          left: 15,
        }}
        source={require("../assets/heart.png")}
      />
      <Image
        style={{
          margin: 15,
          width: 150,
          height: 170
        }}
        source={{uri:item.imgPath}}
      />
      <Text
        style={{
          padding: 10,
          fontSize: 20,
          fontWeight: "400",
          color: "#00000099",
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 20,
          fontWeight: "400",
        }}
      >
        <Image source={require("../assets/$.png")} />
        {item.price}
      </Text>
    </TouchableOpacity>
  );
};

export default function ListBikes() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.bikes);

  // Gọi fetchBikes để lấy dữ liệu khi component được render lần đầu
  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  // Xử lý loading và lỗi nếu có
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
          <Text style={{ fontSize: 25, fontWeight: "700", color: "#E94141" }}>
            The world’s Best Bike
          </Text>
          <TouchableOpacity  onPress={()=>navigation.navigate("AddBike")} style={[styles.buttonFilter, {backgroundColor: "#E94141"}]} >
            <Text style={[styles.labelButton, {color: "white"}]}>Add a bike</Text>
          </TouchableOpacity>
        </View>
       
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.labelButton}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.labelButton}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFilter}>
            <Text style={styles.labelButton}>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 5 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item item={item} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonFilter: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E9414187",
    width: 99,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    fontSize: 20,
    fontWeight: "400",
    color: "#E94141",
  },
});
