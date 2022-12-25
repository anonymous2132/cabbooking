import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const Locationpermissionbackground = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("./Assets/locationbg.jpg")}
        style={{
          height: "65%",
          width: "100%",
          marginTop: 35,
        }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default Locationpermissionbackground;
