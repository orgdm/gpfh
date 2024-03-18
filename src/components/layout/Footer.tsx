// import Link from "next/link";

const Footer = () => {
  return (
    <footer id='footer' className='bg-stone-700'>
      <div className='min-h-48 px-4'>
        <div className='flex flex-col w-full'>
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>info 1</li>
              <li>info 2</li>
              <li>info 3</li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
