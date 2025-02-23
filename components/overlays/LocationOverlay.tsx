// components/overlays/LocationOverlay.tsx
import React from 'react';
import { Box, VStack, HStack, Text, Pressable, Switch, IconButton, Actionsheet, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';



interface LocationOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

interface RecentLocation {
    id: string;
    name: string;
    address: string;
    isSelected?: boolean;
}

const recentLocations: RecentLocation[] = [
    {
        id: '1',
        name: 'Sheikh Sarai',
        address: '#14 JL Road, Delhi',
    },
    {
        id: '2',
        name: 'Saket',
        address: '2nd main, Saket main road',
    }
];

export default function LocationOverlay({ isOpen, onClose }: LocationOverlayProps) {
    const [locationEnabled, setLocationEnabled] = React.useState(false);
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';
  
    if (!isOpen) return null;
  
    return (
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content 
          borderTopRadius="3xl" 
          bg={isDark ? 'gray.800' : 'white'}
        >
          <HStack
            justifyContent="space-between"
            alignItems="center"
            p={4}
            borderBottomWidth={1}
            borderBottomColor={isDark ? 'gray.700' : 'gray.100'}
            w="full"
          >
            <Text 
              fontSize="lg" 
              fontWeight="700" 
              color={isDark ? 'white' : 'gray.800'}
            >
              Select your location
            </Text>
            <IconButton
              onPress={onClose}
              icon={<Ionicons name="close" size={24} color={isDark ? '#A0AEC0' : '#666'} />}
              rounded="full"
              _pressed={{ bg: isDark ? 'gray.700' : 'gray.100' }}
            />
          </HStack>
  
          <Box p={4} w="full">
            <HStack
              alignItems="center"
              justifyContent="space-between"
              bg={isDark ? 'purple.900' : 'purple.50'}
              p={4}
              rounded="xl"
              borderWidth={1}
              borderColor={isDark ? 'purple.800' : 'purple.100'}
            >
              <Text 
                fontSize="sm" 
                fontWeight="500" 
                color={isDark ? 'purple.300' : 'purple.800'}
              >
                Phone location permission
              </Text>
              <Switch
                size="md"
                onToggle={() => setLocationEnabled(!locationEnabled)}
                value={locationEnabled}
                colorScheme="purple"
              />
            </HStack>
          </Box>
  
          <Box px={4} w="full">
            <Text 
              fontSize="sm" 
              color={isDark ? 'gray.400' : 'gray.600'} 
              mb={2} 
              fontWeight="500"
            >
              Current Location
            </Text>
            <Pressable
              bg={isDark ? 'gray.700' : 'gray.50'}
              p={4}
              rounded="xl"
              borderWidth={1}
              borderColor={isDark ? 'gray.600' : 'gray.200'}
              _pressed={{ bg: isDark ? 'gray.600' : 'gray.100' }}
            >
              <HStack alignItems="center" space={3}>
                <Box bg={isDark ? 'purple.800' : 'purple.100'} p={2} rounded="lg">
                  <Ionicons 
                    name="location" 
                    size={20} 
                    color={isDark ? '#B794F4' : '#8B5CF6'} 
                  />
                </Box>
                <VStack flex={1}>
                  <Text 
                    fontSize="sm" 
                    fontWeight="600" 
                    color={isDark ? 'white' : 'gray.800'}
                  >
                    Bangalore
                  </Text>
                  <Text 
                    fontSize="xs" 
                    color={isDark ? 'gray.400' : 'gray.500'}
                  >
                    #2 KR Layout, 4th phase, Indiranagar
                  </Text>
                </VStack>
                <Box
                  borderWidth={2}
                  borderColor="purple.500"
                  bg="purple.500"
                  w={4}
                  h={4}
                  rounded="full"
                />
              </HStack>
            </Pressable>
          </Box>
  
          <Box px={4} mt={4} w="full">
            <Text 
              fontSize="sm" 
              color={isDark ? 'gray.400' : 'gray.600'} 
              mb={2} 
              fontWeight="500"
            >
              Recent Locations
            </Text>
            <VStack space={2}>
              {recentLocations.map(location => (
                <Pressable
                  key={location.id}
                  bg={isDark ? 'gray.700' : 'gray.50'}
                  p={4}
                  rounded="xl"
                  borderWidth={1}
                  borderColor={isDark ? 'gray.600' : 'gray.200'}
                  _pressed={{ bg: isDark ? 'gray.600' : 'gray.100' }}
                >
                  <HStack alignItems="center" space={3}>
                    <Box bg={isDark ? 'gray.600' : 'gray.200'} p={2} rounded="lg">
                      <Ionicons 
                        name="location-outline" 
                        size={20} 
                        color={isDark ? '#A0AEC0' : '#666'} 
                      />
                    </Box>
                    <VStack flex={1}>
                      <Text 
                        fontSize="sm" 
                        fontWeight="500" 
                        color={isDark ? 'white' : 'gray.800'}
                      >
                        {location.name}
                      </Text>
                      <Text 
                        fontSize="xs" 
                        color={isDark ? 'gray.400' : 'gray.500'}
                      >
                        {location.address}
                      </Text>
                    </VStack>
                    <Box
                      borderWidth={2}
                      borderColor={isDark ? 'gray.500' : 'gray.300'}
                      w={4}
                      h={4}
                      rounded="full"
                    />
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          </Box>
  
          <Box px={4} mt={6} w="full" mb={4}>
            <Pressable
              bg="purple.600"
              py={3}
              rounded="xl"
              _pressed={{ opacity: 0.8 }}
              onPress={onClose}
            >
              <Text color="white" textAlign="center" fontWeight="600">
                Confirm
              </Text>
            </Pressable>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    );
  }