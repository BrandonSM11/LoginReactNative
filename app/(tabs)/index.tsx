import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>welcome back we missed you</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="*******" />
      <View>
        <Text style={styles.paswwordMissed}>Forgot Password?</Text>
      </View>

      <Pressable
  onPress={() => alert("Botón presionado")}
  style={({ pressed }) => [
    styles.button,
    pressed && { opacity: 0.7 },
  ]}
>
  <LinearGradient
    colors={["#ff8c00", "#ff0080", "#dd00dd"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradient} 
  >
    <Text style={styles.buttonText}>Sign in</Text>
  </LinearGradient>
</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#360060",
  },
  title: {
    color: "#EFEFEF",
    fontSize: 40.33,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#A4A4A4",
    fontSize: 14.33,
    textAlign: "center",
    marginBottom: 50,
  },
  input: {
    width: 314,
    height: 55,
    backgroundColor: "#A4A4A4",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    marginLeft: 28,
    alignItems: "center",
  },
  label: {
    marginBottom: 10,
    marginLeft: 28,
    color: "#A4A4A4",
  },
  gradient: {
  flex: 1, // ocupa todo el Pressable
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15, // mismo que button
},

  forgot: {},
  paswwordMissed: {
    color: "#A4A4A4",
    marginBottom: 10,
  },

  button: {
    width: 314,
    height: 55,
    marginBottom: 10,
    marginLeft: 28,
    padding: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

{
  /* <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container} // usamos container aquí
    >
    </LinearGradient> */
}
