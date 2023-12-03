import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  Keyboard,
  StyleSheet,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ThemeColor } from "../../assets/Utils";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

const UserDashboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyMargin, setkeyMargin] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
        setkeyMargin(300)
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
        setkeyMargin(0)
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  console.log(keyMargin)
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      contentContainerStyle={{ flexGrow: 1, paddingBottom: keyboardHeight }}
    >
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        {/* Header */}
        <StatusBar backgroundColor={ThemeColor} />
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome name="bars" size={30} color={ThemeColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cart" size={30} color={ThemeColor} />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>Delicious</Text>
          <Text style={styles.titleText}>food for you</Text>
        </View>

        {/* Search Input */}
        <View style={[styles.search, {marginTop:{keyMargin}}]}>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>

        {/* Category */}
        <View style={styles.category}>
          <Text>Food</Text>
          <Text>Food</Text>
          <Text>Food</Text>
          <Text>Food</Text>
        </View>

        {/* Items */}
        <View>
          <ScrollView horizontal contentContainerStyle={styles.itemsContainer}>
            {/* Replace with your item components */}
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../assets/icons/logo.png")}
              />
              <Text>Name</Text>
              <Text>Desc</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../assets/icons/logo.png")}
              />
              <Text>Name</Text>
              <Text>Desc</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require("../../assets/icons/logo.png")}
              />
              <Text>Name</Text>
              <Text>Desc</Text>
            </View>
            {/* ... More items */}
          </ScrollView>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="home" size={27} color={ThemeColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="heart" size={27} color={ThemeColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="history" size={27} color={ThemeColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user" size={27} color={ThemeColor} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 40,
  },
  title: {
    flex: 2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "800",
    color: ThemeColor,
  },
  search: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    padding: 5,
    backgroundColor: "white",
    paddingLeft: 20,
    borderRadius: 12,
    marginTop: 10,
    width: "100%",
  },
  category: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  itemsContainer: {
    marginTop: 10,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingLeft: 20,
  },
  item: {
    height: "75%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
  },
  itemImage: {
    marginBottom: 10,
  },
  bottomNav: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
  },
});

export default UserDashboard;
