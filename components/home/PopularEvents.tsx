// components/home/PopularEvents.tsx
import React from 'react';
import { Box, ScrollView, Text, Image, Pressable, HStack, useColorMode } from 'native-base';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

interface Event {
  id: string; 
  image: string;
}

type EventRouteParams = {
  id: string;
};


interface EventImage {
  [key: string]: any;
}

const eventImages: EventImage = {
  'ARrehman-live-concert.png': require('../../assets/images/Most popular/ARrehman-live-concert.png'),
  'cricket.png': require('../../assets/images/Most popular/cricket.png'),
  'zakir-khan.png': require('../../assets/images/Most popular/zakir-khan.png'),
};

const popularEvents: Event[] = [
  { id: '1', image: 'ARrehman-live-concert.png' },
  { id: '2', image: 'cricket.png' },
  { id: '3', image: 'zakir-khan.png' },
];

export default function PopularEvents() {
  const router = useRouter();

  const handleEventPress = (eventId: string) => {
    router.push({ pathname: '/event/[id]', params: { id: eventId } });
  };

  return (
    <Box px={4}>
      <HStack justifyContent="space-between" alignItems="center" mb={4}>
        <Text
          fontSize="xl"
          fontWeight="600"
          color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
        >
          Most Popular
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
        {popularEvents.map((event) => (
          <Pressable
            key={event.id}
            mr={4}
            onPress={() => handleEventPress(event.id)}
            _pressed={{ opacity: 0.8 }}
          >
            <Image
              source={eventImages[event.image]}
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