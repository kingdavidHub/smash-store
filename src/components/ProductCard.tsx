import { Image, Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { formatCurrency } from "../../lib/utils";

type ProductCardProps = {
  product_name: string;
  product_currency: number;
  product_image: ImageSourcePropType;
};

const ProductCard = ({
  product_name,
  product_currency,
  product_image,
}: ProductCardProps) => {
  return (
    <View className="bg-[#F8F7F7] rounded-xl flex-col w-50 h-50 overflow-hidden relative">
      <View className="flex-1">
        <Image
          source={product_image}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <View className="gap-2 p-2">
        <Text className="font-bold text-xl">{product_name}</Text>
        <Text className="text-[#6055D8] font-semibold">
          {formatCurrency(product_currency)}
        </Text>
      </View>

      <View className="right-3 top-3 absolute">
        <TouchableOpacity>
          <FontAwesome6 name="heart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
