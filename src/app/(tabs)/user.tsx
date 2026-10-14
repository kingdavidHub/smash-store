import { View, Text } from 'react-native'
import { styled } from 'nativewind'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

const user = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Text>user</Text>
      </View>
    </SafeAreaView>
  )
}

export default user