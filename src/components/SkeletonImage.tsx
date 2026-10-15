import { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Skeleton from "./Skeleton";

type SkeletonImageProps = {
  source: ImageSourcePropType;
  className?: string;
  contentFit?: "cover" | "contain" | "stretch" | "center";
  onLoad?: () => void;
};

const SkeletonImage = ({
  source,
  className,
  contentFit = "cover",
  onLoad,
}: SkeletonImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
    onLoad?.();
  };

  return (
    <View className={className}>
      {isLoading && <Skeleton style={StyleSheet.absoluteFill} />}
      <Image
        source={source}
        className="w-full h-full"
        resizeMode={contentFit}
        onLoad={handleLoaded}
        onLoadEnd={handleLoaded}
        onError={handleLoaded}
      />
    </View>
  );
};

export default SkeletonImage;
