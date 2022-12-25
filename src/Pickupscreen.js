import { View, Text } from "react-native";
import React from "react";

const Pickupscreen = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        {/* <Text style={{color:'white',fontSize: 24,marginLeft:0,marginRight:0,backgroundColor:darkGreen,marginBottom:10,marginTop:115,borderRadius:8,textAlign:'center',padding:3}} >Login</Text> */}
        <Text
          style={{
            color: "white",
            fontSize: 24,
            marginLeft: 0,
            marginRight: -80,
            backgroundColor: darkGreen,
            marginBottom: 10,
            borderRadius: 6,
            textAlign: "center",
            padding: 3,
            marginTop: 30,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pickupscreen;
