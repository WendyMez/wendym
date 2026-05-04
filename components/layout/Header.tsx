'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import MobileMenu from './MobileMenu';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Soins', href: '/soins' },
  { name: 'Pédodontie', href: '/pedodontie' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-teal-950/60 backdrop-blur shadow-sm sticky top-0 z-50">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Nom du cabinet - À GAUCHE */}
            <div className="shrink-0">
              <Link href="/" className="text-xl font-bold text-white">
                Dr MEZGUELDI
              </Link>
            </div>

            {/* Navigation + Bouton téléphone - À DROITE */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <div className="flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-primary-600 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <a
                href="tel:0478401488"
                className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Phone size={18} />
                <span className="font-medium">04 78 40 14 88</span>
              </a>
            </div>

            {/* Bouton menu burger mobile */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu mobile — en dehors du header pour que backdrop-blur fonctionne */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}