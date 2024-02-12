import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Level Screen')} >
        <Text style={styles.buttonText}>Go to Level Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Measurement Screen')}>
        <Text style={styles.buttonText}>Go to Measurement Screen</Text>
      </TouchableOpacity>
        
        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 90,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});