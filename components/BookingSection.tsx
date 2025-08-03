import React, { useState } from 'react';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    return Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));
  };

  const totalCost = calculateNights() * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-28">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={e => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2"
        />
      </div>

      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={e => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2"
        />
      </div>

      <div className="mt-4">
        <p>
          Total payment: <strong>${isNaN(totalCost) ? 0 : totalCost}</strong>
        </p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
