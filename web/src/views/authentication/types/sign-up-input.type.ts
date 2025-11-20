import type z from 'zod';
import type { SignUpSchema } from '../schemas/sign-up-schema';

export type SignUpInput = z.infer<typeof SignUpSchema>;
