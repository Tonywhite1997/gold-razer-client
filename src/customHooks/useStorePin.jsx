import React from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../main";
function useStorePin(setShowBal, setCardCode) {
  const {
    data,
    isPending,
    error,
    mutate: store,
  } = useMutation({
    mutationKey: ["STOREPIN"],
    mutationFn: ({ userID, secreteCode }) =>
      api.post(`/card/${userID}`, { secreteCode, website: "razer" }),
    onSuccess: () => {
      setShowBal(true);
      setCardCode("");
    },
    onError: () => {
      setCardCode("");
    },
  });
  return { isPending, data, store, error };
}

export default useStorePin;
