
import React from "react";
import {StyleSheet, Text, View,Image, SafeAreaView, TouchableOpacity,} from "react-native"

export default function Homes({navigation}) {
    return (

       
        <SafeAreaView>
      
      <View>
      <Image
        style={styles.stretch}
        source={require('../images/Capture.png')}
      />
    </View>
        
      <View style={styles.container}>
        <Text style={styles.Box}>SAYLANI WELFARE</Text> 
        <Text style={styles.Box1}>ONLINE DISCOUNT STORE</Text>
       
      </View> 

      <View>
      <TouchableOpacity onPress={()=> navigation.navigate("Signup")} style={styles.button} >
        
        <Text style={styles.button1}>Get Started</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
    
      backgroundColor: '#fff',
      color:"black",
    marginBottom:50,
    },

    Box:{
        color:"#008000",
        fontWeight:"bold",
        fontSize:30,
        marginLeft:80,
        
    },
    Box1:{
        color:"#0000FF",
        marginLeft:110,
        fontSize:16,
        marginTop:10,
    },

    button1:{
        fontSize:20,
        color:"#fff",
        marginLeft:140,
        marginTop:80,
        backgroundColor:"#008000",
        width:150,
        padding:10,        
        paddingLeft:25,
        borderRadius:15,
    },

    stretch:{
        marginLeft:100,
        marginTop:50,
        
    }
  });