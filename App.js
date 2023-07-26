import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert("Button pressed!");
  };
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.logo}>Logo</Text>
        <View style={styles.navItems}>
          <Text style={styles.navItem}>Home</Text>
          <Text style={styles.navItem}>About</Text>
          <Text style={styles.navItem}>Services</Text>
          <Text style={styles.navItem}>Contact</Text>
        </View>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press Me" onPress={handlePress} color="#3498db" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    backgroundColor: "#3498db",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  navItems: {
    flexDirection: "row",
  },
  navItem: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 10,
  },
});
