import React from 'react';

interface TicketItemProps {
  title: string;
  price?: string;
  date?: string;
  description?: string;
}

function TicketItem({ title, price, date, description }: TicketItemProps) {
  return (
    <div className=" shadow-md p-4 mb-4 bg-gradient-background-image  rounded-lg overflow-hidden">
      <h4 className="text-lg font-omnes font-semibold mb-2">{title}</h4>
      <p className="text-gray-700 mb-2">
        {description ? description : `${price}, ${date}`}
      </p>
    </div>
  );
}

export default TicketItem;
