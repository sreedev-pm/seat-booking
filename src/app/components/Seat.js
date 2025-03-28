'use client';
import { useDispatch } from "react-redux";
import { selectSeats,cancelBooking } from "../store/slices/bookingSlice";

export default function Seat({ seatId, tier,selected,bookedStatus }) {
  const dispatch=useDispatch()
  const getBgColor = () => {
    if(selected){
      return 'bg-green-400'
    }
    if(bookedStatus)
      return 'bg-gray-600'
    switch (tier) {
      case 'Silver': return 'bg-blue-200';
      case 'Gold': return 'bg-yellow-200';
      case 'Platinum': return 'bg-purple-200';
      default: return 'bg-gray-200';
    }
  };
  const toggleSelection=()=>{
    dispatch(selectSeats({seatId,tier,type:selected?'remove':'add'}))
  }
  const handleCancel=()=>{
    dispatch(cancelBooking({seatId}))
  }
  return (
    <button
      className={`w-8 h-8 sm:w-10 sm:h-10 ${getBgColor()} rounded-t-lg text-gray-800 text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity transform hover:scale-105 active:scale-95`}
      onClick={()=>{
        if(bookedStatus){
          handleCancel()
        }else{
          toggleSelection()
        }
      }
      }
    >
      {seatId}
    </button>
  );
}