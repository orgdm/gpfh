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
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
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

const NewsletterHome = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // send to AWS SES
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormDescription className='py-1'>
                Subscribe with your email to keep up with our latest updates
              </FormDescription>
              <div className='pb-2 pt-1'>
                <FormLabel>Email sign-up</FormLabel>
              </div>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='Email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' size={'sub'} type='submit'>
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterHome;
