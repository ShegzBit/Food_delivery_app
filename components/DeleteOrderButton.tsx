import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const DeleteOrderButton = () => {
  const handlePress = () => {
    Alert.alert('Item removed from Cart');
  };

  return (
    <StyledTouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className="pt-2 pb-2 mt-3 bg-orange-500 rounded-lg"
    >
      <StyledText className="text-lg font-semibold text-center text-white">
        Remove From Cart
      </StyledText>
    </StyledTouchableOpacity>
  );
};

export default DeleteOrderButton;