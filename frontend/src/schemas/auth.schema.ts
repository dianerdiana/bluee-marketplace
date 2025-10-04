import { z } from 'zod';

export const signInSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export const signUpSchema = z
  .object({
    fullName: z.string().min(1, { message: 'Full Name is required' }),
    email: z.email({ message: 'Invalid email address' }),
    phoneNumber: z.string().min(9, { message: 'Phone Number must be at least 9 characters' }),
    password: z.string({ error: 'Password is required' }).min(6, { message: 'Password must be at least 6 characters' }),
    confirmPassword: z
      .string({ error: 'Confirm Password is required' })
      .min(6, { message: 'Password must be at least 6 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // error will be shown under confirmPassword field
  });

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
