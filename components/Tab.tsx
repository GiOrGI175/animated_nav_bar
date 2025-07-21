'use client';

import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';

interface TabPropsT {
  children: ReactNode;
  setPosition: Dispatch<
    SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
}

export default function Tab({ children, setPosition }: TabPropsT) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        // const data = ref.current.getBoundingClientRect();

        const { width } = ref.current.getBoundingClientRect();

        console.log(width);

        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });

        console.log(ref.current.offsetLeft, 'ref.current.offsetLeft ');
      }}
      className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base'
    >
      {children}
    </li>
  );
}
