// @refresh state
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";
import * as firebase from "firebase";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwur_ghzgZboD_CSZj_V03HazImVykBds",
  authDomain: "react-native-chat-35aaa.firebaseapp.com",
  databaseURL: "https://react-native-chat-35aaa.firebaseio.com",
  projectId: "react-native-chat-35aaa",
  storageBucket: "react-native-chat-35aaa.appspot.com",
  messagingSenderId: "486116026641",
  appId: "1:486116026641:web:1310607d5b45d2b92904b0",
};
// Initialize Firebase

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

YellowBox.ignoreWarnings(["Setting a timer for a long period of time"]);

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
