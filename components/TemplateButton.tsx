import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface TemplateButtonProps {
    text: string,
    handlePress: any
};

const TemplateButton: React.FC<TemplateButtonProps> = ({ text, handlePress }) => {
  return (
    <StyledTouchableOpacity
      onPress={handlePress}
      activeOpacity={0.6}
      className="h-12 py-2 pb-2 mt-10 bg-orange-500 rounded-lg"
    >
      <StyledText className="text-xl font-semibold text-center text-white">
        <Link href='/(tabs)/'>
        {text}
        </Link>
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default TemplateButton;
