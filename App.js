import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './src/components/Home/HomeScreen';
import { ProfileScreen } from './src/components/Profile/ProfileScreen';
import { SignUpScreen } from './src/components/SignUp/signUp';
import { SignInScreen } from './src/components/SingIn/SignIn';

import { initializeApp } from 'firebase/app';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyCuUYx5wG6MW7qMP1Z5ZkvjuY8WrdIaQ8w",
  authDomain: "fbexe-226a8.firebaseapp.com",
  projectId: "fbexe-226a8",
  storageBucket: "fbexe-226a8.appspot.com",
  messagingSenderId: "149574184366",
  appId: "1:149574184366:web:d663e870e374dd85c0ec3f",
  measurementId: "G-1668HQLPNW"
};

const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='SignIn' component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
