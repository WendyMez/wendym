import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 text-gray-300">
      <div className="container-custom py-12">
        {/* Informations en ligne */}
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-center gap-y-6 sm:gap-x-12 text-sm text-center sm:text-left">
          {/* Téléphone */}
          <a 
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={18} />
            <span>{contactInfo.phone}</span>
          </a>

          {/* Adresse */}
          <div className="flex items-start gap-2">
            <MapPin size={18} className="mt-1 shrink-0" />
            <div>
              <p>{contactInfo.address.street}</p>
              <p>{contactInfo.address.postalCode} {contactInfo.address.city}</p>
            </div>
          </div>

          {/* Google Maps */}
          <a 
            href={contactInfo.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-teal-600 transition-colors"
          >
            <span>Voir sur Google Maps</span>
            <ExternalLink size={14} />
          </a>

          {/* Horaires */}
          <div className="flex items-start gap-2">
            <Clock size={18} className="mt-1 shrink-0" />
            <div className="text-sm space-y-0.5">
              <p>Lundi : 10h30-13h / 14h-18h30</p>
              <p>Mar-Jeu : 9h-13h / 14h-19h</p>
              <p className="text-xs text-gray-400">
                (Mer/ven selon semaine)
              </p>
            </div>
          </div>
        </div>

        {/* Copyright et mentions légales */}
        <div className="mt-12 text-center text-sm space-y-2">
          <p>&copy; {currentYear} {contactInfo.name}. Tous droits réservés.</p>
          <Link 
            href="/mentions-legales" 
            className="inline-block hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}