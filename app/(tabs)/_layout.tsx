import { Stack } from "expo-router";
import React from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { Text, TouchableOpacity, View } from "react-native";

export default function TabLayout() {
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="test" />
    </Stack>
  );
}
