import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchScreen = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      {isLogin ? (
        <LoginScreen onSwitchScreen={handleSwitchScreen} />
      ) : (
        <SignupScreen onSwitchScreen={handleSwitchScreen} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
