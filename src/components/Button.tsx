import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  name: string;
  className?: string;
  onPress?: () => void;
};

const Button = ({ name, className, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-[#6055D8] items-center justify-center rounded-full py-4 ${className ?? "flex-1"}`}
    >
      <Text className="text-white font-bold text-xl">{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
