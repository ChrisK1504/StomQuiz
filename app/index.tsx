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
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    setRandomNumber(getRandomNumber);
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 220);
  };
  return (
    <View>
      <Text>{data[randomNumber].question}</Text>
      <Pressable>
        <Text id="A">A) {data[randomNumber].alternatives[0]}</Text>
      </Pressable>
      <Pressable>
        <Text id="B">B) {data[randomNumber].alternatives[1]}</Text>
      </Pressable>
      <Pressable>
        <Text id="C">C) {data[randomNumber].alternatives[2]}</Text>
      </Pressable>
      <Pressable>
        <Text id="D">D) {data[randomNumber].alternatives[3]}</Text>
      </Pressable>
    </View>
  );
}
