
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 // percentage and result key is coming from API
const DisplayLove = (prop)=>{

    console.log("tesssdsst")

   
    return (
        <View style = {styles.container}>

            <Text style = {styles.text}> {prop.data.percentage}</Text> 
           
            <Text style = {styles.text}> {prop.data.result}</Text>
        </View>
    )

}

export default DisplayLove
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
     
    },
    text:{
        fontSize:30,
        textAlign:'center'

    }
  });