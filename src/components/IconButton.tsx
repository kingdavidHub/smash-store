import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

type IconButtonProps = {
  icon: ReactNode;
  onClick?: () => void
};

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <TouchableOpacity className="bg-[#F8F7F7] w-16 h-16 items-center rounded-full justify-center" onPress={onClick}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
