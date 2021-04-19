import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Button, TextInput} from 'react-native';

const ButtonComponent=props=>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.ButtonStyle}>
                <Text style={styles.ButtonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
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
})
export default ButtonComponent;