// app/(tabs)/account.tsx
import React from 'react';
import { 
  View, 
  Text, 
  VStack, 
  HStack, 
  Divider, 
  Pressable, 
  Icon, 
  Switch,
  useColorMode,
  Alert,
  Button,
  ScrollView,
  Badge
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MenuOption {
  id: string;
  title: string;
  icon: string;
  badge?: string;
  action?: () => void;
  rightElement?: JSX.Element;
  subtitle?: string;
}

export default function AccountScreen(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const isDarkMode = colorMode === 'dark';

  const handleLogout = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('userToken');
      router.push('/auth/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const openSupport = (): void => {
    console.log('Opening support');
  };

  const accountOptions: MenuOption[] = [
    {
      id: 'profile',
      title: 'Edit Profile',
      icon: 'person-outline',
      subtitle: 'Update your personal information'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: 'notifications-outline',
      badge: '3',
      subtitle: 'Manage your notification preferences'
    },
    {
      id: 'payment',
      title: 'Payment Methods',
      icon: 'card-outline',
      subtitle: 'Add or manage your payment options'
    },
    {
      id: 'theme',
      title: 'Dark Mode',
      icon: isDarkMode ? 'moon' : 'sunny-outline',
      rightElement: (
        <Switch
          size="md"
          isChecked={isDarkMode}
          onToggle={toggleColorMode}
          colorScheme="purple"
        />
      ),
      subtitle: 'Switch between light and dark themes'
    },
    {
      id: 'location',
      title: 'Location',
      icon: 'location-outline',
      subtitle: 'Manage your preferred locations'
    }
  ];

  const supportOptions: MenuOption[] = [
    {
      id: 'help',
      title: 'Help & Support',
      icon: 'help-circle-outline',
      action: openSupport,
      subtitle: 'Get assistance with your queries'
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: 'information-circle-outline',
      subtitle: 'Find answers to common questions'
    },
    {
      id: 'about',
      title: 'About Us',
      icon: 'business-outline',
      subtitle: 'Learn more about Happening'
    },
    {
      id: 'terms',
      title: 'Terms & Conditions',
      icon: 'document-text-outline',
      subtitle: 'Review our terms of service'
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: 'shield-checkmark-outline',
      subtitle: 'Read our privacy policy'
    }
  ];

  const renderMenuSection = (options: MenuOption[], sectionTitle: string): JSX.Element => (
    <VStack space={1} mt={4}>
      <Text color={isDarkMode ? "gray.400" : "gray.500"} fontWeight="medium" px={4} py={2}>
        {sectionTitle}
      </Text>
      <VStack 
        bg={isDarkMode ? "gray.800" : "white"} 
        borderRadius="xl" 
        borderWidth={1}
        borderColor={isDarkMode ? "gray.700" : "gray.200"}
        divider={<Divider bg={isDarkMode ? "gray.700" : "gray.100"} />}
      >
        {options.map((option) => (
          <Pressable
            key={option.id}
            py={3}
            px={4}
            onPress={option.action}
            _pressed={{ bg: isDarkMode ? "gray.700" : "gray.100" }}
          >
            <HStack alignItems="center" justifyContent="space-between">
              <HStack space={3} alignItems="center" flex={1}>
                <Icon 
                  as={Ionicons}
                  name={option.icon} 
                  size="md" 
                  color={isDarkMode ? "gray.300" : "gray.600"} 
                />
                <VStack flex={1}>
                  <HStack alignItems="center" space={2}>
                    <Text fontWeight="medium" color={isDarkMode ? "white" : "gray.800"}>
                      {option.title}
                    </Text>
                    {option.badge && (
                      <Badge colorScheme="purple" rounded="full" variant="solid" _text={{ fontSize: 'xs' }}>
                        {option.badge}
                      </Badge>
                    )}
                  </HStack>
                  {option.subtitle && (
                    <Text fontSize="xs" color={isDarkMode ? "gray.400" : "gray.500"} mt={0.5}>
                      {option.subtitle}
                    </Text>
                  )}
                </VStack>
              </HStack>
              {option.rightElement ? (
                option.rightElement
              ) : (
                <Icon 
                  as={Ionicons} 
                  name="chevron-forward" 
                  size="sm" 
                  color={isDarkMode ? "gray.400" : "gray.400"} 
                />
              )}
            </HStack>
          </Pressable>
        ))}
      </VStack>
    </VStack>
  );

  return (
    <SafeAreaView 
      style={{ 
        flex: 1, 
        backgroundColor: isDarkMode ? '#171923' : '#F9FAFB' 
      }}
    >
      <ScrollView 
        bg={isDarkMode ? "gray.900" : "gray.50"} 
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View px={4} pt={2} pb={4}>
          <HStack justifyContent="space-between" alignItems="center">
            <VStack>
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                color={isDarkMode ? "white" : "gray.800"}
              >
                John Doe
              </Text>
              <Text 
                fontSize="sm" 
                color={isDarkMode ? "gray.400" : "gray.500"}
              >
                john.doe@example.com
              </Text>
            </VStack>
            <Pressable 
              bg={isDarkMode ? "gray.800" : "white"} 
              p={2} 
              rounded="full"
              borderWidth={1}
              borderColor={isDarkMode ? "gray.700" : "gray.200"}
            >
              <Icon 
                as={Ionicons} 
                name="create-outline" 
                size="sm" 
                color={isDarkMode ? "white" : "gray.600"} 
              />
            </Pressable>
          </HStack>
        </View>

        <View px={4} mb={2}>
          <HStack 
            space={4} 
            bg={isDarkMode ? "purple.800" : "purple.100"}
            p={4}
            rounded="xl"
            alignItems="center"
          >
            <View 
              bg={isDarkMode ? "purple.700" : "purple.200"} 
              p={2} 
              rounded="lg"
            >
              <Icon 
                as={Ionicons} 
                name="diamond-outline" 
                size="md" 
                color={isDarkMode ? "purple.200" : "purple.700"} 
              />
            </View>
            <VStack flex={1}>
              <Text 
                fontWeight="bold" 
                color={isDarkMode ? "white" : "purple.800"}
              >
                Premium Member
              </Text>
              <Text 
                fontSize="xs" 
                color={isDarkMode ? "purple.200" : "purple.700"}
              >
                Valid until March 31, 2025
              </Text>
            </VStack>
            <Button
              size="sm"
              variant="outline"
              borderRadius="full"
            >
              <Text 
                fontSize="xs"
                fontWeight='bold' 
                color={isDarkMode ? "purple.200" : "purple.700"}
              >
                Upgrade
              </Text>
            </Button>
          </HStack>
        </View>

        <View px={4}>
          {renderMenuSection(accountOptions, 'ACCOUNT SETTINGS')}
          {renderMenuSection(supportOptions, 'SUPPORT & ABOUT')}
        </View>

        <View px={4} mt={6}>
          <Pressable
            bg={isDarkMode ? "red.900" : "red.50"}
            py={3}
            rounded="xl"
            onPress={handleLogout}
            _pressed={{ bg: isDarkMode ? "red.800" : "red.100" }}
          >
            <HStack alignItems="center" justifyContent="center" space={2}>
              <Icon 
                as={Ionicons} 
                name="log-out-outline" 
                size="sm" 
                color={isDarkMode ? "red.200" : "red.600"} 
              />
              <Text 
                fontWeight="medium" 
                color={isDarkMode ? "red.200" : "red.600"}
              >
                Logout
              </Text>
            </HStack>
          </Pressable>
        </View>

        <Text 
          textAlign="center" 
          fontSize="xs" 
          color={isDarkMode ? "gray.500" : "gray.400"} 
          mt={8}
        >
          Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}