import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import IconButton from "@/components/IconButton";
import CartItemCard from "@/components/CartItemCard";
import OrderSummary from "@/components/OrderSummary";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cart";

const SafeAreaView = styled(RNSafeAreaView);

const DISCOUNT = 4;
const DELIVERY_CHARGES = 2;

const Cart = () => {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  const { itemCount, subtotal, discount, delivery, total } = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const discount = items.length > 0 ? DISCOUNT : 0;
    const delivery = items.length > 0 ? DELIVERY_CHARGES : 0;

    return {
      itemCount,
      subtotal,
      discount,
      delivery,
      total: subtotal - discount + delivery,
    };
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-5 pt-5">
        <IconButton
          onClick={() => router.back()}
          icon={<FontAwesome6 name="arrow-left" size={24} color="#7C7979" />}
        />
        <Text className="flex-1 text-center text-2xl font-bold">Cart</Text>
        <IconButton
          icon={
            <FontAwesome6
              name="ellipsis-vertical"
              size={24}
              color="#7C7979"
            />
          }
        />
      </View>

      <ScrollView
        className="flex-1 px-5 pt-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        {items.length === 0 ? (
          <View className="items-center justify-center py-20">
            <FontAwesome6 name="cart-shopping" size={48} color="#D9D7D7" />
            <Text className="text-[#9B9999] text-lg mt-4">
              Your cart is empty
            </Text>
          </View>
        ) : (
          <View className="gap-4">
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onRemove={() => removeItem(item.id)}
                onIncrement={() => incrementQuantity(item.id)}
                onDecrement={() => decrementQuantity(item.id)}
              />
            ))}

            <View className="mt-4">
              <OrderSummary
                itemCount={itemCount}
                subtotal={subtotal}
                discount={discount}
                delivery={delivery}
                total={total}
              />
            </View>

            <Button name="Check Out" className="w-full" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
