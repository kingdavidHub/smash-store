import { Link } from "expo-router";
import { View, Text } from "react-native";

type SectionHeaderProps = {
  name: string;
};

const SectionHeader = ({ name }: SectionHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between mb-5">
      <Text className="text-xl font-semibold">{name}</Text>
      <Link href={"/products"}>
        <Text className="text-[#6055D8]">See all</Text>
      </Link>
    </View>
  );
};

export default SectionHeader;
