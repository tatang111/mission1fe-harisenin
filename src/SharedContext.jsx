import { createContext, useState } from "react";

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [detailClickingSeries, setDetailClickingSeries] = useState(false);
  const [detailClickingFilm, setDetailClickingFilm] = useState(false);
  const [versiPembayaran, setVersiPembayaran] = useState(null)
  const [isSubscribe, setIsSubscribe] = useState(false)
  

  return (
    <PopupContext.Provider
      value={{
        detailClickingSeries,
        setDetailClickingSeries,
        detailClickingFilm,
        setDetailClickingFilm,
        versiPembayaran,
        setVersiPembayaran,
        isSubscribe,
        setIsSubscribe
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
