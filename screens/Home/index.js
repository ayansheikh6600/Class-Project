import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeBackColor, ThemeColor } from "../../assets/Utils";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (

    <SafeAreaView>
      <StatusBar/>
      <View style={{backgroundColor:ThemeBackColor, height:"100%"}}>
        <View style={{flex:3, alignItems:"center", justifyContent:"center",backgroundColor:ThemeBackColor}}>
          
          <Image source={require("../../assets/icons/logo.png")}/>
          <Text style={{fontSize:30}}>Food For EveryOne</Text>
        </View>
        <View style={{flex:5, justifyContent:"center", alignItems:"center",backgroundColor:ThemeBackColor}}>
          <Image source={require("../../assets/icons/home.png")}/>
        </View>
        <View style={{flex:1,justifyContent:"center", alignItems:"center",backgroundColor:ThemeBackColor }}>
        <TouchableOpacity
                    style={{
                      padding: 10,
                      borderRadius: 100,
                      backgroundColor: ThemeColor,
                      width:"90%"
                    }}
                    onPress={() => navigation.navigate('Auth')}
                  >
                    <Text style={{ color: "white", textAlign: "center",fontWeight:"bold" }}>
                      Get Started
                    </Text>
                  </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default Home;
