import { z } from 'zod';

const MemoryStatus = z.object({
  status: z.string(),
});

const Info = z.object({
  memory_heap: MemoryStatus,
  memory_rss: MemoryStatus,
});

const Details = Info;

export const healthResponseSchema = z.object({
  status: z.string(),
  info: Info,
  error: z.object({}),
  details: Details,
});
