import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <TouchableOpacity className="bg-[#6055D8] flex-1 items-center justify-center rounded-full py-4">
      <Text className="text-white font-bold text-xl">{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
