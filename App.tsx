import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Game from './components/Game';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Game />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default App;
