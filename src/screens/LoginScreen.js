import React, { useState, useRef, useEffect } from 'react';

import { Animated, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { LinearGradient } from 'expo-linear-gradient'; // Import for Gradient background



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation value



  useEffect(() => {

    Animated.timing(fadeAnim, {

      toValue: 1,

      duration: 1000,

      useNativeDriver: true,

    }).start();

  }, [fadeAnim]);



   const handleLogin = () => {

   

    if (email === 'nadhirhnihina@gmail.com' && password === 'Azerty') {

      Alert.alert('Bienvenue', `Vous êtes connecté avec ${email}`);

      navigation.navigate('Dashboard'); 

    } else if (email === 'nadhir' && password === '0000') { 

      Alert.alert('Bienvenue', 'Connecté en tant qu’enseignant');

      navigation.navigate('Dashboard', {

        user: {

          name: 'Mr.nadhir',

          email: 'nadhirhnihina@gmail.com',

          department: 'Informatique',

        },

      });

    } else {

      Alert.alert('Erreur', 'Connecté en tant que User' , );

      navigation.navigate('User'); 

    }

  };



  return (

    <LinearGradient colors={['#42A379', 'white']} style={styles.container}>

      <StatusBar style="auto" />

      <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>

        <Image

          source={{ uri: 'https://i.postimg.cc/HsWgXSRY/dev.png' }}

          style={styles.logo}

        />

      </Animated.View>

      <TextInput

        style={styles.input}

        placeholder="Adresse email"

        onChangeText={setEmail}

        keyboardType="email-address"

        autoCapitalize="none"

      />

      <TextInput

        style={styles.input}

        placeholder="Mot de passe"

        onChangeText={setPassword}

        secureTextEntry

      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>

        <Text style={styles.buttonText}>Se connecter</Text>

      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>

        Pas de compte ? S'inscrire ici

      </Text>

    </LinearGradient>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20,

  },

  logoContainer: {

    marginBottom: 40,

    shadowColor: 'white',

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.25,

    shadowRadius: 3.84,

    elevation:15,

    borderRadius: 10, // Add border radius for smoother shadow appearance

  },

  logo: {

    width: 270,

    height: 100,
    borderRadius:12

  },

  input: {

    width: '100%',

    padding: 10,

    marginBottom: 15,

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 5,

    backgroundColor: '#fff', // Set white background for better contrast

  },

  button: {

    backgroundColor: '#42A379',

    padding: 15,

    borderRadius: 5,

    alignItems: 'center',

    width: '70%',

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.2,

    shadowRadius: 2,

    elevation: 3, // Add subtle button shadow

  },

  buttonText: {

    color: 'black',

    fontSize: 16,

  },

  link: {

    marginTop: 40,

    textDecorationLine: 'underline',

  },

});



export default LoginScreen;