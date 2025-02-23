// components/home/ResumeBooking.tsx
import React from 'react';
import { Box, HStack, VStack, Text, Image, Pressable, useColorMode } from 'native-base';

interface BookingImages {
  [key: string]: any; 
}

const bookingImages: BookingImages = {
  'jokes-bunker.png': require('../../assets/images/resume booking/jokes-bunker.png'),
  'dancelikeaman.png': require('../../assets/images/resume booking/dancelikeaman.png'),
};


const bookings = [
  { id: 1, title: 'Jokes Bunker', type: 'Comedy Show', image: 'jokes-bunker.png' },
  { id: 2, title: 'Dance Like A Man', type: 'Dance Show', image: 'dancelikeaman.png' },
];

export default function ResumeBooking() {
  return (
    <Box px={4} mt={6}>
      <Text
        fontSize="xl"
        fontWeight="600"
        mb={4}
        color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        Resume your booking
      </Text>
      <VStack space={3}>
        {bookings.map((booking) => (
          <Pressable
            key={booking.id}
            bg={useColorMode().colorMode === 'dark' ? 'gray.800' : 'gray.50'}
            p={3}
            rounded="xl"
            onPress={() => { }}
          >
            <HStack space={3} alignItems="center">
              <Image
                source={bookingImages[booking.image]}
                alt={booking.title}
                size="sm"
                rounded="lg"
              />
              <VStack>
                <Text
                  fontWeight="500"
                  color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
                >
                  {booking.title}
                </Text>
                <Text
                  fontSize="xs"
                  color={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                >
                  {booking.type}
                </Text>
              </VStack>
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </Box>
  );
}