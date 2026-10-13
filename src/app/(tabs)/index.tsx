import { Text, View } from "react-native";
import { styled} from "nativewind"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white pl-5 pr-5">
      <View>
        <Text className="text-red-500">Hello world</Text>
      </View>
    </SafeAreaView>
  );
}

