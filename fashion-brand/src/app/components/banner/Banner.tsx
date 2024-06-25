'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './banner.css';

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className='min-h-screen banner' data-aos="fade-zoom-in">
    </div>
  )
}

export default Banner