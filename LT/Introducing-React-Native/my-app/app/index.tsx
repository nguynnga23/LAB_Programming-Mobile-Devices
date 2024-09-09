import { Collapsible } from "@/components/Collapsible";
import { HelloWave } from "@/components/HelloWave";
import StyledComponent from "@/components/StyledComponent";
import VideoPlayer from "@/components/VideoPlayer";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledComponent/>
      <VideoPlayer/>
    </View>
  );
}
