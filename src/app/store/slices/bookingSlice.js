import { createSlice } from '@reduxjs/toolkit';
import triggerNotification from '@/app/utils/toast';

const initialState = {
  bookings:[],
  selectedSeats:[],
  totalPrice:0,
  pricing:{
    Silver:100,
    Gold:150,
    Platinum:200
  }
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    selectSeats: (state,action) => {
      const {type,...seatDetails}=action.payload
      console.log('2222222222222222222',type,seatDetails)
      if(type==='add'){
        if(state.bookings.length+state.selectedSeats.length>=8)
        {
          triggerNotification.warning(`One person can book only 8 seats`)
          return 
        }
        
        state.selectedSeats.push(seatDetails)
        state.totalPrice+=state.pricing[`${seatDetails.tier}`]
      }
      else if(type==='remove')
      {


        state.selectedSeats=state.selectedSeats.filter(item=>item.seatId!==seatDetails.seatId)
        state.totalPrice=state.totalPrice-state.pricing[`${seatDetails.tier}`]
      }
    },
    cancelBooking: (state,action) => {
      console.log('33333333333333333',action)
      state.bookings=state.bookings.filter(item=>item.seatId!==action.payload.seatId)
      triggerNotification.success(`You have canceled seat ${action.payload.seatId}`)
    
    },
    bookSeats: (state) => {
      state.bookings.push(...state.selectedSeats)
      triggerNotification.success(`You have booked ${state.selectedSeats.length} seats`)
      state.selectedSeats=[]
      state.totalPrice=0
    },
  },
});

export const { selectSeats,removeSeats,bookSeats,cancelBooking} = bookingSlice.actions;
export default bookingSlice.reducer;
