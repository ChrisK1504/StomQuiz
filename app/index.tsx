import {
  Button,
  FlatList,
  FlatListComponent,
  Pressable,
  Text,
  View,
} from "react-native";
import data from "../constants/json_data";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

export default function Index() {
  const [questionIndex, setquestionIndex] = useState(
    Math.floor(Math.random() * 220)
  );
  const [score, setScore] = useState(0 as number);

  const handleAnswer = (answer: string) => {
    if (answer === data[questionIndex].correctAnswer) {
      setScore(score + 1);
      setquestionIndex(Math.floor(Math.random() * 220));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{data[questionIndex].question}</Text>
      <Pressable
        style={styles.optionButton}
        onPress={() => handleAnswer(data[questionIndex].alternatives[0])}
      >
        <Text style={styles.optionText} id="A">
          A) {data[questionIndex].alternatives[0]}
        </Text>
      </Pressable>
      <Pressable
        style={styles.optionButton}
        onPress={() => handleAnswer(data[questionIndex].alternatives[1])}
      >
        <Text style={styles.optionText} id="B">
          B) {data[questionIndex].alternatives[1]}
        </Text>
      </Pressable>
      <Pressable
        style={styles.optionButton}
        onPress={() => handleAnswer(data[questionIndex].alternatives[2])}
      >
        <Text style={styles.optionText} id="C">
          C) {data[questionIndex].alternatives[2]}
        </Text>
      </Pressable>
      <Pressable
        style={styles.optionButton}
        onPress={() => handleAnswer(data[questionIndex].alternatives[3])}
      >
        <Text style={styles.optionText} id="D">
          D) {data[questionIndex].alternatives[3]}
        </Text>
      </Pressable>
      <Pressable>
        <Text id="button">Zgjidh</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082", // Deep purple background
    padding: 16,
    justifyContent: "center",
  },
  questionText: {
    fontSize: 24,
    color: "#E0BBE4", // Light purple for the question text
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  optionButton: {
    backgroundColor: "#6A0DAD",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
