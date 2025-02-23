// components/event/EventOffers.tsx
import React from 'react';
import { VStack, HStack, Text, Box, Icon, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const EventOffers = () => {
  const { colorMode } = useColorMode();
  
  return (
    <VStack space={3}>
      <Text 
        fontSize="lg" 
        fontWeight="600"
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        Top Offers For You
      </Text>
      <Box 
        bg={colorMode === 'dark' ? 'red.900' : 'red.50'} 
        p={4} 
        rounded="xl"
      >
        <HStack space={3} alignItems="center">
          <Icon 
            as={Ionicons} 
            name="gift-outline" 
            size={5} 
            color="red.500" 
          />
          <VStack>
            <Text 
              fontSize="sm" 
              fontWeight="500"
              color={colorMode === 'dark' ? 'white' : 'gray.800'}
            >
              Enjoy 10% off coupon
            </Text>
            <Text 
              fontSize="xs" 
              color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
            >
              Valid on all bookings
            </Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};