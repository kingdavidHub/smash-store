import { useState } from "react";
import { ImageSourcePropType, View } from "react-native";
import { Image, type ImageProps } from "expo-image";
import Skeleton from "./Skeleton";

type SkeletonImageProps = {
  source: ImageSourcePropType;
  className?: string;
  contentFit?: ImageProps["contentFit"];
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
      {isLoading && <Skeleton className="absolute inset-0" />}
      <Image
        source={source as ImageProps["source"]}
        className="w-full h-full"
        contentFit={contentFit}
        onLoad={handleLoaded}
        onError={handleLoaded}
        transition={300}
      />
    </View>
  );
};

export default SkeletonImage;
