'use client';

import Legend from './components/Legend';
import Screen from './components/Screen';
import SeatGrid from './components/SeatGrid';
import BookingSummary from './components/BookingSummary';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-6 sm:py-12 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Movie Seat Booking
        </h1>
        
        <Legend />
        <Screen />
        <SeatGrid />
        <BookingSummary />
      </div>
    </div>
  );
}