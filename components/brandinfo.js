import { View, Text ,StyleSheet,Image,Keyboard,TouchableOpacity, Dimensions, } from 'react-native'
import React ,{useState} from "react";
import { TextInput } from "react-native-paper";
import { InputOutline, InputStandard } from'react-native-input-outline';
import AsyncStorage from '@react-native-async-storage/async-storage';

const brandinfo = () => {
  const [businessName,setbusinessname]= useState('');
  const [slogan, setslogan] = useState('');
  const [address, setaddress] = React.useState('');
  const [email, setemail] = React.useState('');
  const [storageDataList, setStorageDataList] = useState('');
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

  const addItemToList = async () => {
    try {
      await AsyncStorage.setItem('businessName',businessName);
      await AsyncStorage.setItem(' slogan',slogan);
      await AsyncStorage.setItem(' number',number);
      await AsyncStorage.setItem(' address',address);
      await AsyncStorage.setItem(' email',email);

      setbusinessname('')
      setInputBoxValue('');
      setslogan('');
      setNumber('');
      setaddress('');
      setemail('');
      await getItemList();

      alert('Data Is Added');
    } catch (err) {
      console.log(err);
    }
  };

  // const getItemList = async () => {
  
  //   try {
  //     const data = await AsyncStorage.getItem('businessName','slogan','number','address','setemail');
  //     setStorageDataList(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <View>
    <View style={styles.containerone}>
      <Text style={styles.text}>Upload Your Brand Details</Text>
    </View>
    <View style = {styles.lineStyle} />
    <View style={styles.containertwo}> 
    <Image
        style={{ height: 100, width: 100,top:20}}
        source={require("../assets/upload.png")}
      />
      <Text style={{marginTop:115,marginLeft:-172,fontSize:11,fontWeight:"bold"}}>Upload Logo</Text>
      <Image
        style={{ height: 100, width: 100,top:20 }}
        source={require("../assets/upload.png")}
      />
      <Text style={{marginTop:115,marginLeft:-179,fontSize:11,fontWeight:"bold"}}>Extra Elements</Text>
      
    </View>
    <View style={styles.containerthree}>
    <Image
        style={{ height: 50, width: 350,marginLeft:10,marginBottom:40,marginTop:20}}
        source={require("../assets/donthavebrand.png")}
      />
    </View>
    <View style={styles.containerfour}>
    <InputOutline style={styles.box1}
       placeholder='Business Name'
       onChangeText={value => setbusinessname(value)}
       
      />
 <InputOutline style={styles.box1}
       placeholder='Slogan'
       onChangeText={value => setslogan(value)}
      />
              <InputOutline style={styles.box1}
                keyboardType='numeric'
                onChangeText={text => onChanged(text)}
                value={number}
                placeholder=' Contact Number'
            />
      <InputOutline style={styles.box1}
       placeholder='Address'
       onChangeText={value => setaddress(value)}
      />
     <InputOutline style={styles.box1}
       placeholder='Email'
       autoCapitalize="none"
       keyboardType="email-address"
       underlineColorAndroid="#f000"
       onChangeText={value => setemail(value)}
      />
    
     
   
    <TouchableOpacity
        style={styles.addButton}
        onPress={() => addItemToList()}>
        <Text>Add</Text>
      </TouchableOpacity>
      
      
    </View> </View>
  )
};

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({

    containerone:{

        height:50,
        backgroundColor:"white",
    },
    text:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold",
       marginTop:10,
       flexDirection:"row",
       flex: "wrap",
      justifyContent: "space-around",
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'#3f4a45',
    },
    containertwo:{
      flexDirection:"row",
       flex: "wrap",
      justifyContent: "space-around",
      backgroundColor:"white",
    },
    containerthree:{
      backgroundColor:"white", 
    },
    containerfour:{
backgroundColor:"white"
    },
    box1:{
      backgroundColor:"white",
      borderColor:"#000000",
      BorderStyle:"solid",
      borderWidth:3,
      marginTop:17,
      borderRadius:10
    }

});


export default brandinfo