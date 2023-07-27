import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert("Button pressed!");
  };

  const [taps, setTaps] = useState(0);
  const [cardData, setCardData] = useState({
    title: "Card Title",
    imageUrl: "https://www.example.com/image.png",
    description: "This is a card description.",
  });

  const handleTap = () => {
    setTaps(taps + 1);
  };
  () => {
    // Load the image data.
    const image = new Image();
    image.onload = () => {
      setCardData({
        ...cardData,
        image: image,
      });
    };
    image.src = cardData.imageUrl;
  },
    [cardData.imageUrl];
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
      <View>
        <Text>Taps: {taps}</Text>
        <TouchableOpacity
          onPress={handleTap}
          style={{
            backgroundColor: "red",
            padding: 10,
          }}
        >
          <Text>Tap me!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image style={styles.image} source={cardData.image} />
        <Text style={styles.title}>{cardData.title}</Text>
        <Text style={styles.description}>{cardData.description}</Text>
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
  card: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
});
