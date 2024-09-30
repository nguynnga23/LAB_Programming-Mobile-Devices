import { Text, View, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";

const DATA = [
  {
    id: "1",
    image_path: require("../assets/images/lab04_a/ca_nau_lau.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "2",
    image_path: require("../assets/images/lab04_a/ga_bo_toi.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "3",
    image_path: require("../assets/images/lab04_a/xa_can_cau.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "4",
    image_path: require("../assets/images/lab04_a/do_choi_dang_mo_hinh.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "5",
    image_path: require("../assets/images/lab04_a/lanh_dao_gian_don.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "6",
    image_path: require("../assets/images/lab04_a/hieu_long_con_tre.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "7",
    image_path: require("../assets/images/lab04_a/hieu_long_con_tre.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  },
  {
    id: "8",
    image_path: require("../assets/images/lab04_a/hieu_long_con_tre.png"),
    product_name: "Ca nấu lẩu, nấu mì mini..",
    shop_name: "Shop Devang"
  }
]

const Item = ({ product_name, image_path, shop_name })=>(
  <View style={{
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff"
  }}>
    <View>
      <Image source={image_path} style={{}} />
    </View>
    <View style={{
      justifyContent: "center"
    }}>
      <Text style={{}}>{product_name}</Text>
      <Text style={{color: "#E83030"}}>{shop_name}</Text>
    </View>
    <View style={{
      justifyContent: "center"
    }}>
      <TouchableOpacity style={{
        width: 88,
        height: 38,
        backgroundColor: "#F31111",
        justifyContent: "center"
      }}>
        <Text style={{
          color: "#fff",
          textAlign: "center"
        }}>Chat</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function Index() {
  return (
    <SafeAreaView style={{
      flex: 1,
      }}>
      <Text style={{
        flex: 1,
        textAlign: "center",
      }}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại Chat với shop!</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item product_name={item.product_name} image_path={item.image_path} shop_name={item.shop_name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
