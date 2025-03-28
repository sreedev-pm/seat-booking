'use client';

import { Monitor } from 'lucide-react';

export default function Screen() {
  return (
    <div className="relative mb-8 sm:mb-12">
      <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
        <Monitor size={20} />
        <span className="text-sm">Screen</span>
      </div>
      <div className="h-2 sm:h-4 bg-gray-300 rounded-t-lg transform perspective-1000 rotateX-60"></div>
    </div>
  );
}