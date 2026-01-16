import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function TestConnection() {
  useEffect(() => {
    // Llamada de prueba a tu API
    fetch("https://taskload-one.vercel.app/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "daves.hb@hotmail.com", pass: "123456" }),
    })
      .then(res => res.json())
      .then(data => console.log("Respuesta API:", data))
      .catch(err => console.log("Error fetch:", err));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Probando conexión API...</Text>
    </View>
  );
}
