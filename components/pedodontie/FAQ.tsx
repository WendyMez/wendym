'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2 md:space-y-4 mx-4 md:mx-0">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm md:shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-4 py-3 md:px-6 md:py-4 text-left flex items-center justify-between gap-3"
          >
            <span className="font-semibold text-gray-700 text-sm md:text-base">
              {item.question}
            </span>
            <ChevronDown
              className={`shrink-0 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? 'rotate-180 text-primary-600'
                  : 'rotate-0 text-gray-400'
              }`}
              size={18}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 pb-3 md:px-6 md:pb-4 text-sm text-gray-600">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}