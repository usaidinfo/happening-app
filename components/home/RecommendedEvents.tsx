// components/home/RecommendedEvents.tsx
import React from 'react';
import { Box, ScrollView, Text, Image, Pressable, HStack, useColorMode } from 'native-base';
import { useRouter } from 'expo-router';

interface RecommendedImages {
  [key: string]: any; 
}

type EventRouteParams = {
  id: string;
};

const recommendedImages: RecommendedImages = {
  'ARrehman-live-concert.png': require('../../assets/images/Most popular/ARrehman-live-concert.png'),
  'cricket.png': require('../../assets/images/Most popular/cricket.png'),
  'zakir-khan.png': require('../../assets/images/Most popular/zakir-khan.png'),
};

const recommendedEvents = [
  { id: '1', image: 'ARrehman-live-concert.png' },
  { id: '2', image: 'cricket.png' },
  { id: '3', image: 'zakir-khan.png' },
];

export default function RecommendedEvents() {
  const router = useRouter();

  const handleEventPress = (eventId: string) => {
    router.push({ pathname: '/event/[id]', params: { id: eventId } });
  };
  return (
    <Box px={4} mt={6} mb={6}>
      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <Text
          fontSize="xl"
          fontWeight="600"
          color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
        >
          Recommended for you
        </Text>
        <Pressable onPress={() => { }}>
          <Text color="purple.500" fontWeight="500">See all</Text>
        </Pressable>
      </HStack>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        {recommendedEvents.map((event) => (
          <Pressable
            key={event.id}
            mr={4}
            onPress={() => handleEventPress(event.id)}
            _pressed={{ opacity: 0.8 }}
          >
            <Image
              source={recommendedImages[event.image]}
              alt="Event"
              w="280px"
              h="160px"
              rounded="2xl"
            />
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
}