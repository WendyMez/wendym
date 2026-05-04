'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import { Check, ChevronDown } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile : accordéon */}
      <div className="md:hidden bg-white rounded-lg shadow-sm overflow-hidden mx-4">
        <button
          className="w-full flex items-center justify-between px-4 py-3 text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold text-gray-700">{service.title}</span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-600' : ''}`}
          />
        </button>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 space-y-3">
            <p className="text-sm text-gray-600">{service.description}</p>
            {service.details && service.details.length > 0 && (
              <ul className="space-y-1.5">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-primary-600 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Desktop : card complète */}
      <Card hover className="hidden md:block">
        <h3 className="text-xl font-bold text-gray-700 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
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
    </>
  );
}
