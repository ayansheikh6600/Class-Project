import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { StatusBar } from "react-native";

const OtpVerify = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{height:"100%"}}>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image source={require("../../assets/icons/logo.png")} />
          <Text style={{ fontSize: 35, fontWeight: "700" }}>Food App</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center"}}>
          <View
            style={{ width: "90%", height: "100%", gap: 20}}
          >
            <View>
              <TextInput
                style={{ borderWidth: 2, padding: 10, borderRadius: 10 }}
                placeholder="Enter OTP"
              />
              <Text>We Send Otp code on your email address</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={()=>navigation.navigate("dashborad")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      
      </ScrollView>

  );
};

export default OtpVerify;
