// app/booking/confirmation.tsx
import React from 'react';
import { Box, Text, VStack, Button, Icon, HStack, Center, useColorMode } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams, Stack } from 'expo-router';

export default function BookingConfirmation() {
  const params = useLocalSearchParams();
  const { totalAmount, seats } = params;

  return (
    <Box flex={1} bg={useColorMode().colorMode === 'dark' ? 'gray.900' : 'white'} p={4}>
      <Stack.Screen 
        options={{ 
          headerShown: false 
        }} 
      />
      <VStack space={8} alignItems="center" justifyContent="center" flex={1}>
        <Center 
          bg={useColorMode().colorMode === 'dark' ? 'green.900' : 'green.100'} 
          w={24} 
          h={24} 
          rounded="full"
        >
          <Icon 
            as={Ionicons} 
            name="checkmark-circle" 
            size={16} 
            color={useColorMode().colorMode === 'dark' ? 'green.400' : 'green.500'} 
          />
        </Center>
        
        <VStack space={2} alignItems="center">
          <Text 
            fontSize="2xl" 
            fontWeight="700"
            color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
          >
            Booking Confirmed!
          </Text>
          <Text 
            fontSize="md" 
            color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.600'} 
            textAlign="center"
          >
            Your seats have been reserved
          </Text>
        </VStack>
        
        <VStack 
          space={4} 
          w="full" 
          bg={useColorMode().colorMode === 'dark' ? 'gray.800' : 'gray.50'} 
          p={4} 
          rounded="xl"
          borderWidth={useColorMode().colorMode === 'dark' ? 1 : 0}
          borderColor={useColorMode().colorMode === 'dark' ? 'gray.700' : 'transparent'}
        >
          <HStack justifyContent="space-between">
            <Text 
              fontSize="md" 
              color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            >
              Total Amount
            </Text>
            <Text 
              fontSize="md" 
              fontWeight="600"
              color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
            >
              ₹ {totalAmount}
            </Text>
          </HStack>
          
          <HStack justifyContent="space-between">
            <Text 
              fontSize="md" 
              color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            >
              Seats
            </Text>
            <Text 
              fontSize="md" 
              fontWeight="600"
              color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
            >
              {seats}
            </Text>
          </HStack>
          
          <HStack justifyContent="space-between">
            <Text 
              fontSize="md" 
              color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            >
              Payment Method
            </Text>
            <Text 
              fontSize="md" 
              fontWeight="600"
              color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
            >
              UPI
            </Text>
          </HStack>
          
          <HStack justifyContent="space-between">
            <Text 
              fontSize="md" 
              color={useColorMode().colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            >
              Booking ID
            </Text>
            <Text 
              fontSize="md" 
              fontWeight="600"
              color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
            >
              BKID{Math.floor(Math.random() * 1000000)}
            </Text>
          </HStack>
        </VStack>
      </VStack>
      
      <VStack space={4} mt={6}>
        <Button 
          onPress={() => router.push('/booking')}
          bg="purple.500"
          _pressed={{ bg: "purple.600" }}
          py={3}
        >
          <Text color="white" fontWeight="600">View My Bookings</Text>
        </Button>
        
        <Button 
          onPress={() => router.push('/(tabs)')}
          variant="outline"
          borderColor="purple.500"
          _pressed={{ bg: useColorMode().colorMode === 'dark' ? "purple.800" : "purple.50" }}
          bg={useColorMode().colorMode === 'dark' ? 'transparent' : 'transparent'}
          py={3}
        >
          <Text color="purple.500" fontWeight="600">Back to Home</Text>
        </Button>
      </VStack>
    </Box>
  );
}