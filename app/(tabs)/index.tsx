import React from 'react';
import { ScrollView, useColorMode } from 'native-base';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import CategoryTabs from '@/components/home/CategoryTabs';
import Categories from '@/components/home/Categories';
import PopularEvents from '@/components/home/PopularEvents';
import ResumeBooking from '@/components/home/ResumeBooking';
import RecommendedEvents from '@/components/home/RecommendedEvents';
import Offers from '@/components/home/Offers';
import SeasonalEvents from '@/components/home/SeasonalEvents';

export default function HomeScreen() {
  const { colorMode } = useColorMode();

  return (
    <ScrollView
    bg={colorMode === 'dark' ? 'gray.900' : 'white'} 
     showsVerticalScrollIndicator={false}>
      <Header />
      <SearchBar />
      <CategoryTabs />
      <Categories />
      <PopularEvents />
      <ResumeBooking />
      <RecommendedEvents />
      <Offers />
      <SeasonalEvents />
    </ScrollView>
  );
}