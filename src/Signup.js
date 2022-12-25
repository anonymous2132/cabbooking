import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import { darkGreen } from "./constantants";
import PhoneInput from "react-native-phone-number-input";
// import Background2 from "./Background2";

const Signup = (props) => {
  return (
    // <Background2>
    <View style={{ alignItems: "center", width: 380 }}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "darkgreen",
            marginLeft: 18,
            marginVertical: 60,
          }}
        >
          Happy to see you here.
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 37,
            fontWeight: "bold",
            // marginVertical: 60,
            textDecorationLine: "underline",
          }}
        >
          Register
        </Text>
        {/* <Text>Crete a new account.</Text> */}
        {/* <Text style={{ fontSize: 18 }}>Login to your account</Text> */}
        <View style={{ marginVertical: 40 }}>
          <PhoneInput />
          <Field placeholder="Firstname" keyboardType={"email-address"} />
          <Field placeholder="Lastname" secureTextEntry={true} />
          <Field placeholder="Email/Username" keyboardType={"email-address"} />
          <Field placeholder="Contact number" keyboardType={"email-address"} />
          <Field placeholder="Password" keyboardType={"email-address"} />
          <Field
            placeholder="Confirm password"
            keyboardType={"email-address"}
          />

          {/* secure text entry for password hiding */}
          {/* <View>
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
            </View> */}
          <TouchableOpacity
            onPress={() =>
              alert(
                "Account created. Happy travelling.   Now you can login with the details you provided."
              )
            }
            //   onPress={() => props.navigation.navigate("Login")}
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
              Signup
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: darkGreen,
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // {/* </Background2> */}
  );
};

export default Signup;
