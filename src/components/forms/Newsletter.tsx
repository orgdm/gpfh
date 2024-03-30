'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
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
  // .refine(async (e) => {
  //   // Where checkIfEmailIsValid makes a request to the backend
  //   // to see if the email is valid.
  //   return await checkIfEmailIsValid(e);
  // }, "This email is not in our database")
});

const Newsletter = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // send to AWS SES
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='first name*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='last name*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='email*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full' size={'sub'} type='submit'>
          sign up
        </Button>
      </form>
    </Form>
  );
};

export default Newsletter;
