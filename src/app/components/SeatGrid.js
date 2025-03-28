'use client';
import { useSelector } from 'react-redux';

import Seat from './Seat';

export default function SeatGrid() {
  const {selectedSeats,bookings}=useSelector(state=>state.booking)
  console.log('111111111111111',selectedSeats,bookings)
  const ROWS = 6;
  const COLS = 10;

  const generateSeatId = (row, col) => {
    return `${String.fromCharCode(65 + row)}${col + 1}`;
  };

  const getSeatTier = (row) => {
    if (row < 2) return 'Silver';
    if (row < 4) return 'Gold';
    return 'Platinum';
  };

  return (
    <div className="overflow-hidden pb-4 mb-6 sm:mb-8">
      <div className="w-full max-w-full px-2 sm:px-0">
        <div className="grid gap-2 sm:gap-4">
          {Array.from({ length: ROWS }).map((_, row) => (
            <div key={row} className="flex flex-wrap justify-center gap-1 sm:gap-4">
              {Array.from({ length: COLS }).map((_, col) => {
                const seatId = generateSeatId(row, col);
                const tier = getSeatTier(row);

                return (
                  <Seat
                    key={col}
                    seatId={seatId}
                    tier={tier}
                    selected={selectedSeats.some(item=>item.seatId===seatId)}
                    bookedStatus={bookings.some(item=>item.seatId===seatId)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
