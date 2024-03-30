import Newsletter from '../forms/Newsletter';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '../ui/card';

const NewsletterCard = () => {
  return (
    <>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl text-center my-[0.4em]'>
            newsletter sign up
          </CardTitle>
          <CardDescription className='text-center font-light'>
            sign up with your email to keep up with the latest updates from
            Grove Park Fine Homes
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <Newsletter />
        </CardContent>
        <CardFooter>{/* PRIVACY POLICY */}</CardFooter>
      </Card>
    </>
  );
};

export default NewsletterCard;
