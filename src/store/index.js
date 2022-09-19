import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice";
import cartReucer from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReucer },
});

export default store;
