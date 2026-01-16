import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";

export const calculatorClase = () => {
  return (
    <View style={styles.container}>
        <Text>Calculator Clase</Text>
    </View>
  )
}
const styles = StyleSheet.create({

    container:{
        flex:1,
    backgroundColor:'#000',
    }

});