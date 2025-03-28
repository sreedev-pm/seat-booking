'use client';
import { useSelector,useDispatch } from "react-redux";
import { bookSeats } from "../store/slices/bookingSlice";
export default function BookingSummary() {
  const dispatch=useDispatch()
  const {selectedSeats,pricing,totalPrice}=useSelector(state=>state.booking)

  const bookTicket=()=>{
    dispatch(bookSeats())
  }
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 max-w-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Booking Summary</h2>
      {
        selectedSeats.length?
        <>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedSeats.map((seat) => (
            <span 
              key={seat.seatId} 
              className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full"
            >
              {seat.seatId}
            </span>
          ))}
        </div>
          <ul className="text-gray-300 text-sm sm:text-base space-y-2">
            {selectedSeats.map((seat) => (
              <li key={seat.seatId} className="flex justify-between">
                <span>Seat {seat.seatId}</span>
                <span>${pricing[`${seat.tier}`]}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-600 mt-4 pt-2 flex justify-between text-white">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${totalPrice}</span>
          </div>
        </>
        :

      <p className="text-gray-400 text-sm sm:text-base">No seats selected</p>
      }

      <button
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-medium transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
        onClick={bookTicket}
        disabled={!selectedSeats.length}
      >
        Book Now
      </button>
    </div>
  );
}