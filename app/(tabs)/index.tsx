import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <LinearGradient
      colors={["#360060", "#1a0030", "#0d001a"]}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>welcome back we missed you</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Username"
        placeholderTextColor="#666"
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput 
        style={styles.input} 
        placeholder="*******"
        placeholderTextColor="#666"
        secureTextEntry
      />
      
      <View style={styles.forgotContainer}>
        <Text style={styles.passwordMissed}>Forgot Password?</Text>
      </View>

      <Pressable
        onPress={() => alert("Botón presionado")}
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.7 },
        ]}
      >
        <LinearGradient
          colors={["#9C3FE4", "#C65647"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </LinearGradient>
      </Pressable>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.dividerLine} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        
        <Pressable 
          style={({ pressed }) => [
            styles.socialButton,
            pressed && { opacity: 0.7 }
          ]}
          onPress={() => alert("Google")}
        >
          <Text style={styles.socialIcon}>G</Text>
        </Pressable>

        {/* Apple */}
        <Pressable 
          style={({ pressed }) => [
            styles.socialButton,
            pressed && { opacity: 0.7 }
          ]}
          onPress={() => alert("Apple")}
        >
          <Text style={styles.socialIcon}>A</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => [
            styles.socialButton,
            pressed && { opacity: 0.7 }
          ]}
          onPress={() => alert("Facebook")}
        >
          <Text style={styles.socialIcon}>F</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
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
    backgroundColor: "rgba(164, 164, 164, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(164, 164, 164, 0.3)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    marginLeft: 28,
    color: "#EFEFEF",
  },
  label: {
    marginBottom: 10,
    marginLeft: 28,
    color: "#A4A4A4",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginRight: 28,
  },
  passwordMissed: {
    color: "#A4A4A4",
    marginBottom: 20,
  },
  button: {
    width: 314,
    height: 55,
    marginLeft: 28,
    borderRadius: 15,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  // Divider styles
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 28,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(164, 164, 164, 0.3)",
  },
  dividerText: {
    color: "#A4A4A4",
    marginHorizontal: 15,
    fontSize: 14,
  },
  
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginHorizontal: 28,
  },
  socialButton: {
    width: 80,
    height: 65,
    backgroundColor: "rgba(60, 60, 60, 0.8)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(164, 164, 164, 0.2)",
  },
  socialIcon: {
    fontSize: 32,
    color: "#FFFFFF",
  },
});