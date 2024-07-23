import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const TempOrderButton = () => {
  const handlePress = () => {};

  return (
    <StyledTouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="pt-2 pb-2 m-3 bg-orange-500 rounded-lg"
    >
      <StyledText className="text-lg font-semibold text-center text-white">
        <Link href='/orders'>
            View Orders
        </Link>
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default TempOrderButton;
