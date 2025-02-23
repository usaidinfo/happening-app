// components/overlays/TermsConditions.tsx
import React from 'react';
import { Actionsheet, Box, Text, Button, ScrollView, VStack } from 'native-base';

interface TermsConditionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsConditions = ({ isOpen, onClose }: TermsConditionsProps) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Box w="full" px={4} py={4}>
          <Text fontSize="xl" fontWeight="600" mb={4}>
            Terms & Conditions
          </Text>
          <ScrollView maxH="400px">
            <VStack space={3}>
              <Text fontSize="sm">
                1. Follow organiser guidelines
              </Text>
              <Text fontSize="sm">
                2. Drugs, smoke and alcohol consumption prohibited
              </Text>
              <Text fontSize="sm">
                3. Kids below 5 years not recommended
              </Text>
            </VStack>
          </ScrollView>
          <Button
            mt={6}
            bg="purple.500"
            _pressed={{ bg: "purple.600" }}
            onPress={onClose}
          >
            <Text color="white">Okay, Got it!</Text>
          </Button>
        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  );
};