import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { StackNavigator } from "react-navigation";

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={{ margin: 10, backgroundColor: "orange", padding: 10 }}
      >
        <Text style={{ color: "#ffffff" }}>Home</Text>

      </TouchableOpacity>
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
    };
  }

  login = () => {
    const { userName, userPassword } = this.state;

    if (!userName.trim()) {
      alert('Please Enter Name');
      
      return;
    }

    // else if(reg.test(userName) === false)
    // {
    // //alert("Email is Not Correct");
    // this.setState({username:'Name is Not Correct'})
    // return false;
    //   }

    if (userPassword == "") {
      //alert("Please enter Email address");
      this.setState({ password: "Please enter Password" });
    }
    else 
    {
    //alert("Email is Not Correct");
    this.setState({userPassword:""})
     
      // const formdata =new FormData();
      // formdata.append('username','9354554564');
      // formdata.append('password','shivam');
      fetch("http://192.168.1.161:5000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: userPassword,
        }),

        // we will pass our input data to server
      })
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson.status == true){
          		 // redirect to profile page
          		 alert("Successfully Login");
          		 this.props.navigation.navigate("home");
          	 }else{
          		 alert(responseJson.massage);
          	 }
           })
        .catch((error) => {
          console.error(error);
        });
    }

    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ padding: 10, margin: 10, color: "red" }}>
          {this.state.username}
        </Text>
        <TextInput
          placeholder="Enter name"
          style={{ width: 300, margin: 10 }}
          onChangeText={(userName) => this.setState({ userName })}
        />
        <Text style={{ padding: 10, margin: 10, color: "red" }}>
          {this.state.password}
        </Text>
        <TextInput
          placeholder="Enter Password"
          style={{ width: 300, margin: 10 }}
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />
        <TouchableOpacity
          onPress={this.login}
          style={{
            width: 300,
            padding: 10,
            backgroundColor: "magenta",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

AppRegistry.registerComponent("login", () => Login);
