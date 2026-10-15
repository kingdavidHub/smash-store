import { View, Text } from "react-native";
import { formatCurrency } from "../../lib/utils";

type OrderSummaryProps = {
  itemCount: number;
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between items-center">
    <Text className="text-[#5F5D5D]">{label}</Text>
    <Text className="font-medium text-[#1A1A1A]">{value}</Text>
  </View>
);

const OrderSummary = ({
  itemCount,
  subtotal,
  discount,
  delivery,
  total,
}: OrderSummaryProps) => {
  return (
    <View className="bg-[#F8F7F7] rounded-2xl p-5 gap-3">
      <Text className="text-2xl font-bold mb-1">Order Summary</Text>

      <Row label="Items" value={String(itemCount)} />
      <Row label="Subtotal" value={formatCurrency(subtotal)} />
      <Row label="Discount" value={formatCurrency(discount)} />
      <Row label="Delivery Charges" value={formatCurrency(delivery)} />

      <View className="border-t border-[#D9D7D7] pt-3 mt-1 flex-row justify-between items-center">
        <Text className="text-xl font-bold">Total</Text>
        <Text className="text-xl font-bold">{formatCurrency(total)}</Text>
      </View>
    </View>
  );
};

export default OrderSummary;
