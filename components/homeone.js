import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Animated,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Header, Icon, withTheme } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import { useRoute } from "@react-navigation/native";
import BottomNavigator from "./BottomNavigator";
import { SearchBar, card } from "react-native-elements";
import Modal from "react-native-modal";
import { Rating } from "react-native-elements";
import ImageSlider from "react-native-image-slider";
import imgone from "../assets/logo.png";
// import ImageCarousel from './assets';
import AntDesign from "react-native-vector-icons/AntDesign";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import Slider from "react-native-hook-image-slider";
import { FaIoxhost, FaXing } from "react-icons/fa";
const { width } = Dimensions.get("window");
// const { height } = Dimensions.get("window");
const height = width * 0.6;
const active = 0;

const images = [
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
];
const image = [
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/sydney-opera-house.jpg",
  "https://www.lambertgroupproductions.com/canyon/full_screen_background/images/bulletsFullWidth/03_bullets.jpg",
];
// import Icon from 'react-native-vector-icons/FontAwesome';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    name: "name1",
    imageuri: require("../assets/first.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    name: "name2",
    imageuri: require("../assets/sec.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    name: "name3",
    imageuri: require("../assets/third.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d33",
    title: "fourth Item",
    name: "name4",
    imageuri: require("../assets/fourth.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d34",
    title: "fifth Item",
    name: "name5",
    imageuri: require("../assets/fifth.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d38",
    title: "sixth Item",
    name: "name6",
    imageuri: require("../assets/sixth.png"),
  },
];
const DATATWO = [
  {
    id: 1,
    date: "date1",
    day: "day1",
  },
  {
    id: 2,
    date: "date2",
    day: "day1",
  },
  {
    id: 3,
    date: "date3",
    day: "day3",
  },
  {
    id: 4,
    date: "date4",
    day: "day4",
  },
  {
    id: 5,
    date: "date5",
    day: "day5",
  },
  {
    id: 6,
    date: "date6",
    day: "day6",
  },
];
const DATATHREE = [
  {
    id: "1",
    occasion: "occasion1",
  },
  {
    id: "2",
    occasion: "occasion2",
  },
  {
    id: "3",
    occasion: "occasion3",
  },
  {
    id: "4",
    occasion: "occasion4",
  },
  {
    id: "5",
    occasion: "occasion5",
  },
  {
    id: 6,
    occasion: "occasion6",
  },
];
const DATAFOUR = [
  {
    id: "data4.1",
    imaguri: require("../assets/sec.png"),
    name: "name1",
  },
  {
    id: "data4.2",
    imaguri: require("../assets/third.png"),
    name: "name1",
  },
];
const DATAFIVE = [
  [
    {
      id: "data1",
      imaguri: require("../assets/images1.png"),
      name: "name1",
    },
    {
      id: "data2",
      imaguri: require("../assets/images2.png"),
      name: "name1",
    },
  ],

  [
    {
      id: "data3",
      imaguri: require("../assets/images3.png"),
      name: "name1",
    },
    {
      id: "data4",
      imaguri: require("../assets/images4.png"),
      name: "name1",
    },
  ],
];

const DATASIX = [
  {
    id: "d1",
    img: require("../assets/example1.png"),
    name: "name1",
  },
  {
    id: "d2",
    img: require("../assets/example2.png"),
    name: "name1",
  },

  {
    id: "d3",
    img: require("../assets/example3.png"),
    name: "name1",
  },
  {
    id: "d4",
    img: require("../assets/example4.png"),
    name: "name1",
  },
  {
    id: "d3",
    img: require("../assets/example3.png"),
    name: "name1",
  },
  {
    id: "d4",
    img: require("../assets/example4.png"),
    name: "name1",
  },
];

function Card(props) {
  return (
    <View
      style={{
        backgroundColor: "#000000",
        width: 180,
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
        marginVertical: 10,
      }}
    >
      <Image source={{ uri: props.imaguri }} style={styles.imagurii}></Image>
    </View>
  );
}

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={{ uri: item.imageuri }} style={styles.img}></Image>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);
const Itemtwo = ({
  item,
  onPress,
  backgroundColor2,
  backgroundColor3,
  textColor1,
  textColor2,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemtwo]}>
    <View>
      <Text style={[styles.textday, backgroundColor2, textColor1]}>
        {item.day}
      </Text>
      <Text style={[styles.textdate, backgroundColor3, textColor2]}>
        {item.date}
      </Text>
    </View>
  </TouchableOpacity>
);

const Itemthree = ({ item, onPress, backgroundColor4, textColor3 }) => (
  <TouchableOpacity onPress={onPress} style={[styles.itemthree]}>
    <Text style={[styles.occasion, backgroundColor4, textColor3]}>
      {item.occasion}
    </Text>
  </TouchableOpacity>
);
const Itemfour = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.itemfour, backgroundColor]}
  >
    <Image source={{ uri: item.imaguri }} style={styles.imaguri}></Image>
  </TouchableOpacity>
);

const Itemsix = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.img2, backgroundColor]}>
    <View>
      <Image source={{ uri: item.img }} style={styles.uriimg2}></Image>
    </View>
  </TouchableOpacity>
);

const homeone = () => {
  
  toggleOpen = () => {};

  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "" : "";
    const color = item.id === selectedId ? "" : "";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  const renderItemtwo = ({ item }) => {
    const backgroundColor2 = item.id === selectedId2 ? "#fcb900" : "#b3b3b3";
    const color1 = item.id === selectedId2 ? "white" : "black";
    const backgroundColor3 = item.id === selectedId2 ? "#1273de" : "#5300eb";
    const color2 = item.id === selectedId2 ? "pink" : "yellow";

    return (
      <Itemtwo
        item={item}
        onPress={() => setSelectedId2(item.id)}
        backgroundColor2={{ backgroundColor2 }}
        backgroundColor3={{ backgroundColor3 }}
        textColor1={{ color1 }}
        textColor2={{ color2 }}
      />
    );
  };
  const renderItemthree = ({ item }) => {
    const backgroundColor4 = item.id === selectedId ? "#000000" : "#000000";
    const color3 = item.id === selectedId ? "black" : "white";
    return (
      <Itemthree
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor4={{ backgroundColor4 }}
        textColor3={{ color3 }}
      />
    );
  };

  const renderItemfour = ({ item }) => {
    const backgroundColor4 = item.id === selectedId ? "" : "";
    const color3 = item.id === selectedId ? "" : "";
    return (
      <Itemfour
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor4={{ backgroundColor4 }}
        textColor3={{ color3 }}
      />
    );
  };

  const renderItemfive = useCallback(({ item }) => {
    return (
      <View>
        <Card style={{ margin: 10 }} {...item[0]} />
        <Card style={{ margin: 10 }} {...item[1]} />
      </View>
    );
  }, []);

  const keyExtractor = useCallback((item) => {
    return item.id;
  }, []);

  const renderItemsix = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "" : "";
    const color = item.id === selectedId ? "" : "";
    return (
      <Itemsix
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };



  const [value, setValue] = React.useState("");
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  let screenWidth = Dimensions.get("window").width;
  // change = () =>{}
  return (
    <ScrollView style={{position:"relative"}}>
      <View style={styles.head}>
        
        <View style={styles.logo}>
         
          <Text style={styles.text}>your Business</Text>
          <Text style={{fontWeight:"bold"}}>Business Name</Text>
          <Image
            style={{ width: 50, height: 40 }}
            source={require("../assets/flag.png")}
          />
         
          <Icon name="language" />
          <Icon name="rocket" size={30} color="#900" />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={{ width: 150, height: 80, marginTop: 10 }}>
            <Text>Remove Watermark</Text>
          </TouchableOpacity>

          {/* <TouchableHighlight onPress={() => {}}> */}
          <View
            style={{
              backgroundColor: "#ffffff",
              width: "26%",
              height: 40,
              marginTop: 4,
              marginBottom: 20,
              position: "absolute",
              marginLeft: 250,
            }}
          >
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/crown.png")}
            />

            <Text style={styles.gopro}>GO Pro</Text>
            {/* </Button> */}
          </View>
          {/* </TouchableHighlight> */}
        </View>
      </View>
      <SafeAreaView style={styles.containertwo}>
        <Text style={styles.textt}>specially crafted for you</Text>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.containerthree}>
        /
        <FlatList
          horizontal
          data={DATATWO}
          renderItem={renderItemtwo}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.containerfour}>
        <FlatList
          horizontal
          data={DATATHREE}
          renderItem={renderItemthree}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.containerfive}>
        <FlatList
          horizontal
          data={DATAFOUR}
          renderItem={renderItemfour}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

      <View style={{ width, height }}>
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.scrolll}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.scrollimg}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {image.map((i, k) => (
            <Text
              key={k}
              style={k == active ? styles.imageactivedot : styles.imagedot}
            >
              ●
            </Text>
          ))}
          {/* {images.map((i, k) => (
            <Text
              key={i}
              style={
                k == this.state.active
                  ? styles.paginationActiveText
                  :styles.paginationText}>
                  ●
            </Text>
          ))} */}
        </View>
      </View>
      <View style={styles.containerseven}>
        <View style={styles.btngrab}>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                fontSize: 15,
                padding: 6,
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Grab Special Offer!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "black" }}>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            marginLeft: 15,
            marginRight: 15,
          }}
        />

        <View style={styles.containereight}>
          <FlatList
            data={DATAFIVE}
            renderItem={renderItemfive}
            keyExtractor={keyExtractor}
            horizontal={true}
          />
        </View>

        {/* <SafeAreaView style={styles.containereight}>
        <FlatList
          horizontal
          data={DATAFIVE}
          
          renderItem={renderItemfive}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView> */}
        <View style={{ backgroundColor: "white" }}>
          <ScrollView
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            // onScroll={this.change}
            // style={styles.scrolll}
          >
            {image.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.scrollimg2}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={styles.containernine}>
        <View style={styles.btngrab2}>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                fontSize: 15,
                padding: 6,
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Get your Digital business Card
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "white",
          borderBottomWidth: 1,
          marginLeft: 15,
          marginRight: 15,
        }}
      />

      <SafeAreaView style={styles.containerten}>
        <FlatList
          data={DATASIX}
          numColumns={2}
          renderItem={renderItemsix}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

      <View
        style={{
          flex: 2,
          flexDirection: "column",
          position: "fix",
          Button:0
        }}
      >
        <View
          style={{
            alignSelf: "center",
            backgroundColor: "grey",
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.buttonstyle, styles.actionBtn]}>
              <Image
                style={{ width: 60, height: 60 }}
                resizeMode="contain"
                source={{
                  uri:
                    "https://icon-library.net/images/android-plus-icon/android-plus-icon-0.jpg",
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: "absolute",
            // backgroundColor: "white",
            border: 1,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: { marginVertical: 5 },
            // bottom: 20,
            width: "100%",
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 50,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri:
                    "http://pluspng.com/img-png/home-icon-png-home-house-icon-image-202-512.png",
                }}
                onPress={() => navigation.navigate("home")}
              ></Image>
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Home
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginStart: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/category.png")}
                onPress={() => navigation.navigate("home")}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              category{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              marginStart: 85,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                source={require("../assets/brand.png")}
                onPress={() => navigation.navigate("home")}
                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 16 }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              BrandInfo
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                source={require("../assets/menu.png")}
                style={{ marginHorizontal: 16, width: 30, height: 30 }}
                containerStyle={{ marginHorizontal: 16 }}
              />
            </TouchableOpacity>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Menu{" "}
            </Text>
          </View>

          {/* </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    justifyContent: "right",
  },
  modal: {
    backgroundColor: "pink",
    color: "black",
  },
  show: {
    fontSize: "70px",
    Color: "black",
  },
  textt: {
    fontSize: 15,
    color: "#ffffff",
  },
  // container: {
  //   width: "100%",
  //   height: "80%",
  //   padding: 5,
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  // },
  box: {
    width: "50%",
    height: "40%",
    padding: 3,
    marginBottom: 2,
  },
  imagedot: {
    color: "#d11d3e",
  },
  imageactivedot: {
    color: "#fff",
  },
  inner: {
    flex: 2,
    backgroundColor: "#d9e3f0",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    backgroundColor: "#white",

    
    // flexDirection: "row",
  },
  logo: {
    width: "100%",
     height: 70,
    flexDirection: "row",
  },

  btn: {
    // flexDirection: "row",
    // flex: 2,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#fcb900",
    width: "60",
    height: 50,
  },
  text: {
    color: "black",
    fontSize: 15,
    
  },
  // crownbtn:{
  //   backgroundColor:'yellow',
  // },
  gopro: {
    color: "black",
    fontSize: 15,
    marginLeft: 35,
    marginBottom: "77% ",
    position: "absolute",
    marginTop: "13%",
  },
  containertwo: {
    // flex: 1,
    height: 200,
    backgroundColor: "#333333",
  },
  img: {
    width: 170,
    height: 150,
    // resizeMode: "cover",
    // marginHorizontal:
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 4,
    // height:50 ,dr

    position: "absolute",
    borderRadius: 14,
    // position: "relative",
  },
  image: {
    width: 40,
    height: 50,
    marginLeft: 90,
    resizeMode: "contain",
  },

  scroll: {
    flex: 1,
  },
  item: {
    backgroundColor: "grey",

    padding: 10,
    marginVertical: 1,
    marginHorizontal: 11,
    height: 50,
    width: 160,
    position: "relative",
    // backgroundColor:"pink",
  },
  title: {
    fontSize: 15,
    marginLeft: 15,
    position: "relative",
  },
  containersafe: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  name: {
    position: "relative",
    fontSize: 15,
    marginTop: 100,
    marginLeft: 15,
    color: "white",
  },
  uriimg: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    marginHorizontal: 7,
    borderRadius: 14,
    position: "absolute",
  },
  containerthree: {
    // flex:1,
    flexDirection: "row",
    //  flexWrap: "wrap",

    // width: 80,
    backgroundColor: "black",
  },
  textday: {
    // marginLeft: 14,
    // marginTop: 3,
    // position:'absolute',
    color: "white",
    fontSize: 20,
    // flexDirection:"row",
    width: 120,
    height: 100,
    marginLeft: 6,
    // marginBottom: 34,
    // backgroundColor: "pink",
    borderWidth: 2,
    // justifyContent: "center",
    // marginTop: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 20,
    backgroundColor: "darkgrey",
  },
  textdate: {
    // position:'absolute',

    fontSize: 20,
    width: 110,
    height: 50,
    marginLeft: 11,
    // marginBottom: 22,
    // backgroundColor: "darkgrey",
    borderWidth: 2,
    justifyContent: "center",
    //  marginTop: 55,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 6,
    backgroundColor: "lightgrey",
    // backgroundColor:'grey',
  },
  occasion: {
    // position:'absolute',
    fontSize: 15,
    width: "auto",
    marginLeft: 0,
    paddingTop: 6,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    // marginBottom: 40,
    bottom: 5,
    // backgroundColor: "white",
    borderWidth: 2,
    // justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 20,

    backgroundColor: "grey",
  },

  containerfive: {
    // flex:1,
    backgroundColor: "black",
    flexDirection: "row",
    //flexWrap: "wrap",
    // marginTop: 6,
    // width: 80,
  },
  imaguri: {
    width: 170,
    height: 150,
    // resizeMode: "cover",
    // marginHorizontal: 7,
    borderRadius: 14,
    // marginTop: 5,
    // padding: 2,
    marginLeft: 10,
    // position: "absolute",
  },
  containersix: {
    width: "",
    height: "",
    backgroundColor: "black",
  },
  scrolll: {
    width,
    height,
  },
  scrollimg: {
    width,
    height,
    borderRadius: "8%",
    marginTop: 5,
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,

    alignSelf: "center",
  },
  paginationText: { color: "white" },
  paginationActiveText: {
    color: "grey",
  },
  containerseven: {
    flexDirection: "row",

    backgroundColor: "black",
  },
  btngrab: {
    // marginBottom: 10,
    marginLeft: 220,
    // marginRight: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#fcb900",
    width: 150,
    height: 35,
  },
  containereight: {
    backgroundColor: "black",
    // flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  imagurii: {
    width: 170,
    height: 150,
    // resizeMode: "cover",
    // marginHorizontal: 7,
    borderRadius: 14,
    // margin:44,
    // // padding: 6,
  },
  scrollimg2: {
    width,
    height,
    borderRadius: "18%",
    resizeMode: "contain",
    marginTop: -53,
    marginBottom: -75,
  },
  containernine: {
    backgroundColor: "black",
  },
  btngrab2: {
    // marginBottom: 10,
    marginLeft: 120,
    // marginRight: 10,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: "#fcb900",
    width: 250,
    height: 45,
  },
  containerten: {
    // flexDirection: "column",
    backgroundColor: "black",
    flexDirection: "row",
    height: 500,
    // marginTop: 5,
    // marginBottom: 10,
  },
  img2: {
    width: 170,
    height: 150,
    resizeMode: "cover",
    // marginHorizontal:
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 4,
    // height:50 ,

    position: "relative",
    borderRadius: 14,
    // position: "relative",
  },
  uriimg2: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    marginHorizontal: 7,
    borderRadius: 14,
    position: "absolute",
  },
  bottombtn: {
    // padding:5,
    flexDirection: "row",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 360,
    height: 60,
    marginLeft: 6,

    bottom: 0,
  },

  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
  },
  buttonstyle: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 56,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0, 
  },
  actionBtn: {
    backgroundColor: "#1E90FF",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "darkgrey",
  },
});
export default homeone;
