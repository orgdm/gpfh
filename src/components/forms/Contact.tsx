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
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  subject: z
    .string()
    .min(3, { message: 'This field has to be filled.' })
    .max(80, { message: 'Subject too long, move to details' }),
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
  zipCode: z
    .number()
    .min(5, { message: 'Must be at least 5 digits.' })
    .max(9, { message: 'Must be less than 9 digits.' }),
  organization: z.string().max(300, { message: 'Please abbreviate' }),
  details: z
    .string()
    .min(3, { message: 'This field has to be filled.' })
    .max(500, { message: 'Message too long' }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      firstName: '',
      lastName: '',
      email: '',
      zipCode: undefined,
      organization: '',
      details: '',
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
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='subject*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name='zipCode'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='zip code*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='organization'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='organization / company'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='details'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='message*'
                  className='resize-none border-stone-700 min-h-28'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' size={'sub'} type='submit'>
          send
        </Button>
      </form>
    </Form>
  );
};

export default Contact;
