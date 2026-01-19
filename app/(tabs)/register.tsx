import { loginPost } from "@/services/users";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function RegisterScreen() {
//   const [loanding, setloading] = useState(false);
//   const [userEmail, setEmail] = useState("");
//   const [userPassword, setPassword] = useState("");
const [formData, setFormData] = useState<FormData>({
        cc: '',
        name: '',
        tel: '',
        email: '',
        pass: ''
    })
    const route = useRouter();

    const handleSubmit = async () => {
//     setloading(true);
//     try {
//       const data = await loginPost(userEmail, userPassword);
//       console.log(data);
//       if (data.data) {
//         Alert.alert("Login exitoso");
//         route.replace("/(tabs)/calculator");
//       }
//     } catch (error: any) {
//       if (error.response?.status === 401) {
//         Alert.alert("Credenciales erroneas");
//       } else {
//         Alert.alert("Error", "Error en el servidor. Intenta de nuevo");
//       }
//     } finally {
//       setloading(false);
//     }
    };

    return (
        <LinearGradient
        colors={["#360060", "#1a0030", "#0d001a"]}
        style={styles.container}
        >
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>welcome back we missed you</Text>

        <Text style={styles.label}>CC</Text>
        <TextInput
            style={styles.input}
            placeholder="4541111888"
            placeholderTextColor="#666"
        
        />

        <Text style={styles.label}>Name</Text>
        <TextInput
            style={styles.input}
            placeholder="Brandon"
            placeholderTextColor="#666"

        />
        <Text style={styles.label}>NumberPhone</Text>
        <TextInput
            style={styles.input}
            placeholder="Brandon"
            placeholderTextColor="#666"

        />
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            placeholder="Brandon"
            placeholderTextColor="#666"

        />
        <Text style={styles.label}>Password</Text>
        <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
            placeholderTextColor="#666"

        />

    

        <Pressable
            onPress={handleSubmit}
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}
        >
            <LinearGradient
            colors={["#9C3FE4", "#C65647"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
            >
            <Text style={styles.buttonText}>Register</Text>
            </LinearGradient>
        </Pressable>

        <Pressable
        onPress={() => route.replace("/(tabs)/index")}
        style={({ pressed }) => pressed && { opacity: 0.7 }}
            > 
            <View style={styles.dontAccountContainer}>
            <Text style={styles.dontAccount}> Logeate!</Text>
            </View>
        </Pressable>

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
        height: 40,
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
        marginTop: 15,
        overflow: "hidden",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    dontAccount: {
        color: "#A4A4A4",
        marginBottom: 20,
    },

    dontAccountContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    
}
);
