import React from 'react';

// Components
import Header from '../../components/Header';

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultTemplate;
