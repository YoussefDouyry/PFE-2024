import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-14">
      {children}
    </div>
  );
};

export default Container;
