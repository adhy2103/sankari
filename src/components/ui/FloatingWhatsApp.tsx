'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsapp = process.env.NEXT_PUBLIC_ACADEMY_WHATSAPP;

  if (!whatsapp || !/^\d{10,15}$/.test(whatsapp)) return null;

  const href = `https://wa.me/${whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20programmes%20at%20Sankara%20Kayika%20Kalamandalam.`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      <MessageCircle size={24} className="text-white" />
    </a>
  );
}

export default FloatingWhatsApp;
