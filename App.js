// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// In App.js in a new project

import * as React from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Login from "./src/Login";
import Signup from "./src/Signup";
import Forgotpass from "./src/Forgotpass";
import Help from "./src/Help";
import Locationpermission from "./src/Locationpermission";
import Pickupscreen from "./src/Pickupscreen";
import PhoneInput from "react-native-phone-number-input";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgotpass" component={Forgotpass} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen
          name="Locationpermission"
          component={Locationpermission}
        />
        <Stack.Screen name="Pickupscreen" component={Pickupscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
