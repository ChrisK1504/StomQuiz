import QuizSection from "@/components/QuizSection";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function App() {
  return (
    <View>
      {/* Quiz Section */}
      <QuizSection />
    </View>
  );
}
