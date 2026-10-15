import { View, Text, FlatList } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import IconButton from '@/components/IconButton'
import ProductCard from '@/components/ProductCard'
import { useRouter } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons'
import { PRODUCTS } from '../../../constants/data'
import { useCartStore } from '@/store/cart'


const SafeAreaView = styled(RNSafeAreaView)

const ProductList = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const addItem = useCartStore((state) => state.addItem);

  return (
    <SafeAreaView className="flex-1" edges={["left", "right", "top"]}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: insets.top / 20,
          gap: 16
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className='flex-row items-center w-full '>
            <IconButton
              onClick={() => router.back()}
              icon={<FontAwesome6 name="arrow-left" size={24} color="#7C7979" />}
            />
            <Text className='flex-1 text-center text-xl font-bold'>Products</Text>
          </View>
        }
        renderItem={({ item }) => (
          <ProductCard
            product_id={item.id}
            product_name={item.product_name}
            product_currency={item.product_currency}
            product_image={item.product_image}
            addProduct={true}
            onAddPress={() =>
              addItem({
                id: item.id,
                name: item.product_name,
                brand: item.product_brand,
                price: item.product_currency,
                image: item.product_image,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  )
}

export default ProductList
