import React from 'react'
import { View, StyleSheet } from 'react-native';

export default function box() {
return (
    
    <View style={styles.container}>

        <View style={[styles.box, styles.box]}></View>
        <View style={[styles.box, styles.box1]}></View>
        <View style={[styles.box, styles.box2]}></View>

    </View>
    
)
}

const styles = StyleSheet.create({
    
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
},
box:{
    backgroundColor:'blue',
    flex:1
},
box1:{
        backgroundColor:'red',
    flex:1
},
box2:{  backgroundColor:'green',
    flex:1
}
});


//    <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Entrar</Text>
//       </TouchableOpacity>

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


  // const handleLogin = () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Completa todos los campos');
  //     return;
  //   }

  // };

   // value={email}
          // onChangeText={setEmail}

                  // value={password}
                  // onChangeText={setPassword}