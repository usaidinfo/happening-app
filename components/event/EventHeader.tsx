// components/event/EventHeader.tsx
import React from 'react';
import { Box, Image, IconButton, HStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface EventHeaderProps {
  image: string;
  onBack: () => void;
  onShare: () => void;
}

const headerImages = {
  'ARrehman-show.png': require('../../assets/images/Show/ARrehman-show.png'),
} as const;

export const EventHeader = ({ image, onBack, onShare }: EventHeaderProps) => {

  const imageSource = headerImages[image as keyof typeof headerImages];

  return (
    <Box position="relative" w="full" h="250px">
      <Image
        source={require('../../assets/images/Show/ARrehman-show.png')}
        alt="Event Cover"
        w="full"
        h="full"
        resizeMode="cover"
      />
      
      <HStack 
        position="absolute" 
        top={12} 
        left={0} 
        right={0}
        px={4}
        justifyContent="space-between"
      >
        <IconButton
          icon={<Ionicons name="arrow-back" size={24} color="white" />}
          onPress={() => router.back()}
          bg="rgba(0,0,0,0.3)"
          rounded="full"
          _pressed={{ bg: 'rgba(0,0,0,0.4)' }}
        />
        <IconButton
          icon={<Ionicons name="share-social" size={24} color="white" />}
          onPress={() => {}}
          bg="rgba(0,0,0,0.3)"
          rounded="full"
          _pressed={{ bg: 'rgba(0,0,0,0.4)' }}
        />
      </HStack>
    </Box>
  );
};