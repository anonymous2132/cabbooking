import { TextInput } from "react-native";
import React from "react";
import { darkGreen } from "./constantants";

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: 220,
        padding: 7,
        placeholderTextColor: { darkGreen },
        backgroundColor: "rgb(220,220,220)",
        marginVertical: 10,
      }}
    ></TextInput>
  );
};

export default Field;
