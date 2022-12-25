import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Background  from './Background'
import { darkGreen } from './constantants'
import Btn from './Btn'

const Home = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal:40,marginVertical:100}}>
      <Text style={{color:'Black',fontSize: 22,marginTop:"110%",fontWeight:"1000",marginLeft:70,fontWeight:"bold",fontStyle:'italic'}}>      RickBook       </Text>
      <Text style={{color:'Black',fontSize: 22,fontWeight:"1000",marginLeft:70}}>Let's get started</Text>
      {/* <Text style={{color:'Black',fontSize: 15}}>Verify your acco nt using OTP</Text> */}
      {/* <Text style={{color:'Black',fontSize: 44}}>Let's Start</Text> */}
      {/* <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" /> */}
      {/* <Text style={{color:'Black',fontSize: 24,marginLeft:90,marginBottom:20,marginTop:415}}>Login button</Text>
      <Text style={{color:'Black',fontSize: 24,marginLeft:90}}>Login button</Text> */}
      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
      {/* <Text style={{color:'white',fontSize: 24,marginLeft:0,marginRight:0,backgroundColor:darkGreen,marginBottom:10,marginTop:115,borderRadius:8,textAlign:'center',padding:3}} >Login</Text> */}
      <Text style={{      color: "white",
                fontSize: 24,
                marginLeft: 0,
                marginRight: -80,
                backgroundColor: darkGreen,
                marginBottom: 10,
                borderRadius: 6,
                textAlign: "center",
                padding: 3,
                marginTop: 30,}} >Login</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
      <Text style={{color:'white',fontSize: 24,marginLeft:0,marginRight:-80,backgroundColor:'green',borderRadius:8,justifyContent:'center',alignItems:'center',textAlign:'center',padding:3}}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Help")}>
      <Text style={{color:'black',fontSize:13,marginLeft:2,marginRight:0,            textDecorationLine: "underline",}}>Need help?</Text>
      </TouchableOpacity>
      </View>
    </Background>
  )
}

export default Home