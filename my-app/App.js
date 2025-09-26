import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nícolas Dos Santos Ribeiro Da Silva</Text>
      <Text style={styles.info}>2ª Série Do Ensino Médio - 2025</Text>
      <Text style={styles.info}>3º Bimestre</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
});
