import { z } from 'zod';

import { healthResponseSchema } from '../schemas/health-response.schema';

export type HealthResponseType = z.infer<typeof healthResponseSchema>;
