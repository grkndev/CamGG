import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="bg-black">
        <Text className="text-white">Index</Text>
      </View>
    </SafeAreaView>
  );
}
