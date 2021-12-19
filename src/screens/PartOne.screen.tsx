import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Button from "../components/Button";

const SIZE = 300.0;

const PartOneScreen = () => {
  const [click, setClick] = useState<boolean>(false);
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const innerRadius = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }],
      borderRadius: progress.value * SIZE,
    };
  }, [progress]);

  const reanimatedStyleInner = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value + 0.2 }],
      borderRadius: innerRadius.value,
    };
  }, [progress]);

  useEffect(() => {
    const currentOpacity = scale.value === 1 ? 0 : 1;
    const currentScale = scale.value === 0 ? 1 : 0;
    const currentInnerRadius = currentScale === 0 ? 100 : 0;

    progress.value = withRepeat(withSpring(1), 3, true);
    // scale.value = withSpring(currentScale);
    scale.value = withRepeat(withSpring(currentScale), 4, true);
    innerRadius.value = withSpring(currentInnerRadius);
  }, [click]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
          width: "100%",
        }}
      >
        <Animated.View
          style={[
            {
              height: SIZE,
              width: SIZE,
              backgroundColor: "#ffb703",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            reanimatedStyle,
          ]}
        />

        <Animated.View
          style={[
            {
              height: SIZE - 100,
              width: SIZE - 100,
              backgroundColor: "#3a0ca3",
              position: "absolute",
            },
            reanimatedStyleInner,
          ]}
        />
      </View>

      <Button
        style={{ width: "50%", marginTop: "20%" }}
        onPress={() => setClick((b) => !b)}
        text="Anímate!!"
      />
    </SafeAreaView>
  );
};

export default PartOneScreen;
