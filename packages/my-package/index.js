import React, { useState } from "react";
export const LocalizationProvider = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  return <div ref={setElement}>Hello!</div>;
};
