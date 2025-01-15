import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NetInfo from "@react-native-community/netinfo";
import * as Network from "expo-network";
import Icon from "@/components/Icons";
export default function Test() {
  // const [isConnected, setisConnected] = React.useState<Network.NetworkState>();
  const [isConnected, setIsConnected] = React.useState(true);

  const [ip, setIp] = React.useState<string>();

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
        getIp();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function getIp() {
    const ip = await Network.getIpAddressAsync();
    setIp(ip);
  }
  return (
    <SafeAreaView className="flex-1 bg-primary p-8">
      <Text className="text-white font-bold text-3xl">CamGG</Text>
      <View className="items-center justify-evenly flex h-full ">
        <View className="flex items-center justify-center w-full flex-col gap-4">
          <View
            className={`w-1/3 aspect-square rounded-full items-center justify-center ${
              isConnected ? "bg-green-500" : "bg-zinc-900"
            }`}
          >
            {isConnected ? (
              <Icon name="Webcam" color="#fff" size={48} />
            ) : (
              <Icon name="WifiOff" color="#fff" size={48} />
            )}
          </View>
          <View className="items-center justify-center flex flex-col">
            <Text className="text-white font-semibold text-xl">
              {isConnected
                ? "You're ready to stream"
                : "You're not connected to the Internet"}
            </Text>
            <Text className="text-white">
              {isConnected
                ? "Press the green button and start to stream"
                : "Check your connection and try again."}
            </Text>
          </View>
        </View>
        <View className="w-full items-center justify-center flex flex-col gap-8">
          <View className="w-full flex flex-col items-start justify-center bg-zinc-900 p-4 rounded-2xl border-2 border-zinc-800">
            <Text className="text-white font-bold text-lg">Streaming info</Text>
            <Text className="text-white">IP: {ip}</Text>
            <Text className="text-white">Port: 3737</Text>
            <Text className="text-white">
              Video Stream: http://{ip}:4747/video
            </Text>
          </View>
          <View className="w-full">
            <TouchableOpacity
              disabled={!isConnected}
              className="disabled:opacity-50 bg-green-700 p-4 w-full flex rounded-2xl items-center border-2 border-green-500"
            >
              <Text className="text-white font-bold text-lg">
                Start streaming
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
