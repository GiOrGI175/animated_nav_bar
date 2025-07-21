'use client';

import { motion } from 'framer-motion';

type CursorPropsT = {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
};

export default function Cursor({ position }: CursorPropsT) {
  return (
    <motion.li
      animate={position}
      className='absolute z-0 h-7 w-36 rounded-full bg-black md:h-12'
    />
  );
}
