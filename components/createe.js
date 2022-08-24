import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dialog,
    Button, 
    SafeAreaView,
    Modal, 
    Dimensions,
  } from "react-native";
  import { TextInput } from "react-native-paper";
  import { useNavigation } from "@react-navigation/native";
  import Icon from 'react-native-ionicons';
  const { width } = Dimensions.get("window");

export default function createe() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
      return (
          <>
      <View style={styles.container}>
         <View style={styles.containerone}>
        
          <Text style={styles.Text}>categories</Text>

         {/* <SafeAreaView style={styles.screen}> */}
         <StatusBar style="auto" />

         {/**  We are going to create a Modal with Text Input. */}
         <Icon name="options" style={styles.icon} size={45} onPress={toggleModalVisibility} />

         {/** This is our modal component containing textinput and a button */}
         <Modal animationType="slide" 
                transparent visible={isModalVisible} 
                presentationStyle="overFullScreen" 
                onDismiss={toggleModalVisibility}>
             <View style={styles.viewWrapper}>
                 <View style={styles.modalView}>
                     <Text style={{ fontSize:20,fontWeight:"bold", top:10,color:"white",position:"absolute"}}>Set Business Preference</Text>
                     <Text style={{ fontSize:12,fontStyle:"italic",top:40,color:"white", position:"absolute"}}>Choose all the business that you are mostly intrested in</Text>
                     <View style={{top:0,
   
    borderRadius: 60,
    backgroundColor: "grey",width:"70%",height:45 ,borderColor:"white",position:'absolute',top:65,marginLeft:10,
   }}>
                     <Text style={{color:"white", fontSize:18,textAlign:'center',
                    marginTop:9}}>Water Pump Controller</Text>
                    
                     </View>

                     <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"70%",height:45 ,borderColor:"white",borderStyle:"dashed",position:'absolute',top:115,marginLeft:10,
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Pesticides&insecticides</Text>
                   
                    </View>
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"35%",height:40 ,borderColor:"white",borderStyle:"dashed",position:'absolute',top:165,marginLeft:10,
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Polyhouse</Text>
                   
                    </View>
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"50%",height:40 ,borderColor:"white",marginLeft:"40%",position:'absolute',top:165
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Milk Machine</Text>
                   
                    </View>
                     
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"45%",height:40 ,borderColor:"white",marginLeft:10,position:'absolute',top:210
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Mango Order</Text>
                   
                    </View>
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"45%",height:40 ,borderColor:"white",marginLeft:10,position:'absolute',top:255
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Sheep Farming </Text>
                   
                    </View>
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"45%",height:40 ,borderColor:"white",marginLeft:10,position:'absolute',top:300
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Sericulture/</Text>
                   
                    </View>
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"45%",height:40 ,borderColor:"white",marginLeft:10,position:'absolute',top:345
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Hydroponics</Text>
                   
                    </View>
                    <View style={{ 
   
   borderRadius: 60,
   backgroundColor: "grey",width:"45%",height:40 ,borderColor:"white",marginLeft:10,position:'absolute',top:390
  }}>
                    <Text style={{color:"white", fontSize:18,textAlign:'center',
                   marginTop:9}}>Apiculture/</Text>

                   
                   
                    </View>

                     {/* <TextInput placeholder="Enter something aashu..." 
                                value={inputValue} style={styles.textInput} 
                                onChangeText={(value) => setInputValue(value)} /> */}

                     {/** This button is responsible to close the modal */}
                     {/* <Button title="Close" onPress={toggleModalVisibility} /> */}
                 </View>
             </View>
         </Modal>
     {/* </SafeAreaView> */}
     </View>
     </View>

     </>
         
 );
}
  
   const styles = StyleSheet.create({
       container:{
          
           alignItems:'center',
           justifyContent:'center',
           backgroundColor:'white',
       },
       containerone:{
          
           backgroundColor:"black",
           width:"100%",
           height:50,
          
       },
       Text:{
           color:'white',
           fontSize:20,
           marginLeft:10,
       },
       icon:{
        height:35,
        color:'white',
        marginLeft:256,
          Top:10,
       
        position:"absolute",

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
    modalView: {
        // alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "30%",
        left: "50%",
       
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: "90%",
        width: width * 0.8,
        backgroundColor: "#262927",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
       
   });
  
