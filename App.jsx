import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import Home from './src/Screens/home';
import { colors } from './src/constants/colors';
import Footer from './src/Components/footer';

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
          <Home/>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color3,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
