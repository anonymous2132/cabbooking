import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("./Assets/rickshaw.jpg")} style={{ height: "65%", width: "100%",marginTop:35,resizeMode: 'stretch'}} />
      <View style={{position: "absolute"}}>
        {children}
      </View>
    </View>
  )
}

export default Background