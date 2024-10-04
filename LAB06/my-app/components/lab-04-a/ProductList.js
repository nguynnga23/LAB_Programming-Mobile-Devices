import {View, Text, Image, ScrollView, FlatList} from "react-native"

const DATA = [
    {
      id: "1",
      image_path: require("../../assets/images/lab04_a/giacchuyen 1.png"),
      product_name: "Cáp chuyển từ Cổng USB sang PS2...",
      rate_path: require("../../assets/images/lab04_a/votestar.png"),
      price: "69.900 đ",
      discount: "-39%"
    },
    {
        id: "2",
        image_path: require("../../assets/images/lab04_a/daynguon 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "3",
        image_path: require("../../assets/images/lab04_a/dauchuyendoipsps2 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "4",
        image_path: require("../../assets/images/lab04_a/carbusbtops2 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "5",
        image_path: require("../../assets/images/lab04_a/daucam 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "6",
        image_path: require("../../assets/images/lab04_a/giacchuyen 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "7",
        image_path: require("../../assets/images/lab04_a/giacchuyen 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "8",
        image_path: require("../../assets/images/lab04_a/giacchuyen 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "9",
        image_path: require("../../assets/images/lab04_a/giacchuyen 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
    {
        id: "10",
        image_path: require("../../assets/images/lab04_a/giacchuyen 1.png"),
        product_name: "Cáp chuyển từ Cổng USB sang PS2...",
        rate_path: require("../../assets/images/lab04_a/votestar.png"),
        price: "69.900 đ",
        discount: "-39%"
    },
]

const Item = ({image_path, product_name, rate_path, price, discount}) => {
    return (
        <View style={{
            width: "50%",
            padding: 10,
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#C4C4C4"
        }}>
            <Image style={{
                width: "100%"
            }} source={image_path}/>
            <Text style={{
                fontSize: 12,
                paddingVertical: 10
            }}>{product_name}</Text>
            <Image style={{
                paddingVertical: 10
            }} source={rate_path}/>
            <Text style={{
                fontSize: 12,
                fontWeight: 700,
                paddingVertical: 10
            }}>{price} {discount}</Text>
        </View>
    )
}

export default function ProductList(){
    return(
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center"
            }}>
              <ScrollView/>
                <FlatList
                  data={DATA}
                  renderItem={({item}) => <Item product_name={item.product_name} image_path={item.image_path} rate_path={item.rate_path} price={item.price} discount={item.discount}/>}
                  keyExtractor={item => item.id}
                  numColumns={2}
                />
              {/* </ScrollView> */}
          </View>
    )
};