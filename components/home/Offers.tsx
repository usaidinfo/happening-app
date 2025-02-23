// components/home/Offers.tsx
import React from 'react';
import { Box, ScrollView, Text, Image, Pressable, useColorMode } from 'native-base';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface Offer {
  id: number;
  image: string;
  title: string;
}

interface EventImage {
    [key: string]: any;
  }

const eventImages:EventImage = {
    'early-bird.png': require('../../assets/images/Offer for you/early-bird.png'),
    '250-off.png': require('../../assets/images/Offer for you/250-off.png'),
    'buy2get1.png': require('../../assets/images/Offer for you/buy2get1.png'),
    '20%off.png': require('../../assets/images/Offer for you/20%off.png'),
  };

const offers: Offer[] = [
  { id: 1, image: 'early-bird.png', title: 'Early Bird Offer\n20% Off' },
  { id: 2, image: '250-off.png', title: '₹250 Off\non First Booking' },
  { id: 3, image: 'buy2get1.png', title: 'Buy 2 Get 1\nFree' },
  { id: 4, image: '20%off.png', title: 'Special Discount\n20% Off' },
];

export default function Offers() {
  return (
    <Box px={4}>
    <Text 
      fontSize="xl" 
      fontWeight="600" 
      mb={4}
      color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
    >
      Offers for you
    </Text>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
    >
      {offers.map((offer, index) => (
        <Animated.View
          key={offer.id}
          entering={FadeInRight.delay(index * 100)}
        >
          <Pressable mr={4} onPress={() => {}}>
            <Box
              position="relative"
              w="200px"
              h="100px"
              overflow="hidden"
              rounded="2xl"
              shadow={2}
            >
              <Image
                source={eventImages[offer.image]}
                alt={offer.title}
                w="full"
                h="full"
                resizeMode="cover"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                p={3}
                bg="rgba(0,0,0,0.5)"
              >
                <Text
                  color="white"
                  fontWeight="600"
                  fontSize="sm"
                  textAlign="center"
                  numberOfLines={2}
                >
                  {offer.title}
                </Text>
              </Box>
            </Box>
          </Pressable>
        </Animated.View>
      ))}
    </ScrollView>
  </Box>
  );
}