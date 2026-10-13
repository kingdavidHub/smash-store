import { View, Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

const search = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Text>search</Text>
      </View>
    </SafeAreaView>
  )
}

export default search