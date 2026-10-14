import { Tabs } from 'expo-router'
import { FontAwesome6, FontAwesome } from "@expo/vector-icons"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6055D8",
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: {
          borderTopWidth: 0,        // removes the top border
          elevation: 0,             // removes Android's shadow line
          shadowOpacity: 0,         // removes iOS shadow
        }
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Home', tabBarIcon: ({ size, color }) => (
          <FontAwesome6 name='house' size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="search" options={{
        title: 'Search', tabBarIcon: ({ size, color }) => (
          <FontAwesome6 name='magnifying-glass' size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="store" options={{
        title: 'Store', tabBarIcon: ({ size, color }) => (
          <FontAwesome6 name='bag-shopping' size={size} color={color} />
        )
      }} />
      <Tabs.Screen name="user" options={{
        title: 'Account', tabBarIcon: ({ size, color }) => (
          <FontAwesome name='user' size={size} color={color} />
        )
     }} />
    </Tabs>
  )
}

export default TabsLayout