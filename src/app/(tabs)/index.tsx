import { FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import { styled } from "nativewind"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { home_avatar } from "@/assets/images";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import IconButton from "@/components/IconButton";
import { PRODUCTS } from "../../../constants/data";

const SafeAreaView = styled(RNSafeAreaView)

export default function HomeScreen() {
  const [searchState, setSearchState] = useState<string>('');
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-5 pt-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <View className="flex-row justify-between items-center mb-5">
          <View className="flex-row gap-4 items-center">
            <View className="rounded-full w-16 h-16 overflow-hidden">
              <Image source={home_avatar} className="w-full h-full" resizeMode="cover" />
            </View>
            <View>
              <Text>Hello!</Text>
              <Text className="font-semibold">John william</Text>
            </View>
          </View>

          <IconButton
            icon={<FontAwesome name="bell" size={24} color="#7C7979" />}
          />
        </View>


        {/* Search bar */}
        <View className="w-full p-5 rounded-full bg-[#F8F7F7] flex-row items-center gap-4 mb-10">
          <FontAwesome6 name='magnifying-glass' size={24} color="#5F5D5D" />
          <TextInput
            className="flex-1"
            value={searchState}
            onChangeText={setSearchState}
            placeholder="search here"
            placeholderTextColor="#9B9999"
          />
        </View>

        <SectionHeader name="Featured" />
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product_name={item.product_name}
              product_currency={item.product_currency}
              product_image={item.product_image}
              product_id={item.id}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-4" />}
          className="mb-8"
        />

        <SectionHeader name="Most Popular" />
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              product_id={item.id}
              product_name={item.product_name}
              product_currency={item.product_currency}
              product_image={item.product_image}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-4" />}
          className="mb-8"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

