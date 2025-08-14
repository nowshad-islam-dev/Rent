'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className='relative h-screen'>
      <Image
        src='/landing-splash.jpg'
        alt='Hero Image'
        fill
        className='object-cover object-center'
      />
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='absolute top-1/3 w-full transform -translate-x-1/2 -translate-y-1/2 text-center'
      >
        <div className='max-w-4xl mx-auto px-16 sm:px-12'>
          <h1 className='text-5xl font-bold text-white mb-4'>
            Start Your Journey To Finding The Perfect Place To Call Home
          </h1>
          <p className='text-xl text-white mb-8'>
            Explore wide range of rental properties around you and pick your
            choice!
          </p>
          <div className='flex justify-center'>
            <Input
              type='text'
              value='Search Query'
              onChange={() => {}}
              placeholder='Search by City, Neighbourhood OR Address'
              className='w-full max-w-xl rounded-none rounded-l-lg border-none bg-white h-12'
            />
            <Button
              onClick={() => {}}
              className='bg-secondary-500 hover:bg-secondary-600 text-white rounded-none rounded-r-xl border-none h-12'
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
