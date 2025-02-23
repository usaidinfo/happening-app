// components/home/SeasonalEvents.tsx
import React from "react";
import { Box, ScrollView, Text, Image, Pressable, VStack, useColorMode } from "native-base";
import Animated, { FadeInRight } from "react-native-reanimated";

interface Season {
  id: number;
  image: string;
  name: string;
}

interface SeasonalEventImage {
  [key: string]: any;
}

const seasonalEventImage: SeasonalEventImage = {
  "christmas.png": require("../../assets/images/Seasonal events/christmas.png"),
  "diwali.png": require("../../assets/images/Seasonal events/diwali.png"),
  "halloween.png": require("../../assets/images/Seasonal events/halloween.png"),
  "eid.png": require("../../assets/images/Seasonal events/eid.png"),
  "dussehra.png": require("../../assets/images/Seasonal events/dussehra.png"),
};

const seasons: Season[] = [
  { id: 1, image: "diwali.png", name: "Diwali" },
  { id: 2, image: "halloween.png", name: "Halloween" },
  { id: 3, image: "christmas.png", name: "Christmas" },
  { id: 4, image: "eid.png", name: "Eid" },
  { id: 5, image: "dussehra.png", name: "Dussehra" },
];

export default function SeasonalEvents() {
  return (
    <Box px={4} mt={6} mb={6}>
      <Text 
        fontSize="xl" 
        fontWeight="600" 
        mb={4}
        color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        Seasonal Events
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {seasons.map((season) => (
          <Pressable key={season.id} mr={4} onPress={() => {}}>
            <Box 
              bg={useColorMode().colorMode === 'dark' ? 'gray.800' : 'gray.50'} 
              rounded="lg" 
              overflow="hidden" 
              w="100px"
            >
              <Image
                source={seasonalEventImage[season.image]}
                alt={season.name}
                w="100px"
                h="80px"
                resizeMode="cover"
              />
              <Text
                fontSize="xs"
                fontWeight="500"
                textAlign="center"
                color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.700'}
                py={2}
                px={1}
              >
                {season.name}
              </Text>
            </Box>
          </Pressable>
        ))}
      </ScrollView>
    </Box>
  );
}
