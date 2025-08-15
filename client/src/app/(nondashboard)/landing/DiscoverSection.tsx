'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className='py-12 mb-16  bg-white'
    >
      <div className='max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16'>
        <motion.div variants={itemVariants} className='my-12 text-center'>
          <h2 className='text-3xl font-semibold leading-tight text-gray-800'>
            Discover
          </h2>
          <p className='mt-4 text-lg text-gray-400'>
            Find your dream rental property today!
          </p>
          <p className='mt-2 text-lg text-gray-500 max-w-3xl mx-auto'>
            Our platform connects you with a wide range of rental properties,
            making it easy to compare, filter, and choose the perfect home for
            your needs. Enjoy a seamless experience with verified listings,
            advanced search tools, and helpful insights to guide your rental
            journey.
          </p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
          {[
            {
              imageSrc: '/landing-icon-wand.png',
              title: 'Search for properties',
              description:
                'Browse through our extensive collection of properties.',
            },

            {
              imageSrc: '/landing-icon-calendar.png',
              title: 'Book your rental',
              description:
                'Book your suitable property with just a few clicks.',
            },

            {
              imageSrc: '/landing-icon-heart.png',
              title: 'Enjoy your new home',
              description: 'Move into your new home and start enjoying it.',
            },
          ].map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoverSection;

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className='px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72 text-center'>
    <div className='bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto'>
      <Image
        src={imageSrc}
        width={30}
        height={30}
        className='w-full h-full'
        alt={title}
      />
    </div>
    <h3 className='mt-4 text-xl font-medium text-gray-800'>{title}</h3>
    <p className='mt-2 text-base text-gray-500'>{description}</p>
  </div>
);
