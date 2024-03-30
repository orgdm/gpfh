'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .max(50),
  lastName: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .max(80),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('Please enter a valid email.'),
  subject: z.string(),
  details: z.string(),
  // .refine(async (e) => {
  //   // Where checkIfEmailIsValid makes a request to the backend
  //   // to see if the email is valid.
  //   return await checkIfEmailIsValid(e);
  // }, "This email is not in our database")
});

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
