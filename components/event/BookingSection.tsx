// components/event/BookingSection.tsx
import React from 'react';
import { Box, HStack, Select, Button, Text, VStack, useColorMode } from 'native-base';
import { router, usePathname } from 'expo-router';

interface BookingSectionProps {
  isEnabled: boolean;
  availableTimes: string[];
  onTimeSelect: (time: string) => void;
  seatsLeft: number;
}

export const BookingSection = ({
  isEnabled,
  availableTimes,
  onTimeSelect,
  seatsLeft,
}: BookingSectionProps) => {
  const pathname = usePathname();
  const eventId = pathname.split('/')[2];
  const { colorMode } = useColorMode();

  const handleBookNow = () => {
    router.push({
      pathname: '/booking/seats',
      params: { eventId }
    });
  };
  return (
    <Box 
      position="fixed" 
      bottom={0} 
      left={0} 
      right={0}
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      borderTopWidth={1}
      borderTopColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
      shadow={5}
      px={4}
      py={3}
      width="100%"
    >
      <VStack space={3}>
        <HStack justifyContent="space-between" alignItems="center">
          <VStack>
            <Text fontSize="xs" color="red.500">Seats left</Text>
            <Text fontSize="lg" color='red.500' fontWeight="600">16</Text>
          </VStack>
          <Select
            placeholder="Select time"
            width="150px"
            onValueChange={onTimeSelect}
            color={colorMode === 'dark' ? 'white' : 'gray.800'}
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
            borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.300'}
            _actionSheetContent={{
              bg: colorMode === 'dark' ? 'gray.800' : 'white',
            }}
          >
            {availableTimes.map((time) => (
              <Select.Item key={time} label={time} value={time} />
            ))}
          </Select>
        </HStack>
        <Button
          isDisabled={!isEnabled}
          bg={isEnabled ? "purple.500" : colorMode === 'dark' ? "gray.700" : "gray.300"}
          _pressed={{ bg: "purple.600" }}
          py={4}
          onPress={handleBookNow}
          _text={{ fontSize: "md", fontWeight: "600" }}
        >
          Book Now
        </Button>
      </VStack>
    </Box>
  );
};