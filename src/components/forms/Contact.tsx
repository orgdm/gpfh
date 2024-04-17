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

const numRegex = new RegExp(/[0-9]{3}-?[0-9]{3}-?[0-9]{4}/);

const formSchema = z.object({
  subject: z
    .string()
    .min(3, { message: 'This field has to be filled.' })
    .max(80, { message: 'Subject too long, move to details' }),
  name: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .max(150, { message: 'Too many characters' }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('Please enter a valid email.'),
  phone: z
    .string()
    .regex(numRegex, 'Invalid Phone Number')
    .min(10, { message: 'Please enter a valid US phone number' })
    .max(13, { message: 'Please enter a valid US phone number' }),
  organization: z.string().max(300, { message: 'Please abbreviate' }),
  address: z
    .string()
    .regex(
      /^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z.]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$/,
      'Invalid address'
    ),
  city: z
    .string()
    .min(1, { message: 'Please enter your city' })
    .max(120, { message: 'Please enter your city' }),
  state: z
    .string()
    .regex(
      /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/gim
    ),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid zip code'),
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
      name: '',
      phone: '',
      email: '',
      organization: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='name*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='phone number*'
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
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='address*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='border-b border-stone-700'
                  placeholder='city*'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-row justify-between  '>
          <FormField
            control={form.control}
            name='state'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='border-b border-stone-700 max-xs:max-w-32 w-[120%] '
                    placeholder='state*'
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
                    className='border-b border-stone-700 max-w-20'
                    placeholder='zip code*'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
