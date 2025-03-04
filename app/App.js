import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

        const App = () => {
        const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
        if (value === '=') {
        try {
setResult(Function('"use strict"; return (' + input + ')')().toString());
        } catch (error) {
setResult('Błąd');
      }
              } else if (value === 'C') {
setInput('');
setResult('');
    } else {
setInput((prev) => prev + value);
        }
        };

        return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.result}>{result || input || '0'}</Text>
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/'].map((val) => (
          <CalcButton key={val} value={val} onPress={handlePress} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {['4', '5', '6', '*'].map((val) => (
          <CalcButton key={val} value={val} onPress={handlePress} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '-'].map((val) => (
          <CalcButton key={val} value={val} onPress={handlePress} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {['C', '0', '=', '+'].map((val) => (
          <CalcButton key={val} value={val} onPress={handlePress} />
        ))}
      </View>
    </SafeAreaView>
        );
        };

        const CalcButton = ({ value, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
        );

        const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' },
    result: { fontSize: 50, color: '#fff', marginBottom: 20, textAlign: 'right', width: '90%' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'center' },
    button: { padding: 20, margin: 5, backgroundColor: '#333', borderRadius: 10, width: 70, alignItems: 'center' },
    text: { fontSize: 30, color: '#fff' },
});

export default App;
