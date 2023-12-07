'use client';

import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function TanstackProvider(props: WithChildren) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
