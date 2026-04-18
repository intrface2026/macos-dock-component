import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-3xl mx-auto px-4 md:px-0 ${className}`}>
      {children}
    </div>
  );
};