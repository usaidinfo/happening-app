// components/home/SearchBar.tsx
import React from 'react';
import { Box, Input, Icon, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <Box px={4} py={2}>
      <Box position="relative" alignItems="center" flexDirection="row">
        <Input
          placeholder="Search events, shows and more..."
          fontSize="sm"
          bg={useColorMode().colorMode === 'dark' ? 'gray.800' : 'gray.100'}
          borderWidth={0}
          py={3}
          px={4}
          rounded="xl"
          color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
          placeholderTextColor={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.500'}
          InputLeftElement={
            <Icon
              as={<Ionicons name="search" />}
              size={5}
              ml={3}
              color={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.400'}
            />
          }
        />
        <Box position="absolute" right={3} zIndex={1}>
          <Box position="relative">
            <Ionicons
              name="notifications-outline"
              size={24}
              color={useColorMode().colorMode === 'dark' ? '#A0AEC0' : '#666'}
            />
            <Box
              position="absolute"
              top={-2}
              right={-2}
              bg="purple.500"
              w={2}
              h={2}
              rounded="full"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}