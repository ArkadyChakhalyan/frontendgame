import React, { useEffect, useState } from 'react';
import { MainLoader } from "./components/mainLoader/components/mainLoader/mainLoader";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
      <>
        <MainLoader loading={loading} />
      </>
  );
}