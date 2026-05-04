import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

export default function ServicesList() {
  return (
    <div className="grid md:grid-cols-2 gap-2 md:gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}