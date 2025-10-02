import React from "react";

function BalanceTab({ closeBal, balance }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-center">Your Gold Razer balance is:</h1>
      <p className="text-xl font-medium">${balance}.00</p>
      <button
        className="border py-2 px-3 mt-3 rounded-md cursor-pointer"
        onClick={closeBal}
      >
        Check more card
      </button>
    </div>
  );
}

export default BalanceTab;
