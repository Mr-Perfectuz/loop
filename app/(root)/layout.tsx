import React, { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      <section>Footer</section>
    </main>
  );
};

export default RootLayout;
