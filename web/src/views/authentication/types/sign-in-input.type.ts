import type z from 'zod';
import { SignInSchema } from '../schemas/sign-in.schema';

export type SignInInput = z.infer<typeof SignInSchema>;
