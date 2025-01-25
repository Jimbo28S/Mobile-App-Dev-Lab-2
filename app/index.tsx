import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {fruitsList} from './lists';

export default function App() {
    return (
      <View style={styles.container}>
        <Text>Hello James!</Text>
        <View>
            {" "}
            <TouchableOpacity onPress={() => {alert("Weekend is the best");}}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>

        <View>
  {fruitsList.map((listItem, index) => (
    <Text key={index}>{listItem}</Text>
  ))}
</View>

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
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    text: {
      color: "#000d75",
      fontSize: 16,
    }
  });
  