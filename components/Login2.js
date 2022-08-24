   import { View, Text ,Image,} from 'react-native'
   import React from 'react'
   import {CountryPicker} from "react-native-country-codes-picker";


   const Login2 = () => {
    
   
     return (
       <View style={{backgroundColor:"white",height:"100%"}}>
       
       <Image
        style={{ height: 350, width: 350, position: "absolute",marginLeft:-20,top:-15}}
        source={require("../assets/butterfly.png")}
      />
      <View style={{alignItems:"center"}}>
      <Text style={{position:"absolute",fontSize:25,top:60,}}>Login into app/signUp</Text>
      <Text style={{position:"absolute",fontSize:17,top:100,}}>by continuing you indicate  </Text>
      <Text style={{position:"absolute",fontSize:17,top:120,}}>that you have read and  </Text>
      <Text style={{position:"absolute",fontSize:17,top:140,}}>agree to the </Text>
      <Text style={{position:"absolute",fontSize:17,top:190,}}>Terms and Services</Text>
    </View>

          
       </View>
     )
   }
   
   export default Login2
    
  
 


