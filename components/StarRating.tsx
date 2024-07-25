// StarRating.js
import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface StarRatingProps {
    rating: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5; // Total number of stars
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <FontAwesome
        key={i}
        name={i <= rating ? 'star' : 'star-o'} // 'star' for filled, 'star-o' for empty
        size={24}
        color={i <= rating ? 'gold' : 'gray'}
      />
    );
  }

  return (
    <View className='flex-row mt-1'>
      {stars}
    </View>
  );
};

export default StarRating;
