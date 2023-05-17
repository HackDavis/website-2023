import Truck from '@/components/doe/truck';
import MainSection from '@/components/doe/mainSection';
import Navbar from '@/components/navbar/navbar';
import Seo from '@/components/seo';
import NonProfits from '@/components/sponsors/nonprofits';
import Sponsors from '@/components/sponsors/sponsors';
import React, { useEffect } from 'react';

const Live = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--color-cow)';

    window.addEventListener('scroll', () => {
      const documentHeight = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      // When the user is [modifier]px from the bottom, fire the event.
      const modifier = 200;

      document.body.style.backgroundColor =
        currentScroll + modifier > documentHeight
          ? 'var(--color-cow)'
          : 'var(--color-teal-5)';
    });
  }, []);

  return (
    <>
      <Seo />
      <Navbar />
      <main>
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-teal-5)',
            zIndex: 1,
            contain: 'paint',
          }}
        >
          <MainSection />
          <Truck />
        </div>
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-teal-4)',
            zIndex: 1,
          }}
        >
          <Sponsors />
          <NonProfits />
        </div>
      </main>
    </>
  );
};

export default Live;
