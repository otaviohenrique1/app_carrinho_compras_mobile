import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Homepage } from './src/pages/HomePage';
import constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 15
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
