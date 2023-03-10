import React from 'react';

const WindowOne = () => (
  <div
    style={{
      padding: '90px 30px 24px 40px',
      border: '1.6px solid var(--color-grey-1)',
      borderLeft: 'none',
      borderRadius: '0 10px 10px 0',
      marginBottom: 20,
    }}
  >
    <p
      style={{
        fontSize: 20,
        fontFamily: 'var(--dm-sans)',
        lineHeight: 1.25,
        letterSpacing: '0.02rem',
        fontWeight: 700,
        color: 'var(--color-teal-3)',
      }}
    >
      HackDavis <span style={{ color: 'var(--color-teal-2)' }}>is the</span>{' '}
      largest collegiate hackathon{' '}
      <span style={{ color: 'var(--color-teal-2)' }}>
        in California where over 700 students, creators, and leaders come
        together for 36 hours to
      </span>{' '}
      create for social good.
    </p>
  </div>
);

export default WindowOne;
