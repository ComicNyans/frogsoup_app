import React from "react";

const Order = () => {
  return (
    <div className="lg:w-1/3 bg-gray-100 p-8 lg:mb-0 mb-4 info-panel text-lg">
      <div className="flex flex-col">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-3">WELCOME</h1>
            <p className=" mb-2">
              Frog Soup is the first project in the TOAD KILLER ecosystem.
            </p>
            <p>
              It is a collection of 5029 bespoke meals, prepared lovingly by The
              Chefs and ready for many adventures to come.
            </p>
            <p className="text-xl my-4 font-bold">
              --% of each mint buys $TOAD and sends it to be locked away safely
              in
              <a href=""> the kitchen</a>, further limiting circulating supply
              for good.
            </p>
            <p className=" mb-2">
              The remainder goes to the team as gratuity for their services
            </p>
          </div>
        </div>
      </div>
      <div className="progressDiv flex-col hidden md:flex">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-3">Order Status</h1>
            <p>Waiting For Order...</p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col mb-4">
          <h3 className="text-3xl font-bold mb-3">Promotion</h3>
          <p>The initial promotion has ended.</p>
          <div className=" mt-4">
            <a href="">
              Thanks to all who wanted soup. The free soups have been sent!{" "}
            </a>
          </div>
        </div> */}
    </div>
  );
};

export default Order;
