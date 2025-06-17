import { ReactNode, useEffect, useRef } from "react";
import { Animated } from "react-native";

type Props = {
  children: ReactNode;
  index?: number;
};

export function AnimatedContentScroll({ children, index = 10 }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      delay: index * 20,
    }).start();
  }, [opacity, index]);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
}
