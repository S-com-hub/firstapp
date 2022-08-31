import { View, Text, Image,StyleSheet,TextInput,TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useState, useRef } from "react";
import Flag from 'react-native-flags';
import PhoneInput from "react-native-phone-number-input";

const Login2 = ({ navigation } ) => {
  const [phoneNumber, setPhoneNumber] = useState('');


  const phoneInput = useRef<PhoneInput>(null);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Image
        style={{ height: 370, width: 375, position: "absolute", marginLeft: -20, top: -15 }}
        source={require("../assets/butterfly.png")}
      />
      <Image
        style={{ height: 410, width: 400, position: "absolute", top: 400 , marginLeft: 20, }}
        source={require("../assets/butterfly2.png")}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ position: "absolute", fontSize: 27, top: 60, }}>Login into app/signUp</Text>
        <Text style={{ position: "absolute", fontSize: 21, top: 110, }}>by continuing you indicate  </Text>
        <Text style={{ position: "absolute", fontSize: 21, top: 135, }}>that you have read and  </Text>
        <Text style={{ position: "absolute", fontSize: 21, top: 160, }}>agree to the </Text>
        <Text style={{ position: "absolute", fontSize: 21, top: 220, }}>Terms and Services</Text>
      </View>
      <View style={{alignItems:"center",}}>
      <View style={styles.border}>
      <Flag
    code="IN"
    size={24}
  />
      <Text  style={{ fontSize: 24,marginLeft:5}}>india  +91</Text>
      
      </View>
      <View style={{top:350}}>
      <PhoneInput
      
      style={styles.border2}
          placeholder="Mobile Number"
         keyboardType="numeric"
        
          onChangeText={(text) => {
            setPhoneNumber( text)
          }}
         
          countryPickerProps={{ withAlphaFilter: true }}
          withShadow
          autoFocus

        
        /></View>
      </View>
      <View style={{top:400}}>
      <Text style={{fontSize:20}}>Invited by Friend?</Text>
      <TouchableOpacity>
       <Text style={{fontSize:20,fontWeight:"bold"}}> Enter Code</Text>
      </TouchableOpacity>
      </View>
      <View style={{ alignItems:"center",}}>
      <View >
      <TouchableOpacity
 style={styles.button}
 onPress={() => navigation.navigate('Otpinput', {phoneNumber})}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"black",position:"absolute" }}>Send Otp</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  border:{
   
 alignItems:"center",
  top:310,
  borderColor:"black",
  height:50,
width:330,
  borderWidth:1,
  justifyContent:"center",
  flexDirection:"row"
},
border2:{
  
  alignItems:"center",
  marginTop:300,
   borderColor:"black",
   height:50,
 width:330,
   borderWidth:1,
   justifyContent:"center",
   flexDirection:"row",
   fontSize:26,
 },
 button:{
  
  top:450,
borderColor:"black",
  borderWidth:1,
  height:50,
  width:330,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:20,
  backgroundColor:"#ffc107",

 }

})

export default Login2





