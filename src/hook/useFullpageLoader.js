import React, { useState } from "react";
import FullPageLoader from "../Component/FullPageLoader";

export default function useFullpageLoader() {
  const [loader, setLoader] = useState(false);

  return [
    loader ? <FullPageLoader /> : null,
    () => setLoader(true), //Show Loader
    () => setLoader(false), //Hide Loader
  ];
}
