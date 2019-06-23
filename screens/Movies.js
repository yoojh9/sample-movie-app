import React from "react";
import { Text, TouchableOpacity } from "react-native";

// 모든 스크린은 navigation props를 가지고 있음
export default ({ navigation }) => (
  <>
    <Text>Movies</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Go to detail</Text>
    </TouchableOpacity>
  </>
);
