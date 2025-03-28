'use client';

export default function Legend() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-sm sm:text-base">
      <div className="flex items-center gap-2">
        <div className="w-4 sm:w-6 h-4 sm:h-6 bg-blue-200 rounded"></div>
        <span>Silver (₹100)</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 sm:w-6 h-4 sm:h-6 bg-yellow-200 rounded"></div>
        <span>Gold (₹150)</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 sm:w-6 h-4 sm:h-6 bg-purple-200 rounded"></div>
        <span>Platinum (₹200)</span>
      </div>
    </div>
  );
}