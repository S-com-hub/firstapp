// import React from 'react';
// import { View } from 'react-native';
// import Routes from './components/Routes';

// const App = () => {

//   return (
//     <View style={{ flex: 1 }}>
//       <Routes />
//     </View>
//   );
// };

// export default App;

// import * as React from "react";
// import { Settings, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import home from "./components/home";
// import category from "./components/category";
// import createe from "./components/createe";
// import brandinfo from "./components/brandinfo";
// import menu from "./components/menu";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import ProductDetails from"./components/ProductDetails";

// // import 'react-native-gesture-handler';
//  const Tab = createBottomTabNavigator();
//  const Drawer = createDrawerNavigator();

// export default function App() {
//   return <NavigationContainer>
  

// <Tab.Navigator
//   screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       let Home;

//       if (route.name === "Home") {
//         Home = focused
//           ? "ios-information-circle"
//           : "ios-information-circle-outline";
//       } else if (route.name === "Settings") {
//         Settings = focused ? "ios-list-box" : "ios-list";
//       }

//       // You can return any component that you like here!
//       // return <Ionicons name={Home} size={size} color={color} />;
//     },
//     tabBarActiveTintColor: "blue",
//     tabBarInactiveTintColor: "gray",
//   })}
// >
//   <Tab.Screen name="Home" component={home} />
//   <Tab.Screen name="category" component={category} />
//   <Tab.Screen name="create" component={createe} />
//   <Tab.Screen name="brandinfo" component={brandinfo} />
//   <Tab.Screen name="menu" component={menu} />
// </Tab.Navigator>;
//   </NavigationContainer>;
// }


import React, { component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from "react-native";
import Login from "./components/Login";
import home from "./components/home";

import festival from "./components/festival";
// import brandinfo from "./components/brandinfo";
import createe from "./components/createe";
import category from "./components/category";
import custom from "./components/custom";
import signup from "./components/signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import screen1 from "./components/screen1";
import screen2 from "./components/screen2";
import brandinfo from "./components/brandinfo";
import Login2 from "./components/Login2";

import Account from "./components/Account";


 const Stack = createNativeStackNavigator();
 const Drawer = createDrawerNavigator();

 function DrawerRoutes() {
  return (
    
    
      <Drawer.Navigator initialRouteName="Account">
        <Drawer.Screen name="home" component={home} />
        <Drawer.Screen name="screen1" component={screen1} />
        <Drawer.Screen name="screen2" component={screen2} />
      </Drawer.Navigator>
   
  );
};
const other = () => {
  return (
    <KeyboardAvoidingView
      
      style={{flex: 1}}
      enabled>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <LoginView />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
 function App() {
  
   return (
   <NavigationContainer>
    
      <Stack.Navigator screenOptions={{headerShown: false}}initialRouteName="home">
     
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Login2" component={Login2} />
       
        <Stack.Screen
          name="home"
          component={DrawerRoutes}
          screenOption={{}}
        />
        <Stack.Screen name="festival" component={festival} />
        <Stack.Screen name="signup" component={signup} />
       <Stack.Screen name="createe" component={createe}/> 
        {/* <Stack.Screen name="brandinfo" components={brandinfo}/>  */}
        <Stack.Screen name="category" component={category}/>
        <Stack.Screen name="custom" component={custom}/>
    
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="brandinfo" component={brandinfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6"
  },
});
export default App;