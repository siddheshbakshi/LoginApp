import React, { useState } from 'react';
import { View ,Text,StyleSheet, TextInput,Button,Alert, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const LoginPage=({ navigation })=>{

   const[passwordShown,setPasswordShown]=useState(true);
   const PasswordVisibility=()=>{
       setPasswordShown(!passwordShown);
   }

    const AlertTest=()=>{
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
    }
    return(
        <View style={styles.mainView}>
            <View style={styles.textView}>
            <Text style={styles.MainTitleStyle}>Login Page</Text>
        </View>
        <View style={styles.InputArea}>
            <View style={{paddingBottom:15}}>
        <TextInput
        style={styles.input}
        placeholder="Enter your user name"
      />
      </View>
      <View style={styles.passwordstyle}>
       <TextInput
        
  secureTextEntry={passwordShown?true:false}
        placeholder="Enter your password"
      />
      <TouchableWithoutFeedback onPress={PasswordVisibility}>
      <View style={{paddingTop:7,paddingRight:10}}>
      <Icon name={passwordShown?"eye-with-line":"eye"} size={24} color="black"/>
      </View>
      </TouchableWithoutFeedback>
      </View>
        </View>
        <View style={styles.ButtonArea}>
        <TouchableOpacity onPress={AlertTest}>
            <View style={styles.ButtonStyle}>
                <Text style={styles.ButtonText}>Sign In</Text>
            </View>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <View style={{marginTop:15}}>
          <Text style={{fontSize:20,color:'#ff0000'}}>Want to register?</Text>
          </View>
      </TouchableOpacity>
        </View>
        </View>
    );
}

const styles=StyleSheet.create({
MainTitleStyle:{
  color:'black',
  fontSize:35,
  marginLeft:100,
  paddingTop:70

  
},
mainView:{
    flex:1,
    
},
textView:{
    flex:1,
   //backgroundColor:'green',
    justifyContent:'center',

},
input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
},
ButtonArea:{
   // backgroundColor:'red',
    flex:1,
    flexDirection:'row',
    
},
InputArea:{
    //backgroundColor:'yellow',
    flex:1,
    justifyContent:'center',
    //paddingBottom:78
},
passwordstyle:{
    flexDirection:'row',
    height: 40,

    margin: 12,
    borderWidth: 1,
    justifyContent:'space-between'
},
ButtonStyle:{
    //backgroundColor:'purple',
    paddingHorizontal:30,
    paddingVertical:12,
    marginLeft:25,
    alignItems:'center',
    borderRadius:5,
    width:150,
    marginRight:40
},
ButtonText:{
    fontSize:25,
    color:'green'
}
});
export default LoginPage;