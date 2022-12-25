import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Locationpermissionbackground from "./Locationpermissionbackground";
import { darkGreen } from "./constantants";

const Locationpermission = () => {
  return (
    <Locationpermissionbackground>
      <View style={{ alignItems: "center", width: 380 }}>
        <Text style={{ marginTop: 350, fontWeight: "bold", fontSize: 18 }}>
          Location permission not enabled
        </Text>
        <Text style={{ marginTop: 10 }}>
          Sharing location permission helps us improve your ride
        </Text>
        <Text>booking and pickup experience</Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            backgroundColor: darkGreen,
            marginBottom: 10,
            borderRadius: 6,
            textAlign: "center",
            padding: 3,
            marginTop: 310,
            marginLeft: 40,
            marginRight: 20,
          }}
        >
          Access Location
        </Text>
      </TouchableOpacity>
    </Locationpermissionbackground>
  );
};

export default Locationpermission;
