// components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';
import { Text, Box } from 'native-base';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error Boundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box flex={1} justifyContent="center" alignItems="center" p={4}>
          <Text fontSize="xl" mb={2}>Something went wrong</Text>
          <Text color="red.500">{this.state.error?.toString()}</Text>
        </Box>
      );
    }
    return this.props.children;
  }
}