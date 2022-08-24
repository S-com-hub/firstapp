import { StyleSheet, Text,   Dimensions,View ,Image,ScrollView,TouchableOpacity, Button, TouchableWithoutFeedback,} from 'react-native'
import React, {useState,useEffect
} from "react";
import { useNavigation } from "@react-navigation/native";
const image = [
  {
    name:"category0",
    image:[
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    ]
  },
  {
    name:"category1",
    image:[
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    ]
  },
  {
    name:"category2",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },
  {
    name:"category3",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },
  {
    name:"category4",
    image:[
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    ]
  },
  {
    name:"category5",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },
  {
    name:"category6",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },
  {
    name:"category7",
    image:[
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    ]
  },
  {
    name:"category8",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },
  {
    name:"category9",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },
  {
    name:"category10",
    image:[
      "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
    ]
  },
  {
    name:"category11",
    image:[
      "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    ]
  },


];
const { width } = Dimensions.get("window");
const height = width * 0.6;

 const custom =()=> {
  const [data,setData]=useState([]);
  const [loding,setloding]=useState(true);
  const url = "http://192.168.1.76:5000/catagory";
  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())

    .then((json)=>setData(json))
    .catch((err)=>console.error(err))
    .finally(()=>setloding(false))
  },[])
  const navigation = useNavigation();
 
  var imageurl="http://192.168.1.76:4500/catagory/"
  return (
    <View>
 
       
    <View style={styles.contaionerone}>
      <Text style={{fontSize:40,fontWeight:"bold",textAlign:"center"}}>CUSTOM</Text>
      <Image
            style={{ width: 45, height: 50,marginLeft:"80%",top:0,position:"absolute" }}
            source={require("../assets/search.png")}
          />
    </View>
    <View style = {styles.lineStyle} />
    <View style={{padding:5}}>
    <View style={styles.contaionertwo}>
    <Image
            style={{ width: 120, height:120 }}
            source={require("../assets/photopost.png")}
          />
           <Image
            style={{ width: 120, height: 120 }}
            source={require("../assets/videopost.png")}
          />
           <Image
            style={{ width: 120, height: 120 }}
            source={require("../assets/fromphoto.png")}
          />
    </View>
    <View style={styles.containerthree}>
    <Image
            style={{ width: 175, height:140 }}
            source={require("../assets/digitalcard.png")}
          />
           <Image
            style={{ width: 175, height: 140 }}
            source={require("../assets/videotemplate.png")}
          />
    </View></View>
    <Text style={{fontSize:27,fontWeight:"bold",marginLeft:8,top:0}}>General categories</Text>
<View style={styles.containerfour}>


<View  style={{flexDirection:"row", flexWrap: 'wrap',justifyContent:"space-around" }}>

{loding ? <Text>Loading ....</Text>:(
      data.map((post)=>(

    <TouchableOpacity onPress={() => {
      let itemText = post.name;
      let itemDate = post.date;
      let itemimage = post.image;
      let itemid = post.id;
      
      
      navigation.navigate('festival', {
        itemId:itemText,
        itemDate: itemDate,
        itemimage: itemimage,
         itemid: itemid
      });
    }}>
 
 {/* <Button
        title="Go to Details"
        onPress={() => {
          let itemText = post.name;
          let itemDate = post.date;
          let itemimage = post.image;
          let itemid = post.id;
          
   
          navigation.navigate('festival', {
            itemId:itemText,
            itemDate: itemDate,
            itemimage: itemimage,
             itemid: itemid
          });
        }}
      /> */}
        <View>
         
          {/* <Text>{post.date}</Text> */}
          <Image
                source={{uri:imageurl+post.image}}
                resizeMode="contain"
                style={styles.image}
             />
              <Text style={{marginLeft:15,marginTop:8}}>{post.name}</Text>
        </View>
    </TouchableOpacity>
))
)}

  
    </View>
   
    {/* <View>
   
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[2].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[2].name}</Text>
  
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[3].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[3].name}</Text>
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[4].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[4].name}</Text>
   </View>

   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[5].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[5].name}</Text>
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[6].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[6].name}</Text>
   </View>
   
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[7].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[7].name}</Text>
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[8].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[8].name}</Text>
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[9].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[9].name}</Text>
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[10].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[10].name}</Text>
   </View>
   <View>
   <TouchableOpacity  onPress={() => navigation.navigate("festival")}>
       <View style={{justifyContent:"space-around" }}>
         {image[11].image.map((image, index) => (
           <Image key={index} source={{ uri: image }} style={styles.image} />
         ))}
       </View>
   </TouchableOpacity>
   <Text style={styles.TExt}>{image[11].name}</Text>
   </View> */}
   
    </View>
    </View>
   
  )
};

const styles = StyleSheet.create({
    contaionerone:{
        backgroundColor:"white",
       height:60,
      
       top: 0,
      
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#3f4a45',
       
        
   },
   contaionertwo:{
    flexDirection: "row",
    justifyContent:"space-around",
    backgroundColor:"#ffffff",
    
   
   },
   containerthree:{
    flexDirection: "row",
    backgroundColor:"#ffffff",
    justifyContent:"space-around",
    
   },
   TExt:{
    fontSize:15,
 fontWeight:"bold",
 marginLeft:20,
 marginTop:8,
  },
  viewall:{
    marginLeft:"80%",
    marginTop:-17,
  },
  image: {
    width: 110,
    height: 100,

    // resizeMode: "cover",
    marginTop: 10,
    // marginLeft:5,
    borderRadius: 10,
    bordercolor:"#414543",
    borderWidth:0.1,
  },
  containerfour:{
    backgroundColor:"#ffffff",
    justifyContent:"space-around",
    
  },

});
export default custom;

