import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Button,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  const image2 = [
    { 
      name:"FESTIVAL1",
      image: [
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
        "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-city-900x288.jpg",
      ],
    },
];

export default function festival({ route }) {
  const { itemId,itemDate,itemimage,itemid } = route.params;
  alert(itemid)
  const custom =()=> {
    const [data,setData]=useState([]);
    const [loding,setloding]=useState(true);
    const url = "http://192.168.1.76:5000/catagorydata?catid="+itemId;
    useEffect(()=>{
      fetch(url)
      .then((res)=>res.json())
  
      .then((json)=>setData(json))
      .catch((err)=>console.error(err))
      .finally(()=>setloding(false))
    },[])
    const navigation = useNavigation();
   
    var imageurl="http://192.168.1.76:5000/catagory/"
  }

  // const { propsst } = this.props;



      
      
 

  // alert(propsst);
  
  return (
    <ScrollView style={styles.container}>
     <Text>{JSON.stringify(itemId)}</Text>
     <Text>{JSON.stringify(itemDate)}</Text>
     <Text>{JSON.stringify(itemimage)}</Text>
      
          <Text style={styles.TExt}></Text>
        <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
          
          {image2[0].image.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image2} />
          ))}
        </View>
       
        </ScrollView>
  )
};
const styles = StyleSheet.create({
  container:{
 
  },
    TExt:{
        fontSize:15,
        marginTop:10,
        fontWeight:"bold",
        
      },
      image2: {
        width: 110,
        height: 100,
   
    
        // resizeMode: "cover",
        marginTop: 10,
        // marginLeft:5,
        borderRadius: 10,
        
      },

});