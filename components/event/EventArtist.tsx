// components/event/EventArtist.tsx
import React from 'react';
import { VStack, Text, Image, Box, HStack, Icon, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface EventArtistProps {
  image: string;
  name: string;
  profession: string;
}

const artistImages = {
  'AR-rehman.jpg': require('../../assets/images/Show/AR-rehman.jpg'),
} as const;


export const EventArtist = ({ image, name, profession }: EventArtistProps) => {
  const { colorMode } = useColorMode();
  const imageSource = artistImages[image as keyof typeof artistImages];
  
  return (
    <VStack space={2} alignItems="flex-start" w="full">
      <Text 
        fontSize="lg" 
        fontWeight="600"
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        Artist
      </Text>

      <Box position="relative" width="100px" mb={1}>
        <Image
      source={require('../../assets/images/Show/AR-rehman.jpg')}
      alt={name}
          w="100px"
          h="140px"
          rounded="md"
        />

        <Box
          position="absolute"
          top={1}
          left={1}
          bg="#0377FF"
          px={1}
          py={0.5}
          rounded="md"
        >
          <Icon
            as={Ionicons}
            name="trending-up"
            size="4"
            color="white"
          />
        </Box>
      </Box>

      <Text
        fontSize="md"
        fontWeight="600"
        isTruncated
        numberOfLines={1}
        w="100px"
        mb={0}
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        {name}
      </Text>
      <Text 
        fontSize="xs" 
        color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} 
        mt={-2}
      >
        {profession}
      </Text>
    </VStack>
  );
};