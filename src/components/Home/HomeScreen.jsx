import React from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const HomeScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor:'#1D1D1D',
  
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
      color:'#D70BE8'
    },
    buttonContainer: {
      width: '80%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 100,
      alignItems:'center',
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <View style={styles.buttonContainer}>

        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}> 
          <Text style={styles.font} >CADASTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.font}>FAZER LOGIN</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
};

export { HomeScreen };
