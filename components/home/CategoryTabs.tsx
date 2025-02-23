// components/home/CategoryTabs.tsx
import React from 'react';
import { ScrollView, Pressable, Text, HStack, Box, useColorMode } from 'native-base';

const tabs = ['Entertainment', 'Academic', 'Volunteering'];

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = React.useState('Entertainment');
  const { colorMode } = useColorMode();
  
  return (
    <Box px={4} py={2} bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HStack space={2}>
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
            >
              <Box
                px={4}
                py={2}
                bg={activeTab === tab ? 'purple.500' : 'transparent'}
                rounded="lg"
              >
                <Text
                  color={activeTab === tab ? 'white' : colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  fontWeight="500"
                >
                  {tab}
                </Text>
              </Box>
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    </Box>
  );
 }