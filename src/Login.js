import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen } from "./constantants";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 380 }}>
        <Text
          style={{
            color: "black",
            fontSize: 37,
            fontWeight: "bold",
            marginVertical: 60,
            textDecorationLine: "underline",
          }}
        >
          Login
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 40, fontWeight: "bold", color: "darkgreen" }}
          >
            Welocme Back
          </Text>
          <Text style={{ fontSize: 18 }}>Login to your account</Text>
          <View style={{ marginVertical: 290 }}>
            <Field placeholder="Email/Username" />
            <Field placeholder="Password" secureTextEntry={true} />
            {/* secure text entry for password hiding */}
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Forgotpass")}
              >
                <Text
                  style={{
                    color: darkGreen,
                    fontWeight: "bold",
                    fontSize: 13,
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => alert("Logged In.Happy and safe travelling.")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  marginLeft: 0,
                  marginRight: 0,
                  backgroundColor: darkGreen,
                  marginBottom: 10,
                  borderRadius: 6,
                  textAlign: "center",
                  padding: 3,
                  marginTop: 10,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Signup")}
              >
                <Text
                  style={{
                    textDecorationLine: "underline",
                    color: darkGreen,
                    fontWeight: "bold",
                  }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
