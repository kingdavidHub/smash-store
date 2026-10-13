import { View, Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

const store = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Text>store</Text>
      </View>
    </SafeAreaView>
  )
}

export default store