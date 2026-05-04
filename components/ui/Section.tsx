import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'blue' | 'transparent' | 'custom';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'white',
  id
}: SectionProps) {
  const bgClasses = background === 'blue' ? 'bg-primary-800' : background === 'transparent' ? '' : 'bg-white';
  
  return (
    <section id={id} className={`section-padding ${bgClasses} ${className}`}>
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}