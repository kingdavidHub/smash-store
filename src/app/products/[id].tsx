import { View, Text, TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import { PRODUCTS } from '../../../constants/data'
import { formatCurrency } from '../../../lib/utils'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import Button from '@/components/Button'
import IconButton from '@/components/IconButton'
import SkeletonImage from '@/components/SkeletonImage'
import { useCartStore } from '@/store/cart'

const SafeAreaView = styled(RNSafeAreaView)

const Productdetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter()
  const addItem = useCartStore((state) => state.addItem)

  
  const item = PRODUCTS.find((i) => i.id === id);

  if (!item) return <Text>Not Found</Text>

  const handleAddToCart = () =>
    addItem({
      id: item.id,
      name: item.product_name,
      brand: item.product_brand,
      price: item.product_currency,
      image: item.product_image,
    })

  const handleBuyNow = () => {
    handleAddToCart()
    router.push('/(tabs)/cart')
  }

  return (
    <SafeAreaView
      className="flex-1"
      edges={['left', 'right']}
    >
      <View className='flex-col'>
        <View className='max-h-120 w-full overflow-hidden rounded-l-3xl rounded-r-3xl relative'>
          <SkeletonImage source={item.product_image} className='w-full h-full' />

          <View className='absolute top-20 w-full'>
            <View className='px-4 flex-row justify-between'>
              <IconButton
                onClick={() => router.back()}
                icon={<FontAwesome6 name="arrow-left" size={24} color="#7C7979" />}
              />

              <IconButton
                icon={<FontAwesome name="heart" size={24} color="#7C7979" />}
              />
            </View>
          </View>
        </View>

        <View className='p-4 flex-col gap-5'>
          <View className='flex-row justify-between items-center'>
            <View className='flex-col gap-4'>
              <Text className='text-3xl font-bold'>{item.product_name}</Text>
              <View className='flex-row gap-2 items-center'>
                <TouchableOpacity>
                  <FontAwesome name='star' size={20} color="#FFC107"/>
                </TouchableOpacity>
                <Text className='font-semibold'>4.5</Text>
                <Text className='text-[#7D7A7A] font-semibold'>{`( 20 Review )`}</Text>
              </View>
            </View>
            <Text className="text-[#6055D8] font-semibold text-2xl">
              {formatCurrency(item.product_currency)}
            </Text>
          </View>

          <View className='flex-col gap-6'>
            <View className='flex-col gap-2'>
              <Text className='font-bold text-xl'>Description</Text>
              <Text className='font-light text-justify text-[#9B9999]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit animi fugiat sed quisquam a soluta magnam sint reprehenderit harum placeat amet fuga, ipsam tempora, numquam exercitationem alias voluptas tempore?</Text>
            </View>

            <View className='flex-col gap-2'>
              <Text className='font-bold text-xl'>Size</Text>
              <View className='flex-row'>
                {
                  [8, 10, 38].map((num, index) => (
                    <TouchableOpacity key={index} className='border rounded-2xl px-5 py-4 border-[#CFCDCD]'>
                      <Text className='font-semibold'>{num}</Text>
                    </TouchableOpacity>
                  ))
                }

                {/* Disabled btn */}
                <TouchableOpacity className='border rounded-2xl px-5 py-4 border-[#CFCDCD]'>
                  <Text className='font-semibold'>40</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className='flex-row gap-4 justify-between'>
              <Button name="Buy Now" onPress={handleBuyNow} />

              <TouchableOpacity
                onPress={handleAddToCart}
                className='px-7 py-3 bg-gray-200 rounded-full'
              >
                <FontAwesome6 name='bag-shopping' size={24} color="#9E9E9E" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Productdetails