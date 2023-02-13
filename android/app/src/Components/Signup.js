
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Signup({navigation}) {
    const [name, setFullName] = useState("");
    const [Contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
     <View>
     <Text style={styles.Box}>SAYLANI WELFARE</Text> 
        <Text style={styles.Box1}>ONLINE DISCOUNT STORE</Text>
     </View>

     <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name."
          placeholderTextColor="#003f5c"
         
          onChangeText={(name) => setFullName(name)}
        /> 
      </View> 

     <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Contact."
          placeholderTextColor="#003f5c"
          value={Contact}
          onChangeText={(number) => setContact(number)}
        /> 
      </View> 
     
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity
    
      onPress={()=> navigation.navigate("Login")} 
       style={styles.loginBtn}>
        <Text style={styles.loginText}>Signup</Text> 
      </TouchableOpacity> 
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
},
  Box:{
    color:"#008000",
    fontWeight:"bold",
    fontSize:25,
    marginLeft:90,
    marginTop:40,
},
Box1:{
    color:"#0000FF",
    marginLeft:120,
    fontSize:13,
    marginTop:10,
},

 inputView: {
  borderRadius: 30, 
  },
  TextInput: {
    marginLeft:60,
   fontSize:15,
   marginTop:10,
  },
  forgot_button: {
    height: 30,
    
    marginLeft:140,
    marginTop:30,
  },
  loginText: {
    fontSize:20,
        color:"#fff",
        marginLeft:140,
        marginTop:50,
        backgroundColor:"#008000",
        width:120,
        padding:10,        
        paddingLeft:25,
        borderRadius:15,
  },
});