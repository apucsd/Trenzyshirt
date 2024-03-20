"use client";
import Countdown from "react-countdown";
const FlashSaleCountdown = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Countdown
        date={Date.now() + 60000000}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <span className="text-4xl text-gray-500">Sale has ended!</span>
            );
          } else {
            return (
              <div className="flex">
                <div className="flex  bg-white px-5 py-1 rounded flex-col items-center mx-2">
                  <span className="text-4xl font-semibold text-primary">
                    {days}
                  </span>
                  <span className="text-xs text-gray-600">Days</span>
                </div>
                <span className="text-4xl mx-2">:</span>
                <div className="flex bg-white px-5 py-1 rounded flex-col items-center mx-2">
                  <span className="text-4xl font-semibold text-primary">
                    {hours}
                  </span>
                  <span className="text-xs text-gray-600">Hours</span>
                </div>
                <span className="text-4xl mx-2">:</span>
                <div className="flex bg-white px-5 py-1 rounded flex-col items-center mx-2">
                  <span className="text-4xl font-semibold text-primary">
                    {minutes}
                  </span>
                  <span className="text-xs text-gray-600">Minutes</span>
                </div>
                <span className="text-4xl mx-2">:</span>
                <div className="flex bg-white px-5 py-1 rounded flex-col items-center mx-2">
                  <span className="text-4xl font-semibold text-primary">
                    {seconds}
                  </span>
                  <span className="text-xs text-gray-600">Seconds</span>
                </div>
              </div>
            );
          }
        }}
      />
    </div>
  );
};

export default FlashSaleCountdown;
