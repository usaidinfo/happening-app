// app/event/[id].tsx
import { BookingSection } from '@/components/event/BookingSection';
import { EventAbout } from '@/components/event/EventAbout';
import { EventArtist } from '@/components/event/EventArtist';
import { EventHeader } from '@/components/event/EventHeader';
import { EventInfo } from '@/components/event/EventInfo';
import { EventOffers } from '@/components/event/EventOffers';
import { TermsConditions } from '@/components/overlays/TermsConditions';
import { Box, Pressable, ScrollView, VStack, Text, useColorMode } from 'native-base';
import React, { useState } from 'react';


export default function EventPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { colorMode } = useColorMode();

  
  return (
      <Box flex={1} bg={colorMode === 'dark' ? 'gray.900' : 'white'}>
        <ScrollView>
          <EventHeader
            image="ARrehman-show.png"
            onBack={() => { }}
            onShare={() => { }}
          />

          <VStack px={4} space={6} pb={17}>
            <EventInfo
              title="The complete AR Rahman Show"
              interestedCount="76.6k"
              date="Fri 21 Feb 2025"
              duration="2h 30m"
              ageLimit="5 years+"
              languages={["Hindi", "Tamil"]}
              location="North Avenue Grounds, Bangalore"
            />

            <EventOffers />

            <EventAbout
              description="A mesmerizing singing show filled with powerful vocals, emotional performances, and stunning stage presence. Talented artists captivate the audience with their unique styles, creating an unforgettable night of music and entertainment for all."
            />

            <EventArtist
              image="AR-rehman.jpg"
              name="A R Rahman"
              profession="Music Director"
            />

            <Pressable
              onPress={() => setShowTerms(true)}
              p={4}
              bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
              rounded="xl"
            >
              <Text color={colorMode === 'dark' ? 'white' : 'gray.800'}>Terms & Conditions</Text>
            </Pressable>
          </VStack>

        </ScrollView>

        <BookingSection
          isEnabled={!!selectedTime}
          availableTimes={['7:00 PM', '3:00 PM', '9:00 AM']}
          onTimeSelect={setSelectedTime}
          seatsLeft={16}
        />

        <TermsConditions
          isOpen={showTerms}
          onClose={() => setShowTerms(false)}
        />
      </Box>
  );
}