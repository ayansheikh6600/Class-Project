import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeColor } from "../../assets/Utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupForm from "../../components/SignupForm";
import LoginForm from "../../components/LoginForm";
import ImagePicccker from "../../components/ImagePicker";
import { app } from "../../Firebase/firebase";


const Tab = createBottomTabNavigator();

const Login = ({ navigation }) => {
  const [loginComponet, SetloginComponet] = useState(true);

  console.log(app)

  return (
    <View
      style={{
        width: "100",
        height: "100",
        flex: 1,
        backgroundColor: ThemeColor,
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: "white",
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
          },
        ]}
      >
        <Image style={{}} source={require("../../assets/icons/logo.png")} />

        <View
          style={{
            position: "absolute",
            bottom: 10,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Text style={{padding:10, fontSize:18, fontWeight:"600"}} onPress={() => SetloginComponet(true)}>Login</Text>
          <Text style={{padding:10, fontSize:18, fontWeight:"600"}} onPress={() => SetloginComponet(false)}>Signup</Text>
        </View>
      </View>
      <View
        style={[
          { flex: 2, alignItems: "center", justifyContent: "center" },
          {},
        ]}
      >
        <ScrollView
          style={{
            width: "90%",
          }}
        >
          <View style={{marginTop:60, alignItems: "center" }}>
            {loginComponet ? (
              <LoginForm/>
            ) : (
              <SignupForm navigation={navigation}/>
            )}
          </View>
        </ScrollView>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  AllInputs :{
    paddingLeft: 10,
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    fontSize:17
  }
});

export default Login;
