// components/home/Header.tsx
import React from 'react';
import { Box, HStack, VStack, Text, IconButton, Image, Input, Icon, Pressable, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import LocationOverlay from '../overlays/LocationOverlay';

export default function Header() {
  const [isLocationOverlayOpen, setIsLocationOverlayOpen] = React.useState(false);

  return (
    <>
      <Box pt={8} pb={5} bg={useColorMode().colorMode === 'dark' ? 'gray.900' : 'white'}>
        <HStack px={4} justifyContent="space-between" alignItems="center">
          <Image
            source={require('../../assets/images/Logo/happening-logo.png')}
            alt="Happening Logo"
            w="100"
            h="45"
            resizeMode="contain"
          />
          <Pressable onPress={() => setIsLocationOverlayOpen(true)}>
            <VStack>
              <Text fontSize="xs" color={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.500'}>Current Location</Text>
              <HStack alignItems="center" space={1}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={useColorMode().colorMode === 'dark' ? '#A0AEC0' : '#666'}
                />
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
                >
                  Bangalore
                </Text>
                <Text
                  fontSize="xs"
                  color={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                >
                  Indiranagar
                </Text>
                <Ionicons
                  name="chevron-down"
                  size={16}
                  color={useColorMode().colorMode === 'dark' ? '#A0AEC0' : '#666'}
                />
              </HStack>
            </VStack>
          </Pressable>
        </HStack>
      </Box>

      <LocationOverlay
        isOpen={isLocationOverlayOpen}
        onClose={() => setIsLocationOverlayOpen(false)}
      />
    </>
  );
}