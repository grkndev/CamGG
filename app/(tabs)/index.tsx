import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";
import Icon from "@/components/Icons";

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import Timer from "@/lib/Timer";
import SvgComponent from "@/components/TestIcon";

export default function Index() {
  const [facing, setFacing] = React.useState<CameraType>("front");

  const [time, setTime] = React.useState("00:00:00");
  const [timer] = React.useState(new Timer());

  React.useEffect(() => {
    timer.start((newTime) => setTime(newTime));

    return () => timer.stop();
  }, []);

  React.useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  // return (
  //   <SafeAreaView className="bg-primary flex-1">
  //     <Text className="text-white">Test</Text>
  //   </SafeAreaView>
  // );
  function toggleFacing() {
    setFacing((prev) => (prev === "front" ? "back" : "front"));
  }

  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="flex flex-row items-center justify-center w-full h-full">
        <View className=" w-[90%] h-full p-4 ">
          <View className="relative rounded-xl overflow-hidden border-red-500 border-2">
            <View className="w-full h-full">
              <CameraView facing={facing} style={{ flex: 1 }} />
            </View>

            <View className="absolute p-2 flex flex-row items-center justify-center gap-2">
              <View className="bg-red-500 py-1 px-1.5 flex flex-row items-center justify-center gap-1 rounded-lg">
                <View className="bg-white h-2 w-2 rounded-full animate-[ping-re__2s_ease-in-out_infinite] " />
                <Text className="text-sm text-white">Live - {time}</Text>
              </View>
              <View className="flex flex-row items-center justify-center gap-1">
                {/* <Icon name="RadioTower" color="#fff" size={16} /> */}
                {/* <SvgComponent /> */}
                <Text className="text-white text-sm">
                  WLAN: 192.168.1.107:4747
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="w-fit h-full py-4 flex flex-col items-center justify-between">
          <TouchableOpacity className="p-4 items-center justify-center flex rounded-md  ">
            {/* <Icon name="Flashlight" color="#fff" size={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center justify-center flex rounded-md  ">
            {/* <Icon name="FlipHorizontal2" color="#fff" size={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center justify-center flex rounded-md  ">
            {/* <Icon name="FlipVertical2" color="#fff" size={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center justify-center flex rounded-md  ">
            {/* <Icon name="Grid3x3" color="#fff" size={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center justify-center flex rounded-md  ">
            {/* <Icon name="SwitchCamera" color="#fff" size={24} /> */}
          </TouchableOpacity>
          <TouchableOpacity className="p-4 items-center justify-center flex rounded-md  ">
            {/* <Icon name="CircleStop" color="red" size={24} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
