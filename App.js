import { StatusBar } from 'expo-status-bar';
import { Input } from 'react-native-elements';
import React from 'react';
import {SafeAreaView } from 'react-native';

export default function App() {
  return (
<SafeAreaView>
<Input
  placeholder='BASIC INPUT'
/>

      <StatusBar style="auto" />
   
 
  </SafeAreaView>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
