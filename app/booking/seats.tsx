// app/booking/seats.tsx
import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, VStack, Button, IconButton, ScrollView, Pressable, Icon, useColorMode } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams, Stack } from 'expo-router';

interface SeatClass {
  id: string;
  name: string;
  price: number;
  gradientColors: readonly [string, string];
  available: number;
  selected: number;
}

export default function SeatSelection() {
  const params = useLocalSearchParams();
  const { eventId } = params;

  const [seatClasses, setSeatClasses] = useState<SeatClass[]>([
    {
      id: 'platinum',
      name: 'Platinum Class',
      price: 1480,
      gradientColors: ['#5A5DB2', '#7C7EE8'] as const,
      available: 8,
      selected: 0,
    },
    {
      id: 'gold',
      name: 'Gold Class',
      price: 800,
      gradientColors: ['#E3A23C', '#FFD700'] as const, 
      available: 5,
      selected: 0,
    },
    {
      id: 'silver',
      name: 'Silver Class',
      price: 480,
      gradientColors: ['#A8A8A8', '#C0C0C0'] as const,
      available: 3,
      selected: 0,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalSeats, setTotalSeats] = useState(0);
  const taxAndFees = 199;

  useEffect(() => {
    let price = 0;
    let seats = 0;
    seatClasses.forEach((seat) => {
      price += seat.price * seat.selected;
      seats += seat.selected;
    });
    setTotalPrice(price);
    setTotalSeats(seats);
  }, [seatClasses]);

  const handleSeatSelection = (id: string, increment: boolean) => {
    setSeatClasses((prev) =>
      prev.map((seat) => {
        if (seat.id === id) {
          if (increment && seat.selected < seat.available) {
            return { ...seat, selected: seat.selected + 1 };
          } else if (!increment && seat.selected > 0) {
            return { ...seat, selected: seat.selected - 1 };
          }
        }
        return seat;
      })
    );
  };

  const handlePayNow = () => {
    router.push({
      pathname: '/booking/confirmation',
      params: {
        eventId: eventId as string,
        totalAmount: (totalPrice + taxAndFees).toString(),
        seats: totalSeats.toString(),
      },
    });
  };

  return (
    <Box flex={1} bg={useColorMode().colorMode === 'dark' ? 'gray.900' : 'white'}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <HStack p={4} alignItems="center" space={4} bg="purple.600" pt={8} shadow={3}>
        <IconButton
          icon={<Icon as={Ionicons} name="arrow-back" color="white" />}
          onPress={() => router.back()}
          variant="ghost"
        />
        <Text fontSize="xl" fontWeight="bold" color="white">
          Select Seats
        </Text>
      </HStack>
  
      <ScrollView flex={1} p={4}>
        <Box 
          rounded="lg" 
          overflow="hidden" 
          shadow={3} 
          borderWidth={1} 
          borderColor={useColorMode().colorMode === 'dark' ? 'gray.700' : 'gray.300'}
        >
          <Box 
            bg={useColorMode().colorMode === 'dark' ? 'gray.700' : 'gray.300'} 
            p={2} 
            alignItems="center" 
            shadow={1}
          >
            <Text 
              color={useColorMode().colorMode === 'dark' ? 'white' : 'black'} 
              fontSize="lg" 
              fontWeight="bold"
            >
              Stage
            </Text>
          </Box>
  
          {seatClasses.map((seat, index) => (
            <LinearGradient
              key={seat.id}
              colors={seat.gradientColors}
              start={[0, 0]}
              end={[1, 0]}
              style={{
                height: index === 0 ? 50 : index === 1 ? 70 : 90,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text color="white" fontSize="md" fontWeight="bold">
                {seat.name} ₹{seat.price}
              </Text>
            </LinearGradient>
          ))}
        </Box>
  
        <VStack space={5} mt={5}>
          {seatClasses.map((seat) => (
            <HStack
              key={seat.id}
              justifyContent="space-between"
              alignItems="center"
              p={4}
              shadow={2}
              borderRadius={10}
              bg={useColorMode().colorMode === 'dark' ? 'gray.800' : 'white'}
              borderWidth={useColorMode().colorMode === 'dark' ? 1 : 0}
              borderColor={useColorMode().colorMode === 'dark' ? 'gray.700' : 'transparent'}
            >
              <HStack space={4} alignItems="center">
                <Box
                  bg={seat.gradientColors[0]}
                  w={10}
                  h={10}
                  rounded="full"
                  alignItems="center"
                  justifyContent="center"
                  shadow={2}
                >
                  <Text color="white" fontSize="md" fontWeight="bold">
                    {seat.id.charAt(0).toUpperCase()}
                  </Text>
                </Box>
                <VStack>
                  <Text 
                    fontSize="md" 
                    fontWeight="bold"
                    color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
                  >
                    {seat.name}
                  </Text>
                  <Text 
                    fontSize="sm" 
                    color={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.500'}
                  >
                    ₹{seat.price}
                  </Text>
                </VStack>
              </HStack>
              <HStack space={3} alignItems="center">
                <IconButton
                  icon={<Icon as={Ionicons} name="remove" size="sm" color={useColorMode().colorMode === 'dark' ? 'gray.400' : 'gray.600'} />}
                  disabled={seat.selected === 0}
                  onPress={() => handleSeatSelection(seat.id, false)}
                />
                <Text 
                  fontSize="lg" 
                  fontWeight="bold"
                  color={useColorMode().colorMode === 'dark' ? 'white' : 'gray.800'}
                >
                  {seat.selected}
                </Text>
                <IconButton
                  icon={<Icon as={Ionicons} name="add" size="sm" color="purple.600" />}
                  disabled={seat.selected === seat.available}
                  onPress={() => handleSeatSelection(seat.id, true)}
                />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </ScrollView>
  
      {totalSeats > 0 && (
        <Box p={4} bg="purple.700" shadow={5}>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text fontSize="lg" fontWeight="bold" color="white">
                ₹{totalPrice}
              </Text>
              <Text fontSize="xs" color="gray.300">
                + ₹{taxAndFees} tax & fees
              </Text>
            </VStack>
            <Button
              bg="white"
              px={6}
              py={3}
              rounded="full"
              onPress={handlePayNow}
              _text={{ color: 'purple.600', fontWeight: 'bold' }}
            >
              Pay Now
            </Button>
          </HStack>
        </Box>
      )}
    </Box>
  );
}