import { home_avatar } from '@/assets/images'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

type ProfileRowProps = {
  icon: React.ReactNode
  label: string
  onPress?: () => void
}

const ProfileRow = ({ icon, label, onPress }: ProfileRowProps) => {
  return (
    <TouchableOpacity
      className="h-12 flex-row items-center rounded-lg bg-[#F8F7F7] px-4"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="w-8 items-center">{icon}</View>
      <Text className="flex-1 text-[15px] font-semibold text-[#353333]">{label}</Text>
      <FontAwesome6 name="chevron-right" size={16} color="#151515" />
    </TouchableOpacity>
  )
}

const UserScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{ flexGrow: 1, paddingTop: 28, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center">
          <View className="h-[72px] w-[72px] overflow-hidden rounded-full">
            <Image source={home_avatar} className="h-full w-full" resizeMode="cover" />
          </View>
          <Text className="mt-3 text-2xl font-bold text-[#111111]">Mark Adam</Text>
          <Text className="mt-1 text-xs font-medium text-[#9B9999]">Sunny_Koelpin45@hotmail.com</Text>
        </View>

        <View className="mt-6 gap-3">
          <ProfileRow label="Profile" icon={<FontAwesome name="user" size={21} color="#444444" />} />
          <ProfileRow label="Setting" onPress={() => router.push('/settings')} icon={<FontAwesome6 name="gear" size={21} color="#444444" />} />
          <ProfileRow label="Contact" icon={<FontAwesome name="envelope" size={20} color="#444444" />} />
          <ProfileRow label="Share App" icon={<FontAwesome6 name="share-nodes" size={20} color="#444444" />} />
          <ProfileRow label="Help" icon={<FontAwesome name="question-circle" size={22} color="#444444" />} />
        </View>

        <View className="flex-1 items-center justify-end pb-2">
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-base font-semibold text-[#F26422]">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserScreen