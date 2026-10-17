import { useEffect, useState } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type SkeletonProps = {
  className?: string;
  style?: StyleProp<ViewStyle>;
};

const Skeleton = ({ className, style }: SkeletonProps) => {
  const [opacity] = useState(() => new Animated.Value(0.4));

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <View className={`overflow-hidden ${className ?? ""}`} style={style}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          { opacity, backgroundColor: "#E5E5E5" },
        ]}
      />
    </View>
  );
};

export default Skeleton;
