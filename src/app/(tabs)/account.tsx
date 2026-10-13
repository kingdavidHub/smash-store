import { View, Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

const account = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Text>account</Text>
      </View>
    </SafeAreaView>
  )
}

export default account