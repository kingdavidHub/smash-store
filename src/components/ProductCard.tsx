import { useState } from "react";
import { Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { formatCurrency } from "../../lib/utils";
import { Link } from "expo-router";
import SkeletonImage from "./SkeletonImage";
import Skeleton from "./Skeleton";

type ProductCardProps = {
  product_id: string
  product_name: string;
  product_currency: number;
  product_image: ImageSourcePropType;
  addProduct?: boolean
  onAddPress?: () => void
};

const ProductCard = ({
  product_id,
  product_name,
  product_currency,
  product_image,
  addProduct = false,
  onAddPress
}: ProductCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link href={{
      pathname: "/products/[id]",
      params: { id: product_id }
    }}>
      <View className="bg-[#F8F7F7] rounded-xl flex-col w-50 h-50 overflow-hidden relative">
        <View className="flex-1">
          <SkeletonImage
            source={product_image}
            className="w-full h-full"
            onLoad={() => setIsLoaded(true)}
          />
        </View>
        <View className="gap-2 p-2 flex-row justify-between items-center">
          <View className="flex-col flex-1">
            {isLoaded ? (
              <>
                <Text className="font-bold text-xl" numberOfLines={1}>{product_name}</Text>
                <Text className="text-[#6055D8] font-semibold">
                  {formatCurrency(product_currency)}
                </Text>
              </>
            ) : (
              <>
                <Skeleton className="h-5 w-3/4 rounded" />
                <Skeleton className="h-4 w-1/3 rounded mt-2" />
              </>
            )}
          </View>
          {
            addProduct
            &&
            <TouchableOpacity
              onPress={onAddPress}
              className="rounded-full w-8 h-8 bg-[#6055D8] items-center justify-center"
            >
              <FontAwesome6 name='plus' size={16} color="#fff" />
            </TouchableOpacity>
          }
        </View>

        <View className="right-3 top-3 absolute">
          <TouchableOpacity>
            <FontAwesome6 name="heart" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Link>
  );
};

export default ProductCard;
