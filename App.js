import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text,TextInput,Searchbar, View, } from 'react-native';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput placeholder='Search E-commerce...' clearButtonMode='always' style={styles.Searchbar}/>
        </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:9,
  },
  Searchbar:{
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderWidth:1,
    padding:10,
    borderRadius:10,
  },

});
