// app/auth/login.tsx
import React, { useState } from 'react';
import { 
  Box, 
  VStack, 
  Text, 
  Input, 
  Button, 
  Image, 
  Pressable, 
  Center, 
  HStack,
  FormControl,
  useToast,
  useColorMode
} from 'native-base';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleLogin = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      if (email.trim() === 'Admin' && password.trim() === 'Admin') {
        router.replace('/(tabs)');
      } else {
        toast.show({
          description: "Invalid credentials",
          placement: "top",
          backgroundColor: "error.500"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSendOTP = () => {
    if (!email.trim()) {
      toast.show({
        description: "Please enter email or mobile number",
        placement: "top",
        backgroundColor: "error.500"
      });
      return;
    }
    
    setOtpSent(true);
    toast.show({
      description: "OTP sent successfully",
      placement: "top",
      backgroundColor: "success.500"
    });
  };

  return (
    <Box flex={1} bg={isDark ? "gray.900" : "white"} justifyContent="center" alignItems="center" px={6}>
      <VStack space={8} w="full" maxW="400px">
        <Center>
          <Image 
            source={require('../../assets/images/Logo/happening-logo.png')}
            alt="Happening Logo"
            w="180px"
            h="70px"
            resizeMode="contain"
          />
          <Text mt={4} fontSize="sm" color={isDark ? "gray.400" : "gray.500"} textAlign="center">
            Login now to find what's happening around you
          </Text>
        </Center>

        <VStack space={4} w="full">
          <FormControl isRequired>
            <Input
              placeholder="Email address or mobile number"
              value={email}
              onChangeText={setEmail}
              size="lg"
              p={3}
              borderRadius="lg"
              borderWidth={1}
              borderColor={isDark ? "gray.700" : "gray.200"}
              bg={isDark ? "gray.800" : "gray.50"}
              color={isDark ? "white" : "gray.800"}
              placeholderTextColor={isDark ? "gray.400" : "gray.500"}
              _focus={{
                borderColor: "purple.500",
                bg: isDark ? "gray.800" : "white"
              }}
            />
          </FormControl>

          {otpSent ? (
            <FormControl isRequired>
              <Input
                placeholder="Enter OTP"
                type="password"
                size="lg"
                p={3}
                borderRadius="lg"
                borderWidth={1}
                borderColor={isDark ? "gray.700" : "gray.200"}
                bg={isDark ? "gray.800" : "gray.50"}
                color={isDark ? "white" : "gray.800"}
                placeholderTextColor={isDark ? "gray.400" : "gray.500"}
                _focus={{
                  borderColor: "purple.500",
                  bg: isDark ? "gray.800" : "white"
                }}
              />
            </FormControl>
          ) : (
            <FormControl isRequired>
              <Input
                placeholder="Enter Password"
                type="password"
                value={password}
                onChangeText={setPassword}
                size="lg"
                p={3}
                borderRadius="lg"
                borderWidth={1}
                borderColor={isDark ? "gray.700" : "gray.200"}
                bg={isDark ? "gray.800" : "gray.50"}
                color={isDark ? "white" : "gray.800"}
                placeholderTextColor={isDark ? "gray.400" : "gray.500"}
                _focus={{
                  borderColor: "purple.500",
                  bg: isDark ? "gray.800" : "white"
                }}
              />
            </FormControl>
          )}

          <Button
            bg="purple.600"
            _pressed={{ bg: "purple.700" }}
            py={3}
            isLoading={isLoading}
            onPress={handleLogin}
            rounded="lg"
          >
            <Text color="white" fontWeight="600">
              Login
            </Text>
          </Button>

          <Pressable onPress={handleSendOTP} alignSelf="flex-end">
            <Text color={isDark ? "purple.400" : "purple.600"} fontWeight="500">
              Send OTP
            </Text>
          </Pressable>
        </VStack>

        <HStack alignItems="center" space={2}>
          <Box flex={1} h="1px" bg={isDark ? "gray.700" : "gray.200"} />
          <Text color={isDark ? "gray.500" : "gray.400"}>or</Text>
          <Box flex={1} h="1px" bg={isDark ? "gray.700" : "gray.200"} />
        </HStack>

        <VStack space={4}>
          <Text textAlign="center" color={isDark ? "gray.400" : "gray.500"}>
            Sign in with other accounts
          </Text>
          <HStack space={6} justifyContent="center">
            <Pressable>
              <Image 
                source={require('../../assets/images/social/instagram.png')} 
                alt="Instagram"
                size="8"
                borderRadius="full"
              />
            </Pressable>
            <Pressable>
              <Image 
                source={require('../../assets/images/social/facebook.png')} 
                alt="Facebook"
                size="8"
                borderRadius="full"
              />
            </Pressable>
            <Pressable>
              <Image 
                source={require('../../assets/images/social/twitter.png')} 
                alt="Twitter"
                size="8"
                borderRadius="full"
              />
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}