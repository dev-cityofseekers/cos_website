import React from "react";
import TicketItem from "../TicketItem";

function TicketsSection() {
  return (
    <div className="py-10 ">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-omnes font-bold text-center mb-8">Get Your Tickets</h2>

        {/* Single Day Tickets */}
        <div className="mb-8 flex flex-wrap sm:space-x-6 lg:space-x-6 justify-center">
          <h3 className="text-xl font-omnes font-semibold mb-4 w-full">Single Day Tickets</h3>
          <TicketItem title="Single Day: Thursday | Sunday" price="25€" date="06.or 09.06.2024" />
          <TicketItem title="Single Day: Friday | Saturday" price="40€" date="07.or 08.06.2024" />
        </div>

        {/* Two Day Tickets */}
        <div className="mb-8 flex flex-wrap sm:space-x-6 lg:space-x-6 justify-center">
          <h3 className="text-xl font-omnes font-semibold mb-4 w-full">Two Day Ticket</h3>
          <TicketItem title="Two Day Adventure" price="70€" date="You can choose when you arrive" />
        </div>

        {/* Full Tickets */}
        <div className="mb-8 flex flex-wrap sm:space-x-6 lg:space-x-6 justify-center">
          <h3 className="text-xl font-omnes font-semibold mb-4 w-full">Full Tickets</h3>
          <TicketItem title="4 days | Become a Friend Ticket" price="120€" date="06.-09.06.2024" />
          <TicketItem
            title="3 Days | Become a Friend Ticket"
            price="110€"
            date="You can choose when you arrive"
          />
        </div>

        {/* Special Tickets */}
        <div className="mb-8 flex flex-wrap justify-between">
          <h3 className="text-xl font-omnes font-semibold mb-4 w-full">Special Tickets</h3>
          <TicketItem
            title="Find a Friend Ticket"
            description="We'd like to ensure everybody can join, regardless of your financial situation. If you can't afford the full price, get in touch with our team and we will figure something out!"
          />
          <TicketItem
            title="Support a Friend Ticket"
            price=">150€"
            description="If you wanna go above and beyond the normal price, choose this ticket to support people with limited financial resources to attend as well as help the team to improve the festival!"
          />
        </div>

        {/* Buy Tickets Button */}
        <div className="text-center">
          <a href="/tickets" className="flex justify-center items-center pt-3">
            <div className="font-omnes bg-gradient-background-image-vertical-short text-cos-off-black text-xl font-bold py-5 px-10 rounded-full hover:bg-primary-dark hover:scale-105 transition duration-300 ease-in-out shadow-white">
              Buy Tickets
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TicketsSection;
