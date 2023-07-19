import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
//import { FIREBASE_AUTH } from './firebase';
//import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ onSwitchScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const navigation = useNavigation();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         navigation.replace("Home")
//       }
//     })

//     return unsubscribe
//   }, [])

//   const handleLogin = () => {
//     FIREBASE_AUTH
//     .signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
//     .then(userCredential => {
//         const user = userCredential.user;
//         console.log("Logged in with", user.email);
//     })
//     .catch(error => {
//         alert(error.message)
//     })
//   };
const handleLogin = () => {
    // Perform login logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Log In" onPress={handleLogin} />
      <Text style={styles.switchText}>
        Don't have an account?{' '}
        <Text style={styles.switchLink} onPress={onSwitchScreen}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  switchText: {
    marginTop: 16,
    fontSize: 14,
  },
  switchLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
