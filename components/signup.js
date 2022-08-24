import React ,{useState, Component} from "react";
import { View, Text, Image, ScrollView, StyleSheet,Keyboard } from "react-native";
import { Input, Icon, SocialIcon } from "react-native-elements";
// import {Icon}from "react-native-vector-icons";
import { Button } from "react-native-elements";
import { TextInput, RadioButton } from "react-native-paper";
// import GoogleButton from 'react-google-button'
import { FaBeer } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";
//import { Button } from "@mui/material";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native-web";
import { Dropdown } from 'react-native-element-dropdown';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';

const DATA = [
  { id:1, item: 'Agriculture & Allied '  },
  { id:2,item: 'Apparel & Clothing '},
  { id:3,item: 'Arts & Entertaining'},
  { id:4,item: 'Astrologer'},
  { id:5,item: 'Audit & Taxation' },
  { id:6,item: 'Automotive Service' },
  { id:7,item: 'Bag Shop' },
  { id:8,item: 'Bakery & confectionery'},
    { id:9,item: 'Banking & Finance'  },
    { id:10,item: 'Beauty,Cosmetic & Personal Care'  },
    { id:11,item: 'Bicycle shop'  },
    { id:12,item: 'Chemicals' },
    { id:13,item: 'Computer Shop'},
    { id:14,item: 'Contractor & Labours'  },
    { id:15,item: 'Dairy & Milk Distribution'},
    { id:16,item: 'Dance Institute' },
    { id:17,item: 'Dentistry & Oral health'  },
    { id:18,item: 'Departmental store' },
    { id:19,item: 'Digital Marketing'},
    { id:20,item: 'Distribution & Trading' },
    { id:21,item: 'Driving School' },
    { id:22,item: 'Education  & Coaching' },
    { id:23,item: 'Electric & vehicle' },
    { id:24,item: 'Electronic & Applianaces'},
  
];





export default function signup() {
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }
  
  function onChange() {
    return (val) => setSelectedTeam(val)
  }
 

  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [selectedId, setSelectedId] = useState(null);
  const [number, setNumber] = React.useState('');
  
 


  const onChanged = (text) => {
      let newText = '';
      let numbers = '0123456789';
  
      for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
          else {
              alert("please enter numbers only");
          }
      }
      setNumber(newText);
  }
  const onPress = () => {
      if (number.length !== 0) {
          Alert.alert(
              "Confirm Number",
              number,
              [
                  {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                  },
                  { 
                      text: "OK", 
                      onPress: () => console.log("OK Pressed"),
                  },
              ],
          );
          setNumber('');
          Keyboard.dismiss();
      }
  }

  const [value, setValue] = React.useState('first');

 
  const navigation = useNavigation();
  const [phoneNumber,setPhoneNumber] =useState();
  const onChangePhone =(number)=>{
      setPhoneNumber(number)
  }
  
  return (
    <View>
      <View>
        <Text style={styles.text}>SignUp</Text>
      </View>
       <View style={styles.bar}>
        <View style={{top:4,}}>
      <TextInput style={styles.name} 
        label ="Full Name"
        /></View>
       
     <TextInput  style={{fontSize:15}}label=" Enter Date Of Birth"></TextInput>
     
      
     <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      
   <TextInput  style={{backgroundolor:"#bbbbcc21",height:40}}label="Gender"></TextInput>
      <View style={{flexDirection:"row",backgroundolor:"#bbbbcc21",marginTop:5,position:"absolute" ,marginLeft:77}}>
      <View style={{flexDirection:"row"}}>
        <Text>Male</Text>
        <RadioButton value="first" />
      </View>
      <View style={{flexDirection:"row" }}>
        <Text>Female</Text>
        <RadioButton value="second" />
      </View>
      <View style={{flexDirection:"row" }}>
        <Text>Other</Text>
        <RadioButton value="third" />
      </View>
      </View>
    </RadioButton.Group>
    

      

    <TextInput style={styles.place}
                keyboardType='numeric'
                onChangeText={text => onChanged(text)}
                value={number}
                
                placeholder='+91 Enter Mobile No'
                maxLength={10}
            />
      
   
      <View style={{ margin: 30 }}>
     
    </View>


 

        <TextInput style={styles.email} 
        label="Email"
        />
        <SelectBox
        label="Category"
        options={DATA}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
        <TextInput
          style={styles.pass}
          label=" Create Password"
         
          left={<TextInput.Icon name="eye" />}
        />
        
      </View>
      
    
      <Button
        style={styles.btn}
        title="Continue"
        onPress={() => navigation.navigate("home")}
      />
      <Text style={styles.sign}>or Sign Up Using</Text>

     
      <View style={styles.google}>
        <SocialIcon style={styles.logo} button light type="google" />
        <SocialIcon style={styles.logo} button light type="twitter" />
        <SocialIcon style={styles.logo} button light type="facebook" />
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  uname: {
    fontSize: 12,
    marginLeft: 14,
    
  },
  bar: {
    
     padding: 40,
   
    // marginBottom: 50,
  },
  place: {
    fontSize: 15,
    backgroundColor: "#bbbbcc21",
  },
  pass: {
    marginTop: 30,
    fontSize: 15,
    backgroundColor: "#bbbbcc21",
  },
  btn: {
    marginTop: 10,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 31,
  },
  fog: {
    fontSize: 12,
    textAlign: "end",
  },
  sign: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 30,
  },
  google: {
    // padding:5,
    // marginTop: 12,
    // marginRight: 163,
    // marginBottom: 12,
    // marginLeft: 163,
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    padding: 15,
  },
  signup: {
    display: "flex",
    // alignItems: 'center',
    justifyContent: "center",
    marginTop: "8px",
  },
  email:{
    marginTop:2,
  },
  name:{
    marginBottom:5,
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
});
