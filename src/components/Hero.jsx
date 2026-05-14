import BlurText from "../../components/BlurText";
import React from "react";
import TextType from "../../components/TextType";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="flex flex-col items-center">
      <BlurText
        text="All Your AI Tools"
        delay={200}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-6xl mb-8 font-bold"
      />
      <TextType
        text={["In One Place"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        texts={[
          "Welcome to React Bits! Good to see you!",
          "Build some amazing experiences!",
        ]}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
        className="text-6xl"
      />
    </div>
  );
}
