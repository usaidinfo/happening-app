// app/(tabs)/wishlist.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  VStack, 
  HStack, 
  Heading, 
  Image, 
  Pressable, 
  useColorMode,
  Icon,
  FlatList,
  Box
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface WishlistItem {
  id: string;
  title: string;
  date: string;
  venue: string;
  price: string;
  image: any;
}

export default function WishlistScreen(): JSX.Element {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const wishlistItems: WishlistItem[] = [
    {
      id: '1',
      title: 'AR Rahman Live Concert',
      date: '21 Feb 2025',
      venue: 'North Avenue Grounds, Bangalore',
      price: '₹1,480',
      image: require('../../assets/images/Most popular/ARrehman-live-concert.png')
    },
    {
      id: '2',
      title: 'IPL Match: RCB vs CSK',
      date: '15 Mar 2025',
      venue: 'M Chinnaswamy Stadium',
      price: '₹800',
      image: require('../../assets/images/Most popular/cricket.png')
    },
    {
      id: '3',
      title: 'Zakir Khan Comedy Show',
      date: '10 Feb 2025',
      venue: 'Town Hall, Bangalore',
      price: '₹480',
      image: require('../../assets/images/Most popular/zakir-khan.png')
    }
  ];

  const navigateToEvent = (eventId: string): void => {
    router.push({ pathname: '/event/[id]', params: { id: eventId } });
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  const removeFromWishlist = (id: string): void => {
    console.log(`Removed ${id} from wishlist`);
  };

  return (
    <SafeAreaView 
      style={{ 
        flex: 1, 
        backgroundColor: colorMode === 'dark' ? '#171923' : '#FFFFFF' 
      }}
    >
      <View flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'white'} px={4}>
        <Heading 
          size="xl" 
          color={colorMode === 'dark' ? 'white' : 'gray.800'} 
          mt={4} 
          mb={6}
        >
          My Wishlist
        </Heading>

        {wishlistItems.length > 0 ? (
          <FlatList
            data={wishlistItems}
            keyExtractor={(item: WishlistItem) => item.id}
            renderItem={({ item }: { item: WishlistItem }) => (
              <Pressable mb={4} onPress={() => navigateToEvent(item.id)}>
                <View
                  bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  borderWidth={1}
                  borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  rounded="xl"
                  overflow="hidden"
                  shadow={2}
                >
                  <Image
                    source={item.image}
                    alt={item.title}
                    h={150}
                    w="full"
                    resizeMode="cover"
                  />
                  <VStack p={4}>
                    <HStack justifyContent="space-between" alignItems="center">
                      <Heading 
                        size="sm" 
                        color={colorMode === 'dark' ? 'white' : 'gray.800'}
                        noOfLines={1}
                        flexShrink={1}
                        mr={2}
                      >
                        {item.title}
                      </Heading>
                      <Pressable 
                        hitSlop={8} 
                        onPress={() => removeFromWishlist(item.id)}
                      >
                        <Icon 
                          as={Ionicons} 
                          name="heart" 
                          size="sm" 
                          color="red.500" 
                        />
                      </Pressable>
                    </HStack>
                    
                    <HStack space={1} mt={1} alignItems="center">
                      <Text fontSize="2xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}>
                        📅 {item.date}
                      </Text>
                    </HStack>
                    
                    <HStack space={1} alignItems="center">
                      <Text fontSize="2xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} noOfLines={1}>
                        📍 {item.venue}
                      </Text>
                    </HStack>
                    
                    <HStack justifyContent="space-between" alignItems="center" mt={2}>
                      <Text 
                        fontWeight="bold" 
                        color={colorMode === 'dark' ? 'white' : 'gray.800'}
                      >
                        {item.price}
                      </Text>
                      <View 
                        px={3} 
                        py={1} 
                        bg={colorMode === 'dark' ? 'purple.600' : 'purple.100'} 
                        rounded="full"
                      >
                        <Text 
                          fontSize="2xs" 
                          color={colorMode === 'dark' ? 'white' : 'purple.600'}
                          fontWeight="medium"
                        >
                          Book Now
                        </Text>
                      </View>
                    </HStack>
                  </VStack>
                </View>
              </Pressable>
            )}
          />
        ) : (
          <View flex={1} justifyContent="center" alignItems="center">
            <Icon 
              as={Ionicons} 
              name="heart-outline" 
              size="6xl" 
              color={colorMode === 'dark' ? 'gray.700' : 'gray.200'} 
              mb={4}
            />
            <Heading 
              size="md" 
              color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} 
              textAlign="center" 
              mb={2}
            >
              Your Wishlist is Empty
            </Heading>
            <Text 
              color={colorMode === 'dark' ? 'gray.500' : 'gray.400'} 
              textAlign="center" 
              px={10}
            >
              Events you like will appear here. Start exploring!
            </Text>
            <Pressable 
              mt={6} 
              px={6} 
              py={2} 
              bg="purple.600" 
              rounded="full"
              onPress={() => router.push('/')}
            >
              <Text color="white" fontWeight="medium">
                Explore Events
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}