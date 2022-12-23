import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Background  from './Background'
import { darkGreen } from './constantants'
import Btn from './Btn'

const Home = () => {
  return (
    <Background>
      <View style={{marginHorizontal:40,marginVertical:100}}>
      <Text style={{color:'Black',fontSize: 41}}>  Book Anywhere</Text>
      <Text style={{color:'Black',fontSize: 30}}>      Travel Hasselfree</Text>
      {/* <Text style={{color:'Black',fontSize: 44}}>Let's Start</Text> */}
      {/* <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" /> */}
      {/* <Text style={{color:'Black',fontSize: 24,marginLeft:90,marginBottom:20,marginTop:415}}>Login button</Text>
      <Text style={{color:'Black',fontSize: 24,marginLeft:90}}>Login button</Text> */}
      <Text style={{color:'white',fontSize: 24,marginLeft:90,marginRight:90,backgroundColor:darkGreen,marginBottom:10,marginTop:415,borderRadius:8,textAlign:'center',padding:3}}>Login</Text>
      <Text style={{color:'white',fontSize: 24,marginLeft:90,marginRight:90,backgroundColor:'green',borderRadius:8,justifyContent:'center',alignItems:'center',textAlign:'center',padding:3}}>SignUp</Text>
      </View>
    </Background>
  )
}

export default Home