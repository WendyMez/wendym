import React from 'react';
import Card from '@/components/ui/Card';
import { Check } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover>
      <h3 className="text-xl font-bold text-gray-700 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      
      {service.details && service.details.length > 0 && (
        <ul className="space-y-2">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <Check size={16} className="text-primary-600 mt-1 shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}