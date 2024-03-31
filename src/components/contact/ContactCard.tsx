import Contact from '../forms/Contact';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../ui/card';

const ContactCard = () => {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle className='text-2xl text-center my-[0.4em]'>
          business enquiry
        </CardTitle>
        <CardDescription className='text-center font-light'>
          send us a message describing your project idea and we will get back to
          you as soon as we can.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <Contact />
      </CardContent>
      <CardFooter>{/* PRIVACY POLICY */}</CardFooter>
    </Card>
  );
};

export default ContactCard;
