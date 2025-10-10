import { z } from 'zod';

export const testimonySchema = z.object({
  rating: z.number().min(1).max(5),
  testimony: z.string().min(1, { error: 'Testimony field is required' }),
});

export type TestimonySchema = z.infer<typeof testimonySchema>;
