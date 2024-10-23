import { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default function QuizSection() {
  const [selectedOption, setSelectedOption] = useState(null);

  const quizOptions = [
    { id: "A", option: "H2O" },
    { id: "B", option: "HO2" },
    { id: "C", option: "O2H" },
    { id: "D", option: "OH2" },
  ];

  const handleSelectOption = (id) => {
    setSelectedOption(id);
  };

  return (
    <View>
      <Text>Quelle est la formule scientifique de l'eau?</Text>
      <FlatList
        data={quizOptions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectOption(item.id)}>
            <LinearGradient
              colors={
                selectedOption === item.id
                  ? ["#8A3FFC", "#7635C5"]
                  : ["#EAEAF3", "#EAEAF3"]
              }
            >
              <Text>{item.option}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity>
        <Text>Pyetja e rradhes</Text>
      </TouchableOpacity>
    </View>
  );
}
