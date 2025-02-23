// components/home/Categories.tsx
import React from 'react';
import { Box, ScrollView, Pressable, Text, Image, VStack, useColorMode } from 'native-base';
import Animated, { FadeInRight } from 'react-native-reanimated';

interface Category {
    id: number;
    name: string;
    image: string;
    color: string; 
  }
  
  interface CategoryImage {
    [key: string]: any;
  }

const categoryImages:CategoryImage = {
    'Plays.png': require('../../assets/images/categories/Plays.png'),
    'pets-show.png': require('../../assets/images/categories/pets-show.png'),
    'concert.png': require('../../assets/images/categories/concert.png'),
    'magician.png': require('../../assets/images/categories/magician.png'),
    'food-fest.png': require('../../assets/images/categories/food-fest.png'),
    'dance.png': require('../../assets/images/categories/dance.png'),
    'Premiere.png': require('../../assets/images/categories/Premiere.png'),
    'Sports.png': require('../../assets/images/categories/Sports.png'),
  };

// const categories = [
//   { id: 1, name: 'Plays', image: 'Plays.png' },
//   { id: 2, name: 'Pets Show', image: 'pets-show.png' },
//   { id: 3, name: 'Concert', image: 'concert.png' },
//   { id: 4, name: 'Magician', image: 'magician.png' },
//   { id: 5, name: 'Food Fest', image: 'food-fest.png' },
//   { id: 6, name: 'Dance', image: 'dance.png' },
//   { id: 7, name: 'Premiere', image: 'Premiere.png' },
//   { id: 8, name: 'Sports', image: 'Sports.png' },
//   { id: 9, name: 'Air Show', image: 'Plays.png' },
//   { id: 10, name: 'Carnival', image: 'pets-show.png' },
//   { id: 11, name: 'Exhibition', image: 'concert.png' },
//   { id: 12, name: 'Talks', image: 'magician.png' },
//   { id: 13, name: 'Trade Fair', image: 'food-fest.png' },
//   { id: 14, name: 'Launch', image: 'dance.png' },
// ];

const categories: Category[] = [
    { 
      id: 1, 
      name: 'Plays', 
      image: 'Plays.png',
      color: '#8B5CF6' 
    },
    { 
      id: 2, 
      name: 'Pets Show', 
      image: 'pets-show.png',
      color: '#EC4899'  // Pink
    },
    { 
      id: 3, 
      name: 'Concert', 
      image: 'concert.png',
      color: '#3B82F6'  // Blue
    },
    { 
      id: 4, 
      name: 'Magician', 
      image: 'magician.png',
      color: '#F97316'  // Orange
    },
    { 
      id: 5, 
      name: 'Food Fest', 
      image: 'food-fest.png',
      color: '#10B981'  // Green
    },
    { 
      id: 6, 
      name: 'Dance', 
      image: 'dance.png',
      color: '#EF4444'  // Red
    },
    { 
      id: 7, 
      name: 'Premiere', 
      image: 'Premiere.png',
      color: '#6366F1'  // Indigo
    },
    { 
      id: 8, 
      name: 'Sports', 
      image: 'Sports.png',
      color: '#14B8A6'  // Teal
    },
    { 
        id: 9, 
        name: 'Air Show', 
        image: 'Premiere.png',
        color: '#6366F1'  // Indigo
      },
      { 
        id: 10, 
        name: 'Carnival', 
        image: 'dance.png',
        color: '#EF4444'  // Red
      },
  ];

export default function Categories() {
    const itemsPerRow = Math.ceil(categories.length / 2);
    
    return (
      <Box px={4} mt={4}>
      <Text fontSize="xl" fontWeight="600" mb={4} color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}>Pick your category</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        <Box 
          flexDirection="row" 
          flexWrap="wrap" 
          width={itemsPerRow * 100}
          height={270}
        >
          {categories.map((category, index) => (
            <Pressable
              key={category.id}
              w={`${100 / Math.ceil(categories.length / 2)}%`}
              h="100px"
              mb={8}
              onPress={() => {}}
              paddingX={2}
            >
              <Animated.View
                entering={FadeInRight.delay(index * 100)}
                style={{
                  flex: 1,
                }}
              >
                <Pressable>
                  {({ isPressed }) => (
                    <Box
                      bg={useColorMode().colorMode === 'dark' ? 'gray.800' : 'white'}
                      style={{
                        transform: [{
                          scale: isPressed ? 0.98 : 1,
                        }],
                        shadowColor: category.color,
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.15,
                        shadowRadius: 8,
                        elevation: 3,
                      }}
                      rounded="2xl"
                      p={3}
                    >
                      <VStack alignItems="center" space={1}>
                        <Box
                          bg={`${category.color}15`}
                          p={2}
                          rounded="xl"
                          style={{
                            shadowColor: category.color,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                          }}
                        >
                          <Image
                            source={categoryImages[category.image]}
                            alt={category.name}
                            w="42px"
                            h="42px"
                            rounded="lg"
                          />
                        </Box>
                        <Text 
                          fontSize="xs" 
                          numberOfLines={1}
                          textAlign="center"
                          fontWeight="500"
                          color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.700'}
                          mt={1}
                        >
                          {category.name}
                        </Text>
                      </VStack>
                    </Box>
                  )}
                </Pressable>
              </Animated.View>
            </Pressable>
          ))}
        </Box>
      </ScrollView>
    </Box>
    );
  }