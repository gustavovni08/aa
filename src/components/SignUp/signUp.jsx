import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor:'#1d1d1d'
    },
    input: {
      borderWidth: 1,
     backgroundColor:'#ffff',
      borderRadius: 4,
      padding: 5,
      marginVertical: 10,
      width: '80%',
    },

        button:{
      backgroundColor:'#D70BE8',
      padding:5,
      width:150,
      alignItems:'center',
      borderRadius: 10,
      
    },

    font:{

      color:'#ffff',
      fontWeight:'bold',


    },

  });
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Register successful
      navigation.navigate('Home')
    }) 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Endereço de e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />


      <Button title="Cadastrar" onPress={handleSignUp} />
    
    </View>
  );
};

export { SignUpScreen };
