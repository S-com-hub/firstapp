import React, { useState, useEffect } from "react";
import { useCallback } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dialog,
  StatusBar,
  TouchableHighlight,
  Button,
  SafeAreaView,
  Modal,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import { CheckBox } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

import { ScrollView } from "react-native-gesture-handler";
//   import { CheckBox } from 'react-native-elements';
const { width } = Dimensions.get("window");

const DATA = [
  {
    id: 1,
    language: "English",
  },

  {
    id: 2,
    language: "Marathi",
  },

  {
    id: 3,
    language: "Hindi",
  },

  {
    id: 4,
    language: "Gujrati",
  },

  {
    id: 5,
    language: "Telagu",
  },

  {
    id: 6,
    language: "Bengali",
  },

  {
    id: 7,
    language: "Kannada",
  },

  {
    id: 8,
    language: "Malyalam",
  },

  {
    id: 9,
    language: "Tamil",
  },
];
const DATATWO = [
  {
    id: 1,
    category: "Mango Order",
  },
  {
    id: 2,
    category: "Sericulture",
  },
  {
    id: 3,
    category: "water Pump Controller",
  },
  {
    id: 4,
    category: "Pesticides&Insecticidies",
  },
  {
    id: 5,
    category: "Polyhouse",
  },
  {
    id: 6,
    category: "Milk Machine",
  },
  {
    id: 7,
    category: "Sheep Farming",
  },
  {
    id: 8,
    category: "Hydroponics",
  },
  {
    id: 9,
    category: "Apiculture",
  },
  {
    id: 10,
    category: "Sunflower",
  },
];
const Listtab = [
  {
    cat: "Business",
  },
  {
    cat: "Greetings & Remembrance",
  },
  {
   cat: "Devotional",
  },
  {
    cat: "Quotes",
  },
  {
    cat: "Knowledge",
  },
  {
    cat: "Exclusives",
  },
  {
    cat: "City Specials",
  },
  {
    cat: "Trending",
  },
  {
    cat: "Days",
  },
  {
    cat: "Politicians",
  },
  {
    cat: "Celebrity",
  },
  {
    cat: "Freedom Fighters",
  },
  {
    cat: "Branding",
  },
];
const DATATHREE = [
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

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.language}</Text>
  </TouchableOpacity>
);

const Itemtwo = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.category, textColor]}>{item.category}</Text>
  </TouchableOpacity>
);
// const Itemthree = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.itemthree, backgroundColor]}>
//     <Text style={[styles.cat, textColor]}>{item.cat}</Text>
//   </TouchableOpacity>
// );



export default function category() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#000000" : "#000000";
    const color = item.id === selectedId ? "white" : "black";

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
    const backgroundColor = item.id === selectedId2 ? "#000000" : "#000000";
    const color = item.id === selectedId2 ? "white" : "black";

    return (
      <Itemtwo
        item={item}
        onPress={() => setSelectedId2(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  const renderItemthree = ({ item,index }) => {
   
    return (
     <View key={index} style={styles.itemcontainer}>
       
     </View>
     
        // item={item}
        // onPress={() => setSelectedId(item.id)}
        // backgroundColor4={{ backgroundColor4 }}
        // textColor3={{ color3 }}
      
    )
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerone}>
          <Text style={styles.Text}>Categories</Text>

          {/* <SafeAreaView style={styles.screen}> */}
          {/* <StatusBar style="auto" /> */}

          {/* <SafeAreaView style={{flex: 1}}> */}
          {/* <View style={styles.containerss}> */}
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            <View style={{ backgroundColor: "grey", height: 70, top: 85 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  mariginTop: 20,
                }}
              >
                Set Preference Language
              </Text>
              <Text style={{ color: "white", fontSize: 15 }}>
                Choose all the Language in which you want to get Branding Images
              </Text>
            </View>
            <View
              style={{ height: "60%", marginTop: 80, backgroundColor: "grey" }}
            >
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
              />
            </View>
            <View style={styles.modal}>
              <View style={{ backgroundColor: "grey", width: 394, height: 40 }}>
                <TouchableOpacity
                  style={{ backgroundColor: "grey", width: 60, height: 30 }}
                  onPress={() => {
                    setShowModal(!showModal);
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      height: 35,
                      marginleft: 50,
                      backgroundColor: "#fcb900",
                      borderRadius: 10,
                      fontSize: 20,
                      marginLeft: 125,
                      width: 80,
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{}}
                onPress={() => {
                  setShowModal(!showModal);
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    position: "absolute",
                    bottom: -61,
                    left: 140,
                  }}
                  source={require("../assets/cross.png")}
                />
              </TouchableOpacity>
            </View>
          </Modal>
          {/*Updating the state to make Modal Visible*/}
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                position: "absolute",
                marginLeft: "60%",
                top:-30
              }}
              source={require("../assets/language.png")}
            />
          </TouchableOpacity>
        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={showModal2}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={{ backgroundColor: "grey", height: 70, top: 85 }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                mariginTop: 20,
              }}
            >
              Set Business Preference{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 15 }}>
              Choose all the business that you are mostly intrested in
            </Text>
          </View>
          <View
            style={{ height: "60%", marginTop: 80, backgroundColor: "grey" }}
          >
            <FlatList
              data={DATATWO}
              renderItem={renderItemtwo}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>
          <View style={styles.modal}>
            <View style={{ backgroundColor: "grey", width: 394, height: 40 }}>
              <TouchableOpacity
                style={{ backgroundColor: "grey", width: 60, height: 30 }}
                onPress={() => {
                  setShowModal2(!showModal2);
                }}
              >
                <Text
                  style={{
                    color: "black",
                    height: 35,
                    marginleft: 50,
                    backgroundColor: "#fcb900",
                    borderRadius: 10,
                    fontSize: 20,
                    marginLeft: 125,
                    width: 80,
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{}}
              onPress={() => {
                setShowModal2(!showModal2);
              }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  position: "absolute",
                  bottom: -61,
                  left: 140,
                }}
                source={require("../assets/cross.png")}
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => {
            setShowModal2(!showModal2);
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
              position: "absolute",
            
              marginLeft:100,
              top: -45,
              
            }}
            source={require("../assets/menuu.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            style={{
              width: 38,
              height: 38,
              position: "absolute",
            
              marginLeft:150,
              top: -47,
              
            }}
            source={require("../assets/search.png")}
          />
        </TouchableOpacity>
        
        <ScrollView style={styles.containercat}  horizontal={true}
       >
       
          <View style={styles.itemthree}>
            {Listtab.map((e) => (
              <TouchableOpacity>
                <Text style={styles.cat}> {e.cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
       
      <FlatList
      horizontal
        data={DATATHREE}
        keyExtractor={(e, i)=>i.toString()}
        renderItem={renderItemthree}
        extraData={selectedId}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.tabbox}></View>
   
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
  },
  containerone: {
    backgroundColor: "white",
    width: "120%",
    height: 70,
    position: "relative",
  },
  Text: {
    color: "black",
    fontSize: 25,
    marginLeft: 60,
    fontWeight:"bold",
    marginTop:17,

  },
  icon: {
    height: 35,
    color: "white",
    marginLeft: 256,
    Top: 10,

    position: "absolute",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  // modalView: {
  //   // alignItems: "center",
  //   justifyContent: "center",
  //   position: "absolute",

  //   elevation: 5,
  //   transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
  //   height: "90%",
  //   width: width * 0.8,
  //   backgroundColor: "#262927",
  //   borderRadius: 7,
  // },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
  containerss: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnNormal: {
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 20,
    height: 50,
  },
  btnPress: {
    borderColor: "#fcb900",
    borderWidth: 2,
    borderRadius: 20,
    height: 50,
    width: 150,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "45%",
    borderRadius: 30,
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    // borderColor: "rgba(0, 0, 0, 0.2)",
    // borderWidth:1,
    // borderColor:"white",
    borderRadius: 30,
    textAlign: "center",
  },
  // modal: {
  //   alignItems: "center",
  //   elevation: 5,
  //   transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
  //   left:100,

  // },
  text: {
    color: "#3f2949",
    marginTop: 5,
  },
  category: {
    fontSize: 20,
    // borderColor: "rgba(0, 0, 0, 0.2)",
    // borderWidth:1,
    // borderColor:"white",
    borderRadius: 30,
    textAlign: "center",
  },
  containercat: {
    backgroundColor: "white",
    height: 34,
  width: "120%",
    flexDirection: "row",
  },
  itemthree: {
    marginVertical: 5,
    marginHorizontal: 16,
    // width: "100%",
    flexDirection: "row",
    // borderRadius: 30,
    // backgroundColor: "grey",
  },
  cat: {
    fontSize: 20,
    backgroundColor: "white",
    color: "black",
    marginLeft: 20,
    flexDirection: "row", 
   
  },
  itemcontainer:{
    flexDirection:"row"
  },
  tabbox:{
    backgroundColor:"white",
   
  }
});
