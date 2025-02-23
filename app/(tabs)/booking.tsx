// app/(tabs)/booking.tsx
import React, { useState } from 'react';
import { 
  ScrollView, 
  Text, 
  VStack, 
  HStack, 
  Box, 
  Heading, 
  Image, 
  Pressable, 
  useColorMode,
  Center,
  Stack
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BookingScreen() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  const bookings = [
    {
      id: '1',
      title: 'AR Rahman Live Concert',
      date: '21 Feb 2025',
      venue: 'North Avenue Grounds, Bangalore',
      price: '₹2,960',
      status: 'upcoming',
      image: require('../../assets/images/Most popular/ARrehman-live-concert.png')
    },
    {
      id: '2',
      title: 'IPL Match: RCB vs CSK',
      date: '15 Mar 2025',
      venue: 'M Chinnaswamy Stadium',
      price: '₹2,400',
      status: 'upcoming',
      image: require('../../assets/images/Most popular/cricket.png')
    },
    {
      id: '3',
      title: 'Zakir Khan Comedy Show',
      date: '10 Feb 2025',
      venue: 'Town Hall, Bangalore',
      price: '₹480',
      status: 'completed',
      image: require('../../assets/images/Most popular/zakir-khan.png')
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === 'upcoming') return colorMode === 'dark' ? 'green.400' : 'green.500';
    if (status === 'completed') return colorMode === 'dark' ? 'blue.400' : 'blue.500';
    return colorMode === 'dark' ? 'red.400' : 'red.500';
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  return (
    <ScrollView 
      bg={colorMode === 'dark' ? 'gray.900' : 'white'} 
      showsVerticalScrollIndicator={false}
    >
      <Box px={4} pb={6} pt={12}>
        <Heading 
          color={colorMode === 'dark' ? 'white' : 'gray.800'}
          mb={6}
        >
          My Bookings
        </Heading>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} mb={6}>
          <HStack space={3}>
            {tabs.map(tab => (
              <Pressable key={tab.id} onPress={() => setActiveTab(tab.id)}>
                <Box
                  py={2}
                  px={4}
                  bg={activeTab === tab.id 
                    ? (colorMode === 'dark' ? 'purple.600' : 'purple.100') 
                    : (colorMode === 'dark' ? 'gray.800' : 'gray.100')}
                  rounded="lg"
                >
                  <Text
                    color={activeTab === tab.id 
                      ? (colorMode === 'dark' ? 'white' : 'purple.600') 
                      : (colorMode === 'dark' ? 'gray.400' : 'gray.600')}
                  >
                    {tab.label}
                  </Text>
                </Box>
              </Pressable>
            ))}
          </HStack>
        </ScrollView>

        {bookings.length > 0 ? (
          <VStack space={4}>
            {bookings.map(booking => (
              <Pressable 
                key={booking.id}
                onPress={() => {}}
              >
                <Box
                  bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  borderWidth={1}
                  borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  rounded="xl"
                  overflow="hidden"
                  shadow={2}
                >
                  <Image
                    source={booking.image}
                    alt={booking.title}
                    h={150}
                    w="full"
                    resizeMode="cover"
                  />
                  <Box p={4}>
                    <HStack justifyContent="space-between" alignItems="center" mb={2}>
                      <Heading 
                        size="sm" 
                        color={colorMode === 'dark' ? 'white' : 'gray.800'}
                        flexShrink={1}
                        noOfLines={1}
                      >
                        {booking.title}
                      </Heading>
                      <Text
                        fontSize="xs"
                        color={getStatusColor(booking.status)}
                        fontWeight="bold"
                      >
                        {booking.status.toUpperCase()}
                      </Text>
                    </HStack>
                    
                    <HStack space={2} mb={1} alignItems="center">
                      <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>
                        📅 {booking.date}
                      </Text>
                    </HStack>
                    
                    <HStack space={2} mb={1} alignItems="center">
                      <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} noOfLines={1}>
                        📍 {booking.venue}
                      </Text>
                    </HStack>
                    
                    <HStack justifyContent="space-between" alignItems="center" mt={2}>
                      <Text 
                        fontWeight="bold" 
                        color={colorMode === 'dark' ? 'white' : 'gray.800'}
                      >
                        {booking.price}
                      </Text>
                      <Pressable>
                        <Box 
                          px={3} 
                          py={1} 
                          bg={colorMode === 'dark' ? 'purple.700' : 'purple.100'} 
                          rounded="full"
                        >
                          <Text 
                            fontSize="xs" 
                            color={colorMode === 'dark' ? 'white' : 'purple.600'}
                          >
                            View Details
                          </Text>
                        </Box>
                      </Pressable>
                    </HStack>
                  </Box>
                </Box>
              </Pressable>
            ))}
          </VStack>
        ) : (
          <Center h={300}>
            <VStack alignItems="center" space={2}>
              <Box 
                bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} 
                p={4} 
                rounded="full"
              >
                <Text fontSize="4xl">🎫</Text>
              </Box>
              <Heading 
                size="md" 
                color={colorMode === 'dark' ? 'white' : 'gray.700'}
              >
                No Bookings Yet
              </Heading>
              <Text 
                color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} 
                textAlign="center"
              >
                Explore events and book your first experience
              </Text>
            </VStack>
          </Center>
        )}
      </Box>
    </ScrollView>
  );
}