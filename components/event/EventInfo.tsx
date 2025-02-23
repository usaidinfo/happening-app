// components/event/EventInfo.tsx
import React from 'react';
import { VStack, HStack, Text, Box, Icon, Pressable, IconButton, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface EventInfoProps {
  title: string;
  interestedCount: string;
  date: string;
  duration: string;
  ageLimit: string;
  languages: string[];
  location: string;
}

export const EventInfo = ({
  title,
  interestedCount,
  date,
  duration,
  ageLimit,
  languages,
  location,
}: EventInfoProps) => {
  const [isWishlisted, setIsWishlisted] = React.useState<boolean>(false);
  const { colorMode } = useColorMode();

  const handleWishlist = () => {
    setIsWishlisted((prev: any) => !prev);
  };
  return (
    <VStack space={4}>
      <Text 
        fontSize="2xl" 
        py={3} 
        fontWeight="400"
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        {title}
      </Text>
            
      <HStack 
        justifyContent="space-between" 
        rounded="xl" 
        p={3} 
        bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} 
        alignItems="flex-start"
      >
        <HStack pt={2} space={2}>
          <Box bg="purple.100" p={1} rounded="full">
            <Icon as={Ionicons} name="heart" size={4} color="purple.500" />
          </Box>
          <Text 
            fontSize="sm" 
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
          >
            {interestedCount} are interested
          </Text>
        </HStack>
        <IconButton
          icon={
            <Icon 
              as={Ionicons} 
              name={isWishlisted ? "heart" : "heart-outline"} 
              size={6} 
              color={isWishlisted ? "red.500" : colorMode === 'dark' ? "gray.300" : "gray.400"} 
            />
          }
          onPress={handleWishlist}
        />
      </HStack>

      <VStack space={3}>
        <HStack space={3} alignItems="center">
          <Icon 
            as={Ionicons} 
            name="calendar-outline" 
            size={5} 
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
          />
          <Text 
            fontSize="sm"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}
          >
            {date}
          </Text>
        </HStack>

        <HStack space={3} alignItems="center">
          <Icon 
            as={Ionicons} 
            name="time-outline" 
            size={5} 
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
          />
          <Text 
            fontSize="sm"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}
          >
            {duration}
          </Text>
        </HStack>

        <HStack space={3} alignItems="center">
          <Icon 
            as={Ionicons} 
            name="person-outline" 
            size={5} 
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
          />
          <Text 
            fontSize="sm"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}
          >
            {ageLimit}
          </Text>
        </HStack>

        <HStack space={3} alignItems="center">
          <Icon 
            as={Ionicons} 
            name="language-outline" 
            size={5} 
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
          />
          <Text 
            fontSize="sm"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}
          >
            {languages.join(', ')}
          </Text>
        </HStack>

        <HStack space={3} alignItems="center">
          <Icon 
            as={Ionicons} 
            name="location-outline" 
            size={5} 
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
          />
          <Text 
            fontSize="sm"
            color={colorMode === 'dark' ? 'gray.300' : 'gray.800'}
          >
            {location}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};