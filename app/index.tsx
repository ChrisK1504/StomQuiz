import { Dimensions, Pressable, Text, View } from "react-native";
import data from "../constants/json_data";
import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function Index() {
  const [questionIndex, setQuestionIndex] = useState(
    Math.floor(Math.random() * 220)
  );
  const [score, setScore] = useState(0 as number);
  const [selected, setSelected] = useState(null as any);
  const [count, setCount] = useState(0 as number);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    if (count < 50) {
      if (answer === data[questionIndex].correctAnswer) {
        setScore(score + 1);
      }
      setTimeout(() => {
        setCount(count + 1);
        setSelected(null);
        setQuestionIndex(Math.floor(Math.random() * 220));
      }, 1500);
    } else {
    }
  };

  const getOptionStyle = (option: string) => {
    if (selected === null) {
      return styles.optionButton;
    } else if (option === data[questionIndex].correctAnswer) {
      return styles.correctOption;
    } else if (option === selected) {
      return styles.incorrectOption;
    } else {
      return styles.optionButton;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#E0BBE4", fontWeight: "semibold" }}>
        {score} / 50
      </Text>
      <Progress.Bar
        color="#E0BBE4"
        progress={count / 50}
        width={Dimensions.get("screen").width * 0.33}
        height={6}
        borderRadius={5}
        animated={true}
        style={{
          margin: 20,
        }}
      />
      <Text style={styles.questionText}>{data[questionIndex].question}</Text>
      <Pressable
        style={getOptionStyle(data[questionIndex].alternatives[0])}
        onPress={() => handleAnswer(data[questionIndex].alternatives[0])}
      >
        <Text style={styles.optionText} id="A">
          A) {data[questionIndex].alternatives[0]}
        </Text>
      </Pressable>
      <Pressable
        style={getOptionStyle(data[questionIndex].alternatives[1])}
        onPress={() => handleAnswer(data[questionIndex].alternatives[1])}
      >
        <Text style={styles.optionText} id="B">
          B) {data[questionIndex].alternatives[1]}
        </Text>
      </Pressable>
      <Pressable
        style={getOptionStyle(data[questionIndex].alternatives[2])}
        onPress={() => handleAnswer(data[questionIndex].alternatives[2])}
      >
        <Text style={styles.optionText} id="C">
          C) {data[questionIndex].alternatives[2]}
        </Text>
      </Pressable>
      <Pressable
        style={getOptionStyle(data[questionIndex].alternatives[3])}
        onPress={() => handleAnswer(data[questionIndex].alternatives[3])}
      >
        <Text style={styles.optionText} id="D">
          D) {data[questionIndex].alternatives[3]}
        </Text>
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

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  correctOption: {
    backgroundColor: "#32CD32", // Green for the correct option
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  incorrectOption: {
    backgroundColor: "#FF6347", // Red for the incorrect option
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
  },
});
