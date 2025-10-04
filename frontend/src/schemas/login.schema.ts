import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ message: 'Email is not valid' }),
  password: z.string().min(6, { message: 'Password minimal 6 characters' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
