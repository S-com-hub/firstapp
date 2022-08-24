import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
const images = [
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
];
const image = [
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
  "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
];
const image2 = [
  {
    name: "FESTIVAL1",
    image: [
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    ],
  },
  {
    name: "FESTIVAL2",
    image: [
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ],
  },
];
const { width } = Dimensions.get("window");
const height = width * 0.6;
const home = () => {
  const [data, setData] = useState([]);
  const [loding, setloding] = useState(true);
  const url = "http://192.168.1.76:5000/topbanner";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setloding(false))
  }, [])
  const navigation = useNavigation();
  var imageurl = "http://192.168.1.76:4500/banner/"
  return (
    <View>
      <Image
        style={{ height: 70, width: 380, position: "absolute" }}
        source={require("../assets/background.png")}
      />

      <View style={styles.container}>
        <View style={styles.containerone}>
          {/* <Text
            style={{
              fontColor: "black",
           
              marginTop: 13,
              marginLeft: 10,
            }}
          >
            your Business
          </Text>
          <Text
            style={{
              fontColor: "black",
              
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            BUSINESS NAME
          </Text> */}
          <TouchableOpacity><Image
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              marginLeft: 122,
              top: -20

            }}
            source={require("../assets/arrow.png")}
          /></TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Image
              style={{
                width: 47,
                height: 45,
                position: "absolute",
                right: 100,
                top: -40
              }}
              source={require("../assets/video.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 40,
                height: 30,
                position: "absolute",
                right: 55,
                top: -35
              }}
              source={require("../assets/search.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 40,
                height: 30,
                position: "absolute",
                right: 6,
                top: -35
              }}
              source={require("../assets/notification.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ height: 160, borderRadius: 10 }}
          >

            {loding ? <Text>Loading ....</Text> : (
              data.map((post) => (
                <View>
                  {/* <Text>{post.name}</Text>
          <Text>{post.date}</Text> */}
                  <Image
                    source={{ uri: imageurl + post.image }}
                    resizeMode="contain"
                    style={styles.scroll}
                  />
                </View>
              ))
            )}



          </ScrollView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity style={{}}>
              <View>
                <View
                  style={{
                    borderRadius: 23,
                    width: 130,
                    height: 40,
                    marginTop: 1,
                  }}
                >
                  <Image
                    style={{
                      width: 110,
                      height: 42,
                      marginLeft: 10,
                      borderRadius: 60,
                    }}
                    source={require("../assets/background.png")}
                  />
                  <View
                    style={{
                      backgroundColor: "white",
                      borderRadius: 60,
                      position: "absolute",
                      height: 25,
                      marginLeft: 10,
                      width: 25,
                      top: 7,
                    }}
                  >
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        position: "absolute",
                        right: 6,
                        marginBottom: "100%",
                        position: "relative",
                        marginLeft: 5,
                      }}
                      source={require("../assets/vicon.png")}
                    />
                  </View>


                  {/* <Text
                    style={{
                    
                      fontWeight: "bold",
                      marginTop: 23,
                      marginLeft: 33,
                      position: "absolute",
                    }}
                  >
                    VIDEO TEMPLATE
                  </Text> */}
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{}}>
              <Image
                style={{
                  width: 110,
                  height: 42,
                  marginLeft: 10,
                  borderRadius: 60,
                }}
                source={require("../assets/background.png")}
              />
              <View
                style={{
                  borderRadius: 23,
                  width: 130,
                  height: 40,
                  marginTop: -40,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 60,
                    position: "absolute",
                    height: 25,
                    marginLeft: 10,
                    width: 25,
                    top: 7,
                  }}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      position: "absolute",
                      right: 6,
                      marginBottom: "100%",
                      position: "relative",
                      marginLeft: 5,
                    }}
                    source={require("../assets/vicon.png")}
                  />
                </View>
                {/* <Text
                  style={{
                    
                    marginLeft: 40,
                    marginTop: 6,
                    position: "absolute",
                  }}
                >
                  create Digital
                </Text>
                <Text
                  style={{
                   
                    fontWeight: "bold",
                    marginLeft: 40,
                    marginTop: 20,
                    position: "absolute",
                  }}
                >
                  VISITING CARD
                </Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
              <Image
                style={{
                  width: 110,
                  height: 42,
                  marginLeft: 10,
                  borderRadius: 60,
                }}
                source={require("../assets/background.png")}
              />
              <View
                style={{
                  borderRadius: 23,
                  width: 110,
                  height: 40,
                  marginTop: -40,
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 60,
                    position: "absolute",
                    height: 25,
                    marginLeft: 10,
                    width: 25,
                    top: 7,
                  }}
                >
                  <Image
                    style={{
                      width: 25,
                      height: 25,
                      position: "absolute",
                      right: 6,
                      marginBottom: "100%",
                      position: "relative",
                      marginLeft: 5,
                    }}
                    source={require("../assets/vicon.png")}
                  />
                </View>
                {/* <Text
                  style={{
                   
                    marginLeft: 40,
                    marginTop: 6,
                    position: "absolute",
                  }}
                >
                  create Own
                </Text>
                <Text
                  style={{
                  
                    fontWeight: "bold",
                    marginLeft: 40,
                    marginTop: 20,
                    position: "absolute",
                  }}
                >
                  PHOTO POST
                </Text> */}
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {image.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
          </View>

          {/* <Text style={styles.TExt}>{image2[0].name}</Text> */}
          <TouchableOpacity onPress={() => navigation.navigate("festival")}>
            {/* <Text style={styles.viewall}>Veiw All</Text> */}
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {image2[0].image.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image2}
              />
            ))}
          </View>
          {/* <Text style={styles.TExt}>{image2[1].name}</Text> */}
          <TouchableOpacity onPress={() => navigation.navigate("festival")}>
            {/* <Text style={styles.viewall}>Veiw All</Text> */}
          </TouchableOpacity>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {image2[1].image.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image2}
              />
            ))}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
            }}
          >
            {" "}
            <Image
              style={{ width: "110%", height: "200%" }}
              source={require("../assets/background.png")}
            />
            <View
              style={{
                alignSelf: "center",
                backgroundColor: "white",
                width: 65,
                height: 65,
                borderRadius: 50,

                bottom: 70,
                zIndex: 46,
              }}
            >
              <TouchableWithoutFeedback onPress={this.toggleOpen}>
                <View style={[styles.buttonstyle, styles.actionBtn]}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("category")}
                  >
                    <Image
                      style={{ width: 50, height: 50, marginTop: "5%" }}
                      resizeMode="stretch"
                      source={require("../assets/bussess.png")}
                    />
                    {/* <Text>
                      My Business
                    </Text> */}
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                position: "absolute",
                // backgroundColor: "white",

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
                width: "110%",
                height: 70,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
                paddingHorizontal: 25,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("createe")}
                >
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/home.png")}
                  ></Image>
                </TouchableOpacity>
                {/* <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  Home
                </Text> */}
              </View>

              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginStart: 30,
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("custom")}>
                  <Image
                    style={{ width: 25, height: 25, marginLeft: -30 }}
                    source={require("../assets/custom.png")}
                  />
                </TouchableOpacity>
                {/* <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: -30,
                   

                  }}
                >
                  Custom
                </Text> */}
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
                  onPress={() => navigation.navigate("category")}
                >
                  <Image
                    source={require("../assets/file.png")}
                    style={{ marginHorizontal: 16, width: 25, height: 25 }}
                    containerStyle={{ marginHorizontal: 16 }}
                  />
                </TouchableOpacity>
                {/* <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  
                  }}
                >
                  BrandInfo
                </Text> */}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("Account")}
                >
                  <Image
                    source={require("../assets/contact.png")}
                    style={{ marginHorizontal: 16, width: 25, height: 25 }}
                    containerStyle={{ marginHorizontal: 16 }}
                  />
                </TouchableOpacity>
                {/* <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                   
                  }}
                >
                  Account
                </Text> */}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  containerone: {
    top: 0,
    //  position: "sticky",
    height: 70,
  },
  scroll: {
    width,
    height,

    resizeMode: "cover",
    marginTop: -53,
    marginBottom: -75,
  },
  containertwo: {
    // flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
  },
  image: {
    width: 170,
    height: 90,

    // resizeMode: "cover",
    marginTop: 10,
    // marginLeft:5,
    borderRadius: 10,
  },
  image2: {
    width: 110,
    height: 100,

    // resizeMode: "cover",
    marginTop: 10,
    // marginLeft:5,
    borderRadius: 10,
  },
  TExt: {
    marginTop: 10,
    fontWeight: "bold",
  },
  viewall: {
    marginLeft: "80%",
    marginTop: -17,
  },
  buttonstyle: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",

    // shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 56,
    position: "absolute",
    bottom: 20,
    right: 1,
    top: 5,
    left: 4,
  },
  actionBtn: {
    // backgroundColor: "white",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    // borderWidth: 2,
    //  borderColor: "#fff",
    // backgroundColor: "white",
  },
});
export default home;
