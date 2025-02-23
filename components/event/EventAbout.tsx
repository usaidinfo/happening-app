// components/event/EventAbout.tsx
import React from 'react';
import { VStack, Text, Pressable, useColorMode } from 'native-base';

interface EventAboutProps {
  description: string;
}

export const EventAbout = ({ description }: EventAboutProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { colorMode } = useColorMode();

  return (
    <VStack space={2}>
      <Text 
        fontSize="lg" 
        fontWeight="600"
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        About The Event
      </Text>
      <Text 
        fontSize="sm" 
        color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
        numberOfLines={isExpanded ? undefined : 3}
      >
        {description}
      </Text>
      <Pressable onPress={() => setIsExpanded(!isExpanded)}>
        <Text color="purple.500" fontSize="sm">
          {isExpanded ? 'Show Less' : 'Read More'}
        </Text>
      </Pressable>
    </VStack>
  );
};