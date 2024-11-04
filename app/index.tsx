import {
  FlatList,
  FlatListComponent,
  Pressable,
  Text,
  View,
} from "react-native";
import data from "../constants/json_data";
import { useEffect, useState } from "react";

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
    <View>
      <Text>{data[questionIndex].question}</Text>
      <Pressable
        onPress={() => handleAnswer(data[questionIndex].alternatives[0])}
      >
        <Text id="A">A) {data[questionIndex].alternatives[0]}</Text>
      </Pressable>
      <Pressable
        onPress={() => handleAnswer(data[questionIndex].alternatives[1])}
      >
        <Text id="B">B) {data[questionIndex].alternatives[1]}</Text>
      </Pressable>
      <Pressable
        onPress={() => handleAnswer(data[questionIndex].alternatives[2])}
      >
        <Text id="C">C) {data[questionIndex].alternatives[2]}</Text>
      </Pressable>
      <Pressable
        onPress={() => handleAnswer(data[questionIndex].alternatives[3])}
      >
        <Text id="D">D) {data[questionIndex].alternatives[3]}</Text>
      </Pressable>
    </View>
  );
}
