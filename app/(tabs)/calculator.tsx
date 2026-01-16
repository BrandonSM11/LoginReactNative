import { useCalculator } from "@/hooks/useCalculator";
import React, { useState } from "react";
import {
  Pressable,
StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";


interface ButtonProps {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export default function Calculator() {
  


  const { value, setValue } = useCalculator();
  
const Button = ({ text, style, textStyle = {}, onPress }: ButtonProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      styles.button,
      style,
      pressed && { opacity: 0.6 },
    ]}
  >
    <Text style={[styles.buttonText, textStyle]}>{text}</Text>
  </Pressable>
);

  
const handleNumberPress = (num: string) => {
  if (value.includes('.') && num === '.') return
  
  if (value === "0") {
    setValue(num);
  } else {
    setValue(value + num);
  }
};

  const handleClear = () => {
    setValue("0");
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.displayContainer}>
        <Text style={styles.display} numberOfLines={1} adjustsFontSizeToFit>
          {value}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>

        <View style={styles.row}>
          <Button text="C" style={styles.functionButton} onPress={handleClear} />
          <Button text="+/-" style={styles.functionButton} onPress={() => {}} />
          <Button text="%" style={styles.functionButton} onPress={() => {}} />
          <Button text="÷" style={styles.operatorButton} onPress={() => {}} />
        </View>

        <View style={styles.row}>
          <Button text="7" style={styles.numberButton} onPress={() => handleNumberPress("7")} />
          <Button text="8" style={styles.numberButton} onPress={() => handleNumberPress("8")} />
          <Button text="9" style={styles.numberButton} onPress={() => handleNumberPress("9")} />
          <Button text="×" style={styles.operatorButton} onPress={() => {}} />
        </View>

        <View style={styles.row}>
          <Button text="4" style={styles.numberButton} onPress={() => handleNumberPress("4")} />
          <Button text="5" style={styles.numberButton} onPress={() => handleNumberPress("5")} />
          <Button text="6" style={styles.numberButton} onPress={() => handleNumberPress("6")} />
          <Button text="-" style={styles.operatorButton} onPress={() => {}} />
        </View>

        <View style={styles.row}>
          <Button text="1" style={styles.numberButton} onPress={() => handleNumberPress("1")} />
          <Button text="2" style={styles.numberButton} onPress={() => handleNumberPress("2")} />
          <Button text="3" style={styles.numberButton} onPress={() => handleNumberPress("3")} />
          <Button text="+" style={styles.operatorButton} onPress={() => {}} />
        </View>

        <View style={styles.row}>
          <Button text="0" style={styles.zeroButton} textStyle={styles.zeroText} onPress={() => handleNumberPress("0")} />
          <Button text="." style={styles.numberButton} onPress={() => handleNumberPress(".")} />
          <Button text="=" style={styles.operatorButton} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 60,
  },
  displayContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  display: {
    color: "#FFFFFF",
    fontSize: 80,
    fontWeight: "200",
  },
  buttonsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  button: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 36,
    fontWeight: "400",
    color: "#FFFFFF",
  },
  numberButton: {
    backgroundColor: "#333333",
  },
  functionButton: {
    backgroundColor: "#A5A5A5",
  },
  operatorButton: {
    backgroundColor: "#FF9F0A",
  },
  zeroButton: {
    backgroundColor: "#333333",
    width: 182,
    borderRadius: 42.5,
  },
  zeroText: {
    alignSelf: "flex-start",
    paddingLeft: 32,
  },
});