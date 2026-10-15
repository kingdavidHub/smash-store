import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { formatCurrency } from "../../lib/utils";
import { CartItem } from "@/store/cart";
import SkeletonImage from "./SkeletonImage";

type CartItemCardProps = {
  item: CartItem;
  onRemove: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
};

const CartItemCard = ({
  item,
  onRemove,
  onIncrement,
  onDecrement,
}: CartItemCardProps) => {
  return (
    <View className="bg-[#F8F7F7] rounded-2xl p-3 flex-row items-center gap-4">
      <View className="w-20 h-20 rounded-xl overflow-hidden">
        <SkeletonImage source={item.image} className="w-full h-full" />
      </View>

      <View className="flex-1 self-stretch justify-between">
        <View className="flex-row justify-between items-start">
          <View className="flex-col">
            <Text className="font-bold text-xl">{item.name}</Text>
            <Text className="text-[#9B9999]">{item.brand}</Text>
          </View>
          <TouchableOpacity onPress={onRemove}>
            <FontAwesome6 name="trash" size={20} color="#EC4B4B" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-[#6055D8] font-semibold">
            {formatCurrency(item.price)}
          </Text>
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={onDecrement}
              className="w-8 h-8 rounded-full bg-[#EDEBFB] items-center justify-center"
            >
              <FontAwesome6 name="minus" size={14} color="#6055D8" />
            </TouchableOpacity>
            <Text className="font-semibold text-lg">
              {String(item.quantity).padStart(2, "0")}
            </Text>
            <TouchableOpacity
              onPress={onIncrement}
              className="w-8 h-8 rounded-full bg-[#6055D8] items-center justify-center"
            >
              <FontAwesome6 name="plus" size={14} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
