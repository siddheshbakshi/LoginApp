import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,TouchableWithoutFeedback} from 'react-native';
import ButtonComponent from '../CustomComponents/ButtonComponent';
import Icon from 'react-native-vector-icons/Entypo';


const RegistrationScreen=()=>{
    const[passwordShown,setPasswordShown]=useState(true);
    const[confirmPassShown,setConfirmPassShown]=useState(true);
    const PasswordVisibility=()=>{
        setPasswordShown(!passwordShown);
    }
    const ConfirmPassVisibility=()=>{
        setConfirmPassShown(!confirmPassShown);
    }
    return(
        <View style={styles.mainView}>
        <View style={styles.textView}>
        <Text style={styles.MainTitleStyle}>Registration Page</Text>
    </View>
    <View style={styles.InputArea}>
        <View style={{paddingBottom:15,flexDirection:'row'}}>
    <TextInput
    style={styles.input}
    placeholder="Enter your First name"
  />
  <TextInput
    style={styles.input}
    placeholder="Enter your Last name"
  />
  </View>
  <View style={{paddingBottom:15,flexDirection:'row'}}>
 <View style={{marginRight:18}}>
  <TextInput
    style={styles.input}
    placeholder="Enter your Email Id"
  />
  </View>
   <TextInput
    style={styles.input}
    placeholder="Confirm your email id"
  />
  </View>
  <View style={{flexDirection:'row',paddingBottom:15,margin:15,justifyContent:'space-around'}}>
  <View style={styles.passwordstyle1}>
   <TextInput
    
secureTextEntry={passwordShown?true:false}
    placeholder=" password"
  />
  <TouchableWithoutFeedback onPress={PasswordVisibility}>
  <View style={{paddingTop:8,paddingLeft:55}}>
  <Icon name={passwordShown?"eye-with-line":"eye"}  size={18} color="black"/>
  </View>
  </TouchableWithoutFeedback>
  </View>
  <View style={styles.passwordstyle2}>
   <TextInput
    
secureTextEntry={confirmPassShown?true:false}
    placeholder="Confirm Password"
  />
  <TouchableWithoutFeedback onPress={ConfirmPassVisibility}>
  <View style={{paddingTop:8,paddingLeft:10}}>
  <Icon name={confirmPassShown?"eye-with-line":"eye"}  size={18} color="black"/>
  </View>
  </TouchableWithoutFeedback>
  </View>
  </View>
    </View>
    <View style={styles.ButtonArea}>
    <TouchableOpacity onPress={()=>{}}>
            <View style={styles.ButtonStyle}>
                <Text style={styles.ButtonText}> Register</Text>
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
      marginLeft:50,
      //paddingTop:70
    
      
    },
    mainView:{
        flex:1,
        
    },
    textView:{
        flex:0.5,
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
        flex:1.5,
        justifyContent:'center',
        marginTop:55
        //paddingBottom:78
    },
    passwordstyle1:{
        flexDirection:'row',
        height: 40,
       marginRight:15,
        borderWidth: 1,
        width:180
    },
    passwordstyle2:{
        flexDirection:'row',
        height: 40,
    
        borderWidth: 1,
        width:180
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
        fontSize:22,
        color:'green'
    }
    });
export default RegistrationScreen;