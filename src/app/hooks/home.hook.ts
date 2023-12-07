'use client';

import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Values, apisPorts } from '@/data/ports';

import { healthResponseSchema } from '../schemas/health-response.schema';

async function fetchHealth(port: Values) {
  try {
    const response = await fetch(
      `http://82.180.136.148:${port}/api/health`
    ).then((res) => Promise.resolve(res.json()));

    const parsedResponse = healthResponseSchema.parse(response);

    return parsedResponse;
  } catch (error) {
    throw error;
  }
}

export function useHome() {
  const [currentPort, setCurrentPort] = useState<Values>(apisPorts[0].value);

  const handleChangePort = useCallback(
    (port: Values) => {
      setCurrentPort(port);
    },
    [setCurrentPort]
  );

  const { data, isLoading } = useQuery({
    queryKey: ['get-apis-health', currentPort],
    queryFn: () => fetchHealth(currentPort),
  });

  const isSucessfull = useMemo(() => data?.status === 'ok', [data]);

  return {
    currentPort,
    handleChangePort,
    data,
    isLoading,
    isSucessfull,
  };
}
