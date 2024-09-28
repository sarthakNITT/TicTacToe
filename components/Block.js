import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Block = ({ value, onPress, highlight }) => {
  return (
    <TouchableOpacity style={[styles.Block, highlight && styles.highlight]} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Block: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#3F51B5',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAF6',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
    borderRadius: 10,
  },
  highlight: {
    backgroundColor: '#8BC34A',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3F51B5',
  },
});

export default Block;
