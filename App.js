import React, { useState } from 'react';
import { Text, View,StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import HeaderComponent from './components/HeaderComponent';

const YourApp = () => {
  const [username, setUsername] = useState("hello")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <ScrollView>
      <View>
        <HeaderComponent
          customHeight={200}
          customTop={140}
          customBgColor="#00aaff"
          customWavePattern="M0,224L80,224C160,224,320,224,480,192C640,160,800,96,960,112C1120,128,1280,224,1360,272L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />

        <View style={styles.textFieldGroup}>
          <TextInput  selectionColor="#00aaff" 
                      placeholder="Enter Username" 
                      style={styles.textField}
                      
                      onChangeText={(text)=>setUsername(text)}/>
          <TextInput  selectionColor="#00aaff" 
                      placeholder="Enter Email"
                      keyboardType="email-address" 
                      style={styles.textField} 
                      
                      onChangeText={(text)=>setEmail(text)}/>
          <TextInput  selectionColor="#00aaff" 
                      placeholder="Enter Password" 
                      secureTextEntry style={styles.textField} 
                      
                      onChangeText={(text)=>setPassword(text)}/>
          <Pressable  title="Register" 
                      style={styles.button} 
                      onPress={()=>console.log(username,email,password)}
                      >
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <View style={{flexDirection:'row',justifyContent:"center"}}>
          <Text style={{color:"rgb(81,81,81)",fontSize:18}}>Already a User? </Text>
          <Text style={{color:"#00aaff",fontSize:18}}>Sign in</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

 const styles=StyleSheet.create({
    wave:{},
    textFieldGroup:{marginTop:100,
                    marginLeft:20,
                    marginRight:20},
    textField:{backgroundColor:"rgb(242,242,242)",
                borderRadius:50 ,
                fontSize:18,
                paddingStart:20,
                marginBottom:40,
                borderWidth:1,
                color:"rgb(81,81,81)",
                
                borderColor:"rgb(194,194,194)"},
      button:{backgroundColor:"#00aaff",
              borderRadius:50 ,
              fontSize:18,
              paddingStart:20,
              marginBottom:10,
              height:50,
              display:'flex',
              justifyContent:"center",
              alignItems:"center"
            },
      buttonText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff"
      }      

})

export default YourApp;