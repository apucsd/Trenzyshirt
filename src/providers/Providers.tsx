"use client";

import { persistor, store } from "@/redux/store";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>{children}</NextUIProvider>
      </PersistGate>
    </Provider>
  );
};
export default Providers;
