import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className='border-t border-gray-200 py-20'>
      <div className='max-w-4xl mx-auto px-6 sm:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className='mb-4'>
            <Link className='text-xl font-bold' scroll={false} href='/'>
              RENTIFY
            </Link>
          </div>
          <nav className='mb-4'>
            <ul className='flex space-x-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='#'>About Us</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
              <li>
                <Link href='#'>FAQ</Link>
              </li>
              <li>
                <Link href='#'>Terms & Conditions</Link>
              </li>
            </ul>
          </nav>
          <div className='flex space-x-4 mb-4'>
            <a
              href='#'
              aria-label='Facebook'
              className='hover:text-primary-600'
            >
              <FaFacebook className='h-6 w-6' />
            </a>
            <a
              href='#'
              aria-label='Instagram'
              className='hover:text-primary-600'
            >
              <FaInstagram className='h-6 w-6' />
            </a>
            <a href='#' aria-label='Youtube' className='hover:text-primary-600'>
              <FaYoutube className='h-6 w-6' />
            </a>
            <a
              href='#'
              aria-label='Facebook'
              className='hover:text-primary-600'
            >
              <FaTwitter className='h-6 w-6' />
            </a>
            <a
              href='#'
              aria-label='LinkedIn'
              className='hover:text-primary-600'
            >
              <FaLinkedin className='h-6 w-6' />
            </a>
          </div>
        </div>
        <div className='mt-8 text-center text-sm text-gray-500 flex justify-center  space-x-4'>
          <span>Rentify@{new Date().getFullYear()} All rights reserved.</span>
          <Link href='#'>Privacy policy</Link>
          <Link href='#'>Terms of service</Link>
          <Link href='#'>Cookie policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
