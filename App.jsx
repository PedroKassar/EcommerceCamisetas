import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/home';
import { colors } from './src/constants/colors';

export default function App() {
    return (
      <View style={styles.container}>
          <Home/>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.color4,
    paddingTop: 50
  }
});
