import { home_avatar } from '@/assets/images'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { styled } from 'nativewind'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'

const SafeAreaView = styled(RNSafeAreaView)

type SettingsRowProps = {
  icon: React.ReactNode
  label: string
  value?: string
}

const SettingsRow = ({ icon, label, value }: SettingsRowProps) => {
  return (
    <TouchableOpacity className="min-h-11 flex-row items-center rounded-lg bg-[#F8F7F7] px-4" activeOpacity={0.7}>
      <View className="w-8 items-center">{icon}</View>
      <Text className="flex-1 text-[14px] font-semibold text-[#242222]">{label}</Text>
      {value ? <Text className="mr-3 text-xs text-[#242222]">{value}</Text> : null}
      <FontAwesome6 name="chevron-right" size={16} color="#151515" />
    </TouchableOpacity>
  )
}

const SettingsScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top', 'left', 'right']}>
      <ScrollView className="flex-1 px-5" contentContainerStyle={{ paddingTop: 28, paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center">
          <TouchableOpacity
            className="h-11 w-11 items-center justify-center rounded-full bg-[#F8F7F7]"
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <FontAwesome6 name="arrow-left" size={19} color="#151515" />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-base font-bold text-[#111111]">Settings</Text>
          <View className="h-11 w-11" />
        </View>

        <Text className="mb-2 mt-7 text-sm font-bold text-[#242222]">Account</Text>
        <TouchableOpacity className="h-12 flex-row items-center rounded-lg bg-[#F8F7F7] px-2" activeOpacity={0.7}>
          <View className="h-10 w-10 overflow-hidden rounded-full">
            <Image source={home_avatar} className="h-full w-full" resizeMode="cover" />
          </View>
          <View className="ml-3 flex-1">
            <Text className="text-sm font-bold text-[#242222]">Mark Adam</Text>
            <Text className="mt-0.5 text-xs text-[#9B9999]">Sunny_Koelpin45@hotmail.com</Text>
          </View>
          <FontAwesome6 name="chevron-right" size={16} color="#151515" />
        </TouchableOpacity>

        <View className="my-4 h-px bg-[#E1DFDF]" />
        <Text className="mb-2 text-sm font-bold text-[#242222]">Setting</Text>
        <View className="gap-2.5">
          <SettingsRow label="Notification" icon={<FontAwesome6 name="bell" size={20} color="#242222" />} />
          <SettingsRow label="Language" value="English" icon={<FontAwesome6 name="globe" size={20} color="#242222" />} />
          <SettingsRow label="Privacy" icon={<FontAwesome6 name="shield-halved" size={20} color="#242222" />} />
          <SettingsRow label="Help Center" icon={<FontAwesome6 name="headset" size={20} color="#242222" />} />
          <SettingsRow label="About us" icon={<FontAwesome name="info-circle" size={21} color="#242222" />} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsScreen