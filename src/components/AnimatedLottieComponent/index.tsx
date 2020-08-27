import React from 'react';
import Lottie from 'react-lottie';

interface AnimatedLottieComponentProps {
  animationData: any;
  height?: number;
  width?: number;
}

const AnimatedLottieComponent: React.FC<AnimatedLottieComponentProps> = ({
  animationData,
  height,
  width,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default AnimatedLottieComponent;
