import React, { useState } from 'react';
import {
  Input,
  Icon,
  VStack,
  HStack,
  Text,
  Pressable,
  Image,
  FlatList,
  useColorMode,
  Heading,
  View
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type SearchCategory = {
  id: string;
  name: string;
  icon: string;
};

type Section = {
  id: string;
  title: string;
  data: string[];
};

type SearchResult = {
  id: string;
  title: string;
  date: string;
  venue: string;
  category: string;
  image: any;
};

export default function SearchScreen() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'AR Rahman', 'Comedy Show', 'Cricket Match', 'Dance Performance'
  ]);

  const categories: SearchCategory[] = [
    { id: '1', name: 'Concert', icon: '🎵' },
    { id: '2', name: 'Comedy', icon: '🎭' },
    { id: '3', name: 'Sports', icon: '🏏' },
    { id: '4', name: 'Theatre', icon: '🎬' },
    { id: '5', name: 'Dance', icon: '💃' },
    { id: '6', name: 'Food Fest', icon: '🍲' },
  ];

  const searchResults: SearchResult[] = searchQuery ? [
    {
      id: '1',
      title: 'AR Rahman Live Concert',
      date: '21 Feb 2025',
      venue: 'North Avenue Grounds, Bangalore',
      category: 'Concert',
      image: require('../../assets/images/Most popular/ARrehman-live-concert.png')
    },
    {
      id: '2',
      title: 'IPL Match: RCB vs CSK',
      date: '15 Mar 2025',
      venue: 'M Chinnaswamy Stadium',
      category: 'Sports',
      image: require('../../assets/images/Most popular/cricket.png')
    },
    {
      id: '3',
      title: 'Zakir Khan Comedy Show',
      date: '10 Feb 2025',
      venue: 'Town Hall, Bangalore',
      category: 'Comedy',
      image: require('../../assets/images/Most popular/zakir-khan.png')
    }
  ].filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.trim() && !recentSearches.includes(text)) {
      setRecentSearches(prev => [text, ...prev.slice(0, 4)]);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const navigateToEvent = (eventId: string) => {
    router.push({ pathname: '/event/[id]', params: { id: eventId } });
  };

  const noSearchSections = [
    {
      id: 'recent',
      title: 'Recent Searches',
      data: recentSearches.length > 0 ? ['recentSearches'] : []
    },
    {
      id: 'categories',
      title: 'Popular Categories',
      data: ['categories']
    },
    {
      id: 'trending',
      title: 'Trending Searches',
      data: ['trending']
    }
  ];

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'recentSearches':
        return (
          <>
            <HStack justifyContent="space-between" alignItems="center" mb={3}>
              <Heading
                size="sm"
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
              >
                Recent Searches
              </Heading>
              <Pressable onPress={() => setRecentSearches([])}>
                <Text color={colorMode === 'dark' ? 'purple.400' : 'purple.600'} fontSize="sm">
                  Clear All
                </Text>
              </Pressable>
            </HStack>

            <HStack space={2} flexWrap="wrap">
              {recentSearches.map((item, index) => (
                <Pressable key={index} mr={2} mb={2} onPress={() => setSearchQuery(item)}>
                  <HStack
                    bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                    px={3}
                    py={2}
                    rounded="full"
                    space={1}
                    alignItems="center"
                  >
                    <Icon
                      as={<Ionicons name="time-outline" />}
                      size={3}
                      color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                    />
                    <Text color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                      {item}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </HStack>
          </>
        );
      case 'categories':
        return (
          <>
            <Heading size="sm" color={colorMode === 'dark' ? 'white' : 'gray.800'} mb={3}>
              Popular Categories
            </Heading>
            <HStack flexWrap="wrap" justifyContent="space-between">
              {categories.map((item) => (
                <Pressable 
                  key={item.id}
                  w="31%" 
                  p={2} 
                  mb={3}
                  onPress={() => setSearchQuery(item.name)}
                >
                  <VStack 
                    alignItems="center" 
                    bg={colorMode === 'dark' ? 'gray.800' : 'white'} 
                    p={4} 
                    rounded="lg"
                    borderWidth={1}
                    borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  >
                    <Text fontSize="2xl" mb={2}>
                      {item.icon}
                    </Text>
                    <Text 
                      fontSize="xs" 
                      fontWeight="medium"
                      color={colorMode === 'dark' ? 'white' : 'gray.800'}
                    >
                      {item.name}
                    </Text>
                  </VStack>
                </Pressable>
              ))}
            </HStack>
          </>
        );
      case 'trending':
        return (
          <>
            <Heading size="sm" color={colorMode === 'dark' ? 'white' : 'gray.800'} mb={3}>
              Trending Searches
            </Heading>
            <VStack space={3} bg={colorMode === 'dark' ? 'gray.800' : 'white'} p={4} rounded="lg" borderWidth={1} borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}>
              {['AR Rahman Concert', 'Comedy Festival', 'Weekender Festival', 'Dance Drama Show', 'Football Match'].map((item, index) => (
                <Pressable key={index} onPress={() => setSearchQuery(item)}>
                  <HStack justifyContent="space-between" alignItems="center" py={2}>
                    <HStack space={3} alignItems="center">
                      <Text
                        fontWeight="bold"
                        color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                        width={6}
                      >
                        {index + 1}
                      </Text>
                      <Text color={colorMode === 'dark' ? 'white' : 'gray.800'}>
                        {item}
                      </Text>
                    </HStack>
                    <Icon
                      as={<Ionicons name="trending-up" />}
                      size={4}
                      color={colorMode === 'dark' ? 'purple.400' : 'purple.600'}
                    />
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorMode === 'dark' ? '#171923' : '#FFFFFF' }}>
      <View flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'white'}>
        <VStack px={4} pt={2} pb={4} space={4}>
          <HStack space={4} alignItems="center">
            <Input
              placeholder="Search events, shows and more..."
              value={searchQuery}
              onChangeText={handleSearch}
              width="90%"
              py={3}
              px={3}
              fontSize="md"
              bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
              borderWidth={0}
              rounded="lg"
              color={colorMode === 'dark' ? 'white' : 'gray.800'}
              placeholderTextColor={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="search" />}
                  size={5}
                  ml={2}
                  color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                />
              }
              InputRightElement={
                searchQuery ? (
                  <Pressable onPress={handleClearSearch} mr={2}>
                    <Icon
                      as={<Ionicons name="close-circle" />}
                      size={5}
                      color={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                    />
                  </Pressable>
                ) : null
              }
            />
          </HStack>
        </VStack>

        {searchQuery ? (
          <FlatList
            data={searchResults}
            keyExtractor={(item: SearchResult) => item.id}
            contentContainerStyle={{ padding: 16 }}
            ListEmptyComponent={
              <View alignItems="center" justifyContent="center" p={10}>
                <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.500'} textAlign="center">
                  No results found for "{searchQuery}"
                </Text>
              </View>
            }
            renderItem={({ item }: { item: SearchResult }) => (
              <Pressable mb={4} onPress={() => navigateToEvent(item.id)}>
                <HStack
                  bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  rounded="lg"
                  overflow="hidden"
                  borderWidth={1}
                  borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  shadow={2}
                >
                  <Image
                    source={item.image}
                    alt={item.title}
                    width="100px"
                    height="100px"
                    resizeMode="cover"
                  />
                  <VStack flex={1} p={3} space={1}>
                    <Text
                      fontWeight="bold"
                      color={colorMode === 'dark' ? 'white' : 'gray.800'}
                      noOfLines={1}
                    >
                      {item.title}
                    </Text>
                    <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
                      📅 {item.date}
                    </Text>
                    <Text fontSize="xs" color={colorMode === 'dark' ? 'gray.400' : 'gray.600'} noOfLines={1}>
                      📍 {item.venue}
                    </Text>
                    <Text
                      fontSize="xs"
                      color={colorMode === 'dark' ? 'purple.400' : 'purple.600'}
                      fontWeight="medium"
                    >
                      {item.category}
                    </Text>
                  </VStack>
                </HStack>
              </Pressable>
            )}
          />
        ) : (
            <FlatList
              data={noSearchSections}
              keyExtractor={(item: Section) => item.id}
              contentContainerStyle={{ padding: 16 }}
              renderItem={({ item }: { item: Section }) => (
                <VStack space={5} mb={8}>
                  {item.data.map((sectionData: string) => (
                    <View key={sectionData}>
                      {renderSectionContent(sectionData)}
                    </View>
                  ))}
                </VStack>
              )}
            />
        )}
      </View>
    </SafeAreaView>
  );
}