'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { Clock, AlertCircle, Calendar } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export default function OpeningHours() {
  // Fonction pour déterminer si c'est une semaine paire ou impaire
  const getWeekNumber = (date: Date = new Date()) => {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = date.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    const weekNumber = Math.ceil(diff / oneWeek);
    return weekNumber;
  };

  const currentWeekNumber = getWeekNumber();
  const isEvenWeek = currentWeekNumber % 2 === 0;

  // Générer les 4 prochaines semaines
  const getNextWeeks = () => {
    const weeks = [];
    const today = new Date();
    
    for (let i = 0; i < 4; i++) {
      const weekDate = new Date(today);
      weekDate.setDate(today.getDate() + (i * 7));
      
      const weekNum = getWeekNumber(weekDate);
      const isEven = weekNum % 2 === 0;
      
      // Début et fin de la semaine
      const startOfWeek = new Date(weekDate);
      const dayOfWeek = startOfWeek.getDay();
      const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Lundi = début
      startOfWeek.setDate(startOfWeek.getDate() + diff);
      
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 4); // Vendredi
      
      weeks.push({
        weekNumber: weekNum,
        isEven,
        startDate: startOfWeek,
        endDate: endOfWeek,
        isCurrent: i === 0
      });
    }
    
    return weeks;
  };

  const nextWeeks = getNextWeeks();

  const schedule = [
    {
      day: 'Lundi',
      hours: contactInfo.openingHours.monday.morning + ' / ' + contactInfo.openingHours.monday.afternoon,
      isOpen: true
    },
    {
      day: 'Mardi',
      hours: contactInfo.openingHours.tuesday.morning + ' / ' + contactInfo.openingHours.tuesday.afternoon,
      isOpen: true
    },
    {
      day: 'Mercredi',
      hours: contactInfo.openingHours.wednesday.morning + ' / ' + contactInfo.openingHours.wednesday.afternoon,
      isOpen: !isEvenWeek,
      note: contactInfo.openingHours.wednesday.note
    },
    {
      day: 'Jeudi',
      hours: contactInfo.openingHours.thursday.morning + ' / ' + contactInfo.openingHours.thursday.afternoon,
      isOpen: true
    },
    {
      day: 'Vendredi',
      hours: contactInfo.openingHours.friday.morning + ' / ' + contactInfo.openingHours.friday.afternoon,
      isOpen: isEvenWeek,
      note: contactInfo.openingHours.friday.note
    }
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  };

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Clock className="text-primary-600" size={32} />
        <h2 className="text-2xl font-bold text-gray-700">Horaires d&apos;ouverture</h2>
      </div>

      {/* Info semaine actuelle */}
      <div className="mb-6 p-4 bg-primary-50 rounded-lg flex items-start gap-3">
        <div className="text-sm">
          <p className="font-semibold text-primary-900 mb-1">
            Nous sommes en semaine {isEvenWeek ? 'paire' : 'impaire'}
          </p>
          <p className="text-primary-700">
            {isEvenWeek 
              ? 'Le cabinet est fermé le mercredi et ouvert le vendredi' 
              : 'Le cabinet est ouvert le mercredi et fermé le vendredi'}
          </p>
        </div>
      </div>

      {/* Horaires */}
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div 
            key={index}
            className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-0 ${
              !item.isOpen ? 'opacity-50' : ''
            }`}
          >
            <span className="font-medium text-gray-700">{item.day}</span>
            <div className="text-right">
              <span className={item.isOpen ? 'text-gray-600' : 'text-gray-500'}>
                {item.hours}
              </span>
              {item.note && (
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Note importante */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Important :</strong> Les horaires alternent selon les semaines. 
          Le mercredi est fermé les semaines paires et le vendredi est fermé les semaines impaires.
        </p>
        <br />
        <p className="text-sm text-gray-600">
          <strong>Urgences dentaires :</strong> Créneaux disponibles dans les 24h pour les patients du cabinet
        </p>
        
      </div>


      

      {/* Mini calendrier 4 prochaines semaines */}
      <div className="mt-12 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="text-gray-600" size={20} />
          <h3 className="font-semibold text-gray-700">Les 4 prochaines semaines</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {nextWeeks.map((week, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg border-2 ${
                week.isCurrent 
                  ? 'border-primary-600 bg-primary-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-semibold ${
                  week.isCurrent ? 'text-primary-600' : 'text-gray-600'
                }`}>
                  Semaine {week.weekNumber}
                </span>
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  week.isEven 
                    ? 'bg-black text-teal-500' 
                    : 'bg-black text-teal-200'
                }`}>
                  {week.isEven ? 'Paire' : 'Impaire'}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                {formatDate(week.startDate)} - {formatDate(week.endDate)}
              </p>
              <div className="mt-2 text-xs">
                <p className="text-teal-600 font-medium mb-1">Jours ouverts :</p>
                <p className="text-gray-700">
                  {week.isEven 
                    ? 'Lun / Mar / Jeu / Ven' 
                    : 'Lun / Mar / Mer / Jeu'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}