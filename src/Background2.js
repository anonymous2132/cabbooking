import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const Background2 = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("./Assets/signupbg.jpg")}
        style={{
          height: "100%",
          width: "110%",
          //   marginTop: 35,
          //   blurRadius: {55},
        }}
      />
      <View style={{ position: "absolute" }}>{children}</View>
    </View>
  );
};

export default Background2;
